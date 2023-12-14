import { _decorator, Component, EventKeyboard, find, Input, input, KeyCode, Label, Node, Tween, Vec3 } from 'cc';
import { Group } from './GroupManager';
const { ccclass, property } = _decorator;
import proto from './proto/proto.js';
import { ProtobufUtil } from './proto/util';
import { GameEvent } from './GameEvent';
import { Event_GameStart } from './Consts';
import { PlayerMgr } from './PlayerMgr';
const frameDuration = 0.033;//帧间隔
export const speed = 20
class PlayerLogicData {
    serverCmdMap: Map<number, Map<number, proto.pb.IGameCMD>>
    clientCmdMap: Map<number, Map<number, proto.pb.IGameCMD>>
    lastVerifyTick = 0
    logicTick = 0
    clientTick = 0
    serverTick = 0
    logicPos

    constructor() {
        this.serverCmdMap = new Map()
        this.clientCmdMap = new Map()
    }
    resetTickNo(tickNo: number) {
        this.lastVerifyTick = tickNo
        this.logicTick = tickNo
        this.clientTick = tickNo
        this.serverTick = tickNo
    }
    pushServerCmd(cmd: proto.pb.IGameCMD) {
        if (cmd.tickNo > this.serverTick) {
            this.serverTick = cmd.tickNo
        }
        let m = this.serverCmdMap.get(cmd.tickNo)

        if (!m) {
            m = new Map()
            this.serverCmdMap.set(cmd.tickNo, m)
        }
        m.set(cmd.uid, cmd)
    }
    pushClientCmd(cmd: proto.pb.IGameCMD) {
        let m = this.clientCmdMap.get(cmd.tickNo)
        if (!m) {
            m = new Map()
            this.clientCmdMap.set(cmd.tickNo, m)
        }
        m.set(cmd.uid, cmd)
    }
    updateVerifiedTick(tickNo: number) {
        this.lastVerifyTick = tickNo
    }
}
@ccclass('Player')
export class Player extends Component {
    private dir = 0
    private tickTime = 0
    private logicData = new PlayerLogicData()
    private group: Group
    private isStart: boolean
    private red: Node
    private blue: Node
    private lbl_ping: Label
    private delay: number
    private offset: number
    private lastDelay: number
    private moveTween: Tween<Node>
    start() {
        this.red = find("red", this.node)
        this.blue = find("blue", this.node)
        this.lbl_ping = find("ping", this.node).getComponent(Label)
        this.group = this.getComponent(Group)
        this.group.txt_delay.node.on("text-changed", this.onDelayChange, this)
        this.onDelayChange()
        this.node.on(Event_GameStart, (event: GameEvent) => {
            this.gameStart(event.detail)
        })
    }

    gameStart(msg: proto.pb.GameStartNotify) {

        PlayerMgr.register(this.group.groupType, this)
        console.log("game start!");
        this.sendPing((expectServerIndex) => {
            this.logicData.resetTickNo(expectServerIndex)
            console.log(`reset${this.group.groupType}`, expectServerIndex)
            this.isStart = true
        })
        if (this.group.groupType == 1) {
            input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
            input.on(Input.EventType.KEY_UP, this.onKeyUp, this)
        }

        this.getPomelo().on("logicTick", this.onCMDs)
    }
    getFrameDuration() {
        if (this.offset < 0) {
            return frameDuration * 1.2
        } else if (this.offset > 0) {
            return frameDuration * 0.8
        }
        return frameDuration
    }
    update(deltaTime: number) {
        if (this.isStart) {

            this.tickTime += deltaTime
            if (this.tickTime >= this.getFrameDuration()) {
                this.tickTime -= this.getFrameDuration()
                this.onLogicTick()
            }
        }


    }
    onKeyUp(event: EventKeyboard) {
        this.dir = 0

    }
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A: {
                this.moveLeft()
                break
            }
            case KeyCode.KEY_D: {
                this.moveRight()
                break
            }
        }

    }
    moveLeft() {
        this.dir = -1
    }
    moveRight() {
        this.dir = 1
    }
    onLogicTick() {
        this.logicData.clientTick++
        this.sendPing()
        this.sendCMD()
        this.executeServerCmd()
    }
    getPomelo() {
        return this.group.pomelo
    }
    getExpectServerTickNo(serverTickNo: number) {
        let expectServerIndex = serverTickNo + this.lastDelay / (this.getFrameDuration() * 1000)
        return Math.floor(expectServerIndex)
    }
    sendPing = (f?: Function) => {
        if (this.getPomelo() != null) {
            let cmd = proto.pb.PingReq.create()
            cmd.clientTickNo = this.logicData.clientTick
            let bytes = ProtobufUtil.PbEncode(cmd)
            let sendTime = Date.now()
            this.delayDo(() => {
                this.getPomelo().request("room.room.ping", bytes, (data) => {
                    this.delayDo(() => {
                        let pong = proto.pb.PongRes.decode(data.body)
                        let delay = Date.now() - sendTime
                        this.lastDelay = delay
                        let expectServerIndex = this.getExpectServerTickNo(pong.serverTickNo)
                        this.lbl_ping.string = "ping:" + delay
                        if (expectServerIndex > this.logicData.clientTick) {
                            this.offset = 1
                            console.log(`加速${this.group.groupType}`, pong.serverTickNo, expectServerIndex, this.logicData.clientTick)
                        } else if (expectServerIndex + 5 < this.logicData.clientTick) {
                            console.log(`减速${this.group.groupType}`, pong.serverTickNo, expectServerIndex, this.logicData.clientTick)
                            this.offset = -1
                        } else {
                            this.offset = 0
                            // console.log(`常速${this.group.groupType}`, pong.serverTickNo, expectServerIndex, this.logicData.clientTick)

                        }
                        if (f) {
                            f(expectServerIndex)
                        }
                    })

                })
            })



        }
    }
    sendCMD() {
        if (this.getPomelo() != null) {
            let cmd = proto.pb.GameCMD.create()
            cmd.dir = this.dir
            cmd.uid = this.group.groupType
            cmd.tickNo = this.logicData.clientTick
            if (cmd.dir != 0) {
                console.log("send:", cmd)
            }
            let bytes = ProtobufUtil.PbEncode(cmd)
            this.delayDo(() => {
                this.getPomelo().notify("room.room.GameCMD", bytes)
            })
            if (this.group.enablePredict()) {
                this.logicData.pushClientCmd(cmd)
                this.onCMD(cmd, false)
            }
        }
    }
    delayDo(f) {
        setTimeout(() => {
            f()
        }, this.getDelay() / 2);
    }

    onCMDs = (data) => {
        let msg = proto.pb.GameCMDs.decode(data)
        this.logicData.logicTick = msg.tickNo
        let needLog = false
        msg.cmds.forEach(c => {
            if (c.dir > 0) {
                needLog = true
            }
        });
        this.delayDo(() => {
            msg.cmds.forEach(c => {
                this.logicData.pushServerCmd(c)
            });
        })


    }
    isSameCmd(a: proto.pb.IGameCMD, b: proto.pb.IGameCMD) {
        return a.uid == b.uid && a.dir == b.dir && a.tickNo == b.tickNo
    }
    onCMD(cmd: proto.pb.IGameCMD, fromServer: boolean) {
        if (cmd.uid != 1) {
            return
        }
        if (cmd.dir != 0) {
            console.log(`onCMD${this.group.groupType} before `, cmd, fromServer, this.red.position)
        }
        let pos = this.red.position
        if (!this.logicData.logicPos) {
            this.logicData.logicPos = new Vec3(pos.x, pos.y, pos.z)
        }
        if (fromServer) {
            this.logicData.updateVerifiedTick(cmd.tickNo)

            pos = this.logicData.logicPos
        }
        let newPos = new Vec3(pos.x + cmd.dir * speed, pos.y, 0)
        if (fromServer) {
            this.logicData.logicPos = newPos
        }
        if (cmd.dir != 0) {
            console.log(`onCMD${this.group.groupType} after`, cmd, fromServer, this.red.position)
        }
        if (this.group.enableSettle() && fromServer && this.isSameCmd(this.logicData.clientCmdMap.get(cmd.tickNo).get(this.group.groupType), cmd)) {
            return
        }
        this.updateRenderPosition(newPos)
    }
    updateRenderPosition(newPos: Vec3) {
        if (newPos.equals(this.red.position)) {
            return
        }
        if (this.group.enableInterpolation()) {
            if (this.moveTween) {
                this.moveTween.stop();
            }
            this.moveTween = new Tween(this.red)
            this.moveTween.to(0.1, { position: newPos }).start()
        } else {

            this.red.position = newPos
        }

    }
    onDelayChange() {
        this.delay = Number(this.group.txt_delay.string)

    }
    getDelay() {
        if (this.group.groupType == 2) {
            return 0
        }
        return this.delay
    }
    executeServerCmd() {
        for (let tickNo = this.logicData.lastVerifyTick + 1; tickNo < this.logicData.serverTick; tickNo++) {
            const cmdMap = this.logicData.serverCmdMap.get(tickNo);
            if (cmdMap) {
                for (const cmd of cmdMap.values()) {
                    this.onCMD(cmd, true)
                }
            }
        }
    }
}

