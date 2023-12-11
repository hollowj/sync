import { _decorator, Component, EditBox, find, Node, Toggle } from 'cc';
import { ProtocolManager } from './ProtocolManager';
import  proto  from './proto/proto.js';
import { ProtobufUtil } from './proto/util';
import { GameEvent } from './GameEvent';
import { Event_GameStart } from './Consts';

const { ccclass, property } = _decorator;

@ccclass('Group')
export class Group extends Component {
    @property(EditBox)
    public  txt_delay :EditBox;
    @property(Toggle)
    public   tg_predict :Toggle;
    @property(Toggle)
    public  tg_settle :Toggle;
    @property(Toggle)
    public  tg_interpolation :Toggle;
    @property(Number)
    public groupType =0//组类型
   public  pomelo 
    start() {
        if (this.groupType==2){
            let menuObj=find("menu",this.node)
            menuObj.active=false
        }
        this.pomelo= window.newPomelo()
        this.pomelo.on("io-error",ProtocolManager.onWSError)
        this.pomelo.on("disconnect",ProtocolManager.onDisconnect)
        this.pomelo.on("disconnect",this.onDisconnect)
        this.pomelo.init({host: ProtocolManager.host, port: ProtocolManager.port, path: '/'},  ()=> {
            console.log("connected!");
            
            let req=   proto.pb.LoginReq.create()
            req.username=this.groupType.toString()
            let bytes=ProtobufUtil.PbEncode(req)
            this.pomelo.request("gate.users.login", bytes,  (data) =>{
                let res= proto.pb.LoginRes.decode(data.body)
                console.log(data,res);
                this.enterRoom()
    
            });
        })
        this.pomelo.on("gamestart",this.onStart)

    }

    update(deltaTime: number) {
        
    }
    enterRoom(){
        let req=   proto.pb.EnterRoomReq.create()
        req.rid=1
        let bytes=ProtobufUtil.PbEncode(req)
        this.pomelo.request("game.player.enterRoom", bytes,  (data)=> {
            let res= proto.pb.EnterRoomRes.decode(data.body)
            console.log(data,res);
            this.ready(req.rid)
        });
    }

    ready(rid ){
        let req=   proto.pb.ReadyReq.create()
        let bytes=ProtobufUtil.PbEncode(req)
        this.pomelo.request("room.room.ready", bytes, function (data) {
            let res= proto.pb.ReadyRes.decode(data.body)
            console.log(data,res);


        });
    }
    onStart=(data )=>{
        let res= proto.pb.GameStartNotify.decode(data)
        console.log(res);
        this.node.dispatchEvent(new GameEvent(Event_GameStart,false,res))
    }
     onDisconnect=(event)=>{
       this.pomelo=null
    }
    enablePredict(){
       return  this.tg_predict.isChecked
    }
    enableSettle(){
        return  this.tg_settle.isChecked
     }
     enableInterpolation(){
        return  this.tg_interpolation.isChecked
     }
}

