import { _decorator, Component, EventKeyboard, find, Input, input, KeyCode, Node, Vec3 } from 'cc';
import { Group } from './GroupManager';
const { ccclass, property } = _decorator;
import proto from './proto/proto.js';
import { ProtobufUtil } from './proto/util';
import { GameEvent } from './GameEvent';
import { Event_GameStart } from './Consts';
import { PlayerMgr } from './PlayerMgr';
const frameDuration = 0.033;//帧间隔
export const speed = 8

@ccclass('Player')
export class Player extends Component {
    private dir = 0
    private tickTime = 0
    private logicTick = 0
    private group: Group
    private isStart: boolean
    private red: Node
    private delay: number
    private msgQueue: Array<DelayMsg> = []
    start() {
        this.red = find("red", this.node)
        this.group = this.getComponent(Group)
        this.group.txt_delay.node.on("text-changed", this.onDelayChange, this)
        this.onDelayChange()
        this.node.on(Event_GameStart, (event: GameEvent) => {
            this.gameStart()
        })
    }

    gameStart() {
        PlayerMgr.register(this.group.groupType, this)
        console.log("game start!");
        this.isStart = true
        if (this.group.groupType == 1) {
            input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
            input.on(Input.EventType.KEY_UP, this.onKeyUp, this)
        }
        this.getPomelo().on("logicTick", this.onCMDs.bind(this))
    }
    update(deltaTime: number) {
        if (this.isStart) {
            let i = 0
            for (let index = 0; index < this.msgQueue.length; index++) {
                const element = this.msgQueue[index];
                if (Date.now() - element.receiveTime > this.getDelay()) {
                    this.onCMD(element.cmd)
                    i = index + 1
                } else {
                    break
                }
            }
            if (i > 0) {
                this.msgQueue = this.msgQueue.slice(i)
            }
            this.tickTime += deltaTime
            if (this.tickTime >= frameDuration) {
                this.tickTime -= frameDuration
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
        this.logicTick++
        this.sendCMD()
    }
    getPomelo() {
        return this.group.pomelo
    }
    sendCMD() {
        if (this.getPomelo() != null) {
            let cmd = proto.pb.GameCMD.create()
            cmd.dir = this.dir
            cmd.uid = this.group.groupType
            cmd.tickNo = this.logicTick
            if (cmd.dir > 0) {
                console.log("send:", cmd)
            }
            let bytes = ProtobufUtil.PbEncode(cmd)
            this.getPomelo().notify("room.room.GameCMD", bytes)
        }
    }
    onCMDs(data) {
        let msg = proto.pb.GameCMDs.decode(data)
        let needLog = false
        msg.cmds.forEach(c => {
            if (c.dir > 0) {
                needLog = true
            }
        });
        if (needLog) {
            console.log("oncmds:", this.group.groupType, msg)
        }

        msg.cmds.forEach(c => {
            if (c.dir > 0) {
                console.log("oncmds:", this.group.groupType, c)
            }
            this.msgQueue.push(new DelayMsg(c))
        });
    }
    onCMD(cmd: proto.pb.IGameCMD) {
        if (cmd.dir != 0) {
            console.log("onCMD:", this.group.groupType, cmd.dir, cmd.tickNo)
        }
        this.red.position = new Vec3(this.red.position.x + cmd.dir * speed, this.red.position.y, 0)
    }
    onDelayChange() {
        this.delay = Number(this.group.txt_delay.string)

    }
    getDelay() {
        if (this.group.groupType == 2) {
            return 0
        }
        if (this.group.groupType == 3) {
            return this.delay + PlayerMgr.getPlayerByUid(1).delay
        }
        return this.delay
    }
}

class DelayMsg {
    receiveTime: number
    cmd: proto.pb.IGameCMD
    constructor(cmd: proto.pb.IGameCMD) {
        this.cmd = cmd
        this.receiveTime = Date.now()
    }
}