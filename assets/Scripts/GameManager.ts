import { _decorator, Component, Node } from 'cc';
import { ProtocolManager } from './ProtocolManager';
import { ProtobufUtil } from './proto/util';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {

    start() {
      ProtobufUtil.InitAllPb()
    }

    update(deltaTime: number) {
        
    }
 
}

