import { _decorator, Component, EditBox, find, Node, Toggle } from 'cc';
import { ProtocolManager } from './ProtocolManager';
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
        if (this.groupType==1){
            let menuObj=find("menu",this.node)
            menuObj.active=false
        }
        this.pomelo= clone(window.pomel,{})
        this.pomelo.on("io-error",ProtocolManager.onWSError)
        this.pomelo.on("disconnect",ProtocolManager.onDisconnect)
        this.pomelo.init({host: ProtocolManager.host, port: ProtocolManager.port, path: '/'}, function () {
            console.log("connected!");
            this.pomelo.request("game.player.login", {"username":this.groupType}, function (data) {
            
                console.log(data);
    
    
            });
        })
    }

    update(deltaTime: number) {
        
    }
   
}

 
function clone(obj, obj_clone = {}){
    // 判断被克隆的对象是不是一个空对象，如果是空对象就直接return，不在继续往下执行
    if(Object.keys(obj).length == 0) return obj_clone;
    // 遍历对象
    for(var key in obj){
        // 判断当前遍历到的属性是不是对象的，（不是原型上的，原型上的不克隆）
        if(obj.hasOwnProperty(key)){
            // 判断obj当前属性是原始类型还是引用类型
            // 使用typeof 可以简单区分原始类型和引用类型
            if(typeof obj[key] == 'function' || typeof obj[key] == 'object'){
                // 调用toString方法
                let toString = Object.prototype.toString;
                if(toString.call(obj[key]) == '[object Object]'){
                    obj_clone[key] = {};
                } else if(toString.call(obj[key]) == '[object Array]') {
                    obj_clone[key] = [];
                } else if(toString.call(obj[key]) == '[object Function]'){
                    obj_clone[key] = new Function();
                }
                // 递归，当有数组或者对象的时候继续往里面深入，重复调用当前的函数
                    // 第一种方法
                    // callee是arguments对象的一个属性，指向arguments对象的函数这个函数就是clone（clone=arguments.callee）
                    // arguments.callee(obj[key], obj_clone[key]);
                // 第二种方法
                clone(obj[key], obj_clone[key]);
            } else { // 原始数据类型直接赋值
                obj_clone[key] = obj[key];
            }
        }
    }
    return obj_clone;
}
