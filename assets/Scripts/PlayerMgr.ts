import { Player } from "./Player";

export class PlayerMgr{
    static playerMap:Map<number,Player>=new Map<number,Player>

    static register(uid,player:Player){
        PlayerMgr.playerMap[uid]=player
    }
    static getPlayerByUid(uid :number):Player{
        return PlayerMgr.playerMap[uid]
    }
}