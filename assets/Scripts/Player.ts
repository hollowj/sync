import { _decorator, Component, EventKeyboard, find, Input, input, KeyCode, Node, Vec3 } from 'cc';
import { Group } from './GroupManager';
const { ccclass, property } = _decorator;
import proto from './proto/proto.js';
import { ProtobufUtil } from './proto/util';
import { GameEvent } from './GameEvent';
import { Event_GameStart } from './Consts';
const frameDuration = 0.033;//帧间隔
export const speed =8

@ccclass('Player')
export class Player extends Component {
    private dir = 0
    private lastTickTime = 0
    private logicTick = 0
    private group: Group
    private isStart: boolean
    private red :Node
    start() {
        this.red=find("red",this.node)
        this.group = this.getComponent(Group)
        this.node.on(Event_GameStart, (event: GameEvent) => {
            this.gameStart()
        })
    }

    gameStart() {
        console.log("game start!");
        this.isStart = true
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this)
    }
    update(deltaTime: number) {
        if (this.isStart) {
            this.lastTickTime += deltaTime
            if (this.lastTickTime >= frameDuration) {
                this.lastTickTime -= frameDuration
                this.onLogicTick()
            }
        }


    }
    onKeyUp(event: EventKeyboard) {
        this.dir = 0

    }
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:{
                this.moveLeft()
                break
            }
            case KeyCode.KEY_D:{
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
            let bytes = ProtobufUtil.PbEncode(cmd)
            this.getPomelo().notify("room.room.GameCMD", bytes)
            this.onCMD(cmd)
        }
    }
    onCMD(cmd :proto.pb.GameCMD){
        this.red.position=new Vec3(this.red.position.x+cmd.dir*speed,this.red.position.y,0)
    }
}

