import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

var pomelo 
var instance
export class ProtocolManager{
    static host="127.0.0.1"
    static port=32761
    constructor(){
        pomelo=window.pomelo
    }
    static getInstance() :ProtocolManager{
        if (instance==null){
            instance=new ProtocolManager()
        }
        return instance
    }
     login(username){
        pomelo.request("game.player.login", {"username":username}, function (data) {
        

        });
    }
   static onDisconnect(event){
        console.log("连接已断开,",event)
    }
  static  onWSError(event){
        console.log("连接创建错误,",event)
    }

}