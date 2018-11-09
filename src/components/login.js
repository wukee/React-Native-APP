
import React, {Component} from 'react';
import {connect} from'react-redux';
import {OnLoginBTNClick} from '../action/LoginAction'
import {bindActionCreators} from 'redux'
import {Platform, StyleSheet,
    Text, View,Button,TextInput,
    TouchableHighlight,Navigator
} from 'react-native';
import {Actions}from 'react-native-router-flux'
import axios from 'axios'
 class App extends Component {
    constructor(props){
        super(props)
        this.state={
           token:"111",
            username:"",
            password:""
        }
    }
    onUsernameChanged = (newUsername) => {
        console.log(newUsername)
        this.setState({
            username:newUsername
        })
    };
    onPasswordChanged=(newPassword)=>{
        console.log(newPassword)
        this.setState({
            password:newPassword
        })
    }
    Logins=()=>{
        console.log(1)
        var _this=this
        // var username=this.state.username
        // var password=this.state.password
        // LoginDao.login(username,password,).then((res)=>{
        //     console.log(res)
        // }).catch((error)=>{
        //     console.log(error)
        // })
        axios({
            url:"http://192.168.2.101:8080/base/logincontroller/stafflogin",
            method:"POST",
            data:{
                staffId:_this.state.username,
                staffPwd:_this.state.password
            }
        }).then((res)=>{
            console.log(res)
            var num=response.data.data.staffId
                _this.setState({
                        token:num
                    })
                if(_this.state.token=="111"){
                   Actions.Homelist()
                }else{
                    alert("密码错误")
                }
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })



    }
    render() {
        return (
                <View style={styles.container}>
                  <TextInput style={styles.textInputStyle} placeholder={"请输入账号"}
                             onChangeText={this.onUsernameChanged}
                  ></TextInput>
                 <TextInput style={styles.textInputStyle} password={true} placeholder={"请输入密码"}
                            secureTextEntry={true}
                            onChangeText={this.onPasswordChanged}
                 ></TextInput>
                    <TouchableHighlight
                        onPress={()=>{
                            this.props.OnLoginBTNClick(this.state.username,this.state.password)
                        }}
                        // onPress={this.Logins.bind(this)}
                        style={styles.butto}  >
                        <Text>登录</Text>
                    </TouchableHighlight>
                </View>
        )
    }
}
export default connect((state)=>{
    return {}
},(dispatch)=>{
    return bindActionCreators({
        OnLoginBTNClick
    },dispatch)
})(App)
var styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",

        textAlign: "center",
        alignItems:'center',
        justifyContent:'center',
        textAlignVertical:'center',
    },
    textInputStyle: {
        // 设置尺寸密码
        marginTop:50,
        borderRadius: 5,
        width:300,
        height:40,
        borderWidth: 1,
        borderStyle:"solid"
        // 设置背景颜色
    },
    butto:{
        marginTop:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 5,
        width:300,
        height:40,
        backgroundColor:"#0090CE",

    }
});
