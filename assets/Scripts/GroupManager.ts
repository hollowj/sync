import { _decorator, Component, EditBox, find, Node, Toggle } from 'cc';
import { ProtocolManager } from './ProtocolManager';
import protobufjs from 'protobufjs'
import  proto  from './proto/proto.js';
import { ProtobufUtil } from './proto/util';

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
   private  pomelo 
    start() {
        console.log(protobufjs)
        if (this.groupType==1){
            let menuObj=find("menu",this.node)
            menuObj.active=false
        }
        this.pomelo= window.newPomelo()
        this.pomelo.on("io-error",ProtocolManager.onWSError)
        this.pomelo.on("disconnect",ProtocolManager.onDisconnect)
        this.pomelo.init({host: ProtocolManager.host, port: ProtocolManager.port, path: '/'}, function () {
            console.log("connected!");
            let req=   proto.pb.LoginReq.create()
            req.username=this.groupType
            console.log(req)
            let bytes=ProtobufUtil.PbEncode(req)
            this.pomelo.request("game.player.login", bytes, function (data) {
            
                console.log(data);
    
    
            });
        }.bind(this))
    }

    update(deltaTime: number) {
        
    }
   
}

 