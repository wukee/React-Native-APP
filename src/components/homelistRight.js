
import React, {Component} from 'react';
import {Platform, StyleSheet,
    Text, View, TextInput,
    Button, TouchableHighlight,Image,
    ScrollView
} from 'react-native';
import TabNavigator from "react-native-tab-navigator";
import axios from "axios";
import {Actions} from "react-native-router-flux";
import FlightInfoComp from './FlightInfoComp/FlightInfoComp'
import PersonalInfoComp from './PersonalInfoComp/PersonalInfoComp'
import TaskListComp from './TaskListComp/TaskListComp'
export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedTab: "home",
            bgColor:'#3F3D52',
            bgColor2:'',
            bgColor3:''

        }
    }
    componentDidMount() {
        // 任务列表a
        //     var _this = this;
        //     // console.log(122)
        //     axios.get("http://192.168.2.107:8081/flight/stbutton/findBus?taskOpeStaffId=12321",
        //     ).then(function (response) {
        //         // console.log(response.data.data[0].taskAccTime)
        //         var num=response.data.data
        //         if(num){
        //             _this.setState({
        //                 list:num
        //             })
        //         }
        //     }).catch(function (error) {
        //             console.log(1,error);
        //         });
        //     //人员信息
        //     axios({
        //         url:"http://192.168.2.107:8080/base/staffinfocontroller/getStaffList",
        //         method:"GET",
        //         params:{staffId:'000001'}
        //     }).then((res)=>{
        //         console.log(res.data.data)
        //         this.setState({
        //             person:res.data.data[0]
        //         })
        //     }).catch((error)=>{
        //         console.log(error)
        //     })
        // }
        //车牌号
        // onUsernameChanged = (newUsername) => {
        //     console.log(newUsername)
        //     this.setState({
        //         username:newUsername
        //     })
        // };
        // input的值
        // onPasswordChanged=(newPassword)=>{
        //     console.log(newPassword)
        //     this.setState({
        //         flag:newPassword
        //     })
        // }
        // //绑定
        // loginHome = () =>{
        //     var id=this.state.person.staffId
        //     axios.post('http://192.168.2.107:8080/base/carbindingcontroller/carBinDing',{
        //         sfvhStaffId:id,
        //         vehiNo:this.state.flag
        //     }).then((res)=>{
        //         Actions.refresh()
        //     }).catch((error)=>{
        //         console.log(error)
        //     })
        // }
    }

    onPress = () => {
        // Actions.reset()
        Actions.jump('FlightInfoComp')

        // Actions.TaskListComp()
        this.setState({
            bgColor: '#3F3D52',
            bgColor2:"#2A2C3B",
            bgColor3:"#2A2C3B"
        });
    };
    onPress2 = () => {
        // Actions.reset()
        Actions.jump('TaskListComp')


        // Actions.PersonalInfoComp()
        this.setState({
            bgColor2: '#3F3D52',
            bgColor:"#2A2C3B",
            bgColor3:"#2A2C3B"

        });
    };
    onPress3 = () => {
        // Actions.reset()
        Actions.jump('PersonalInfoComp')


        // Actions.FlightInfoComp()
        this.setState({
            bgColor3: '#3F3D52',
            bgColor1:"#2A2C3B",
            bgColor2:"#2A2C3B"
        });
    };
    render() {
        return (
            <View style={styles.views}>
                <View style={[styles.contents,{backgroundColor:this.state.bgColor}]}>
                    {/*TouchableHighlight可使图片实现点击效果，用onPress属性可实现跳转*/}
                    <TouchableHighlight  onPress={this.onPress}>
                        <Image
                            style={styles.images}
                            source={require("../../src/img/li.png")}
                        />
                    </TouchableHighlight>
                    <Text style={styles.text}>航班</Text>
                </View>
                <View style={[styles.contents,{backgroundColor:this.state.bgColor2}]}>
                    <TouchableHighlight  onPress={this.onPress2}>
                        <Image
                            style={styles.images}
                            source={require("../../src/img/zhuang.png")}
                        />
                    </TouchableHighlight>
                    <Text style={styles.text}>信息</Text>
                </View>
                <View style={[styles.contents,{backgroundColor:this.state.bgColor3}]}>
                    <TouchableHighlight  onPress={this.onPress3}>
                        <Image
                            style={styles.images}
                            source={require("../../src/img/222.png")}
                        />
                    </TouchableHighlight>
                    <Text style={styles.text}>信息</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    views:{
        width:80,
        height:"100%",
        backgroundColor:"#2A2C3B"
    },
    contents:{
        textAlign: "center",
        width:"100%",
        height:60,
        alignItems: "center",
        paddingTop:10
    },
    images:{
        height:26,
        width:26,
        paddingTop:5
    },
    text:{
        color:'#FFF'
    },





    ///

})
