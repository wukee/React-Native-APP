/**
 *
 * SocketContainer.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018/10/30
 *
 * @内容 作用
 * @内容 作用
 */
import React, { Componet } from 'react';
import {Stomp}from 'stompjs/lib/stomp'
import config from '../../../Constant/Config'
import {View} from 'react-native';
import * as SockJS from 'sockjs-client'
class SocketContainer extends Componet{
  constructor(props){
    super(props);
    this.WSstomp;
  }
  render(){
    <View>
      {React.Children.map(this.props.children,(child)=>
      {
        return(React.cloneElement(child,{...this.props}))
      })}
    </View>
  }
  componentDidMount(){
    if(!this.WSstomp||WSstomp.ws.readyState==3){
      this.WSstomp= new Stomp.client(config.socketIP)
      this.WSstomp.debug=function(){

      }
    }
  }
}
export default SocketContainer;
