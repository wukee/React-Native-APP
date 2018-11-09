
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight} from 'react-native';
import TabNavigator from "react-native-tab-navigator";
import axios from "axios";
import {Actions} from "react-native-router-flux";
export default class App extends Component<Props> {
    constructor(props){
        super(props)
            this.state={
              list:[],
                tableHead: ['pk', '特殊标记', '调度员', '加油员',"调度时间","任务状态","任务起始时间",
                "任务结束时间","加油车编号","地井编号"],
                tableOne:["员工姓名","员工ID","车辆号牌数", "操作"],
                selectedTab: "home",
                person:[],
                username:"",
                flag:""
        }
   }
   //接受消息
    componentWillMount(){
       console.log(this.Accept)
    }
    componentDidMount() {
        //任务列表
        var _this = this;
        axios.get("http://192.168.2.107:8082/task/stbutton/findBus?task_ope_staff_id=000002",
            ).then(function (response) {
            console.log(111,response)
            var num=response.data.data
            if(num){
                _this.setState({list:num})
            }
            }).catch(function (error) {
                console.log(error);
            });
      //人员信息
      //   axios.get("http://192.168.2.15:8080/base/staffinfocontroller/getStaffList",
      //   ).then(function (response) {
      //       console.log(response._bodyInit)
      //       var numone=JSON.parse(response._bodyInit)
      //       _this.setState({
      //           person:numone.data[0]
      //       })
      //   }).catch(function (error) {
      //       console.log(error,"人员信息");
      //   });
        fetch('http://192.168.2.15:8080/base/staffinfocontroller/getStaffList',
        ).then((response) => {
            console.log(response._bodyInit)
            var numone=JSON.parse(response._bodyInit)
               _this.setState({
                    person:numone.data[0]
                })
        }).catch((err) => {
            console.log(22222)
        });
    }
    //车牌号
    onUsernameChanged = (newUsername) => {
        console.log(newUsername)
        this.setState({username:newUsername})
    };
    // input的值
    onPasswordChanged=(newPassword)=>{
        console.log(newPassword)
        this.setState({flag:newPassword})
    }
    //绑定
    loginHome = () =>{
        var id=this.state.person.staffId
        console.log(id,this.state.flag)
        axios.post('http://192.168.2.15:8081/flight/carbindingcontroller/carBinDing',{
            sfvhStaffId:id,
            vehiNo:this.state.flag
        }).then((res)=>{
            console.log(res)
            if(res.status=="200"&&this.state.flag!=""){
                alert("绑定成功")
                // loginHome()
                Actions.Homelist()
            }else{
                alert("绑定失败")
            }
        }).catch((error)=>{
            console.log(error)
        })
     }
    render() {
        const state = this.state;
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="任务列表"
                    selectedTitleStyle={{color:"#007aff"}}//设置tab标题颜色
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <View style={styles.viewlst}>
                        <View style={styles.num}>
                            {
                                state.tableHead.map((l, i) => (
                                    <View key={i} style={styles.welcomeList}>
                                        <Text style={styles.posad}>{l}</Text>
                                    </View>
                                ))
                            }
                        </View>
                        <View style={styles.num}>
                            {
                                state.list.map((l, i) => (
                                    <View key={i} style={styles.welcomeList}>
                                        <Text style={styles.posad}
                                              onPress={()=>Actions.Homenum({list:l.taskId})}
                                        >{l.taskId}</Text>
                                        <Text style={styles.posad}>{l.taskFlightNo}</Text>
                                        <Text style={styles.posad}>{l.taskOpeStaffId}</Text>
                                        <Text style={styles.posad}>{l.taskAsgTime}</Text>
                                        <Text style={styles.posad}>{l.taskAccTime}</Text>
                                        <Text style={styles.posad}>{l.taskStatus}</Text>
                                        <Text style={styles.posad}>{l.taskChagEndTime}</Text>
                                        <Text style={styles.posad}>{l.taskRecCreTime}</Text>
                                        <Text style={styles.posad}>{l.taskVehiNo}</Text>
                                        <Text style={styles.posad}>{l.taskCreStaffId}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shebei'}
                    title="人员列表"
                    selectedTitleStyle={{color:"#007aff"}}
                    onPress={() => this.setState({ selectedTab: 'shebei' })}>
                    <View  style={styles.viewlst}>
                        <View style={styles.num}>
                        {
                            state.tableOne.map((l, i) => (
                                <View key={i} style={styles.welcomeList}>
                                    <Text style={styles.posad}>{l}</Text>
                                </View>
                            ))
                        }
                        </View>
                        <View  style={styles.num} >
                            <Text style={[styles.posad,styles.numTwo]}>{ state.person.staffName}</Text>
                            <Text style={[styles.posad,styles.numTwo]}>{ state.person.staffId}</Text>
                            <TextInput style={styles.posad}
                                       placeholder={"请输入车牌号"}
                                       onChangeText={this.onPasswordChanged}
                                       editable={true}/>
                            <Text onPress={this.loginHome}
                                  style={[styles.button,styles.posad]}  >绑定</Text>
                        </View>
                    </View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
const styles = StyleSheet.create({
    containerList: {
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    left:{
        marginLeft: 20,
    },
    numm:{
        width:"100%"
    },
    viewlst:{
        height:400,
        marginTop:10,
        marginLeft: 20,
    },
    numTwo:{

    },
    posad:{
        width:90,
        height:50,
        lineHeight:50,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"center",
        textAlign:"center",
        backgroundColor: '#F5FCFF',
        marginBottom: 10
    },
    button:{
        textAlign:"center",
        alignItems:'center',
        justifyContent:'center',
        textAlignVertical:'center',
        borderRadius: 5,
        width:30,
        backgroundColor:"blue",
    },
    welcomeList: {
        fontSize: 15,
        flexDirection:"row",
        borderStyle:"solid",
        alignItems:'center',
        textAlignVertical:'center',
        width:90,
        borderColor:"black",
        paddingTop:5,
    },
    num:{
        flexWrap:"wrap",
        flexDirection:"row",
        fontSize:15,
        width:"100%",
        alignItems:'center',
        textAlignVertical:'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        fontSize:30,
        marginBottom: 5,
    },
    textInputStyle: {
        // 设置尺寸
        borderRadius: 5,
        width:60,
        height:50,
        marginLeft:10,
        borderWidth: 1,
        borderStyle:"solid"
    }
});
