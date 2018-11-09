import React, { Component } from 'react';
import {Text, StyleSheet, View, TouchableHighlight, Image, ScrollView} from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import config from '../constant/config'
import dao from '../dao/taskDao/taskDao'
import {Actions} from "react-native-router-flux";
import {onGetOilMessWebsocketMessage,oilInfoInit,onChangeTaskInfoButtonState} from "../action/TaskAction";

class TaskInfoComp extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.oilInfoInit();
        //接受任务触发websocket连接读取实时加油量
        // const ws = new WebSocket(config.sockeIP+':12306');
        // const ws = new WebSocket('ws://192.168.1.3:8070/webscoket/'+'')
        // ws.onopen = () =>{};
        // ws.onmessage = (e) => {
        //     let data =JSON.parse(e.data);
        //     let oilMess = data.num_data.split(',');
        //     this.props.onGetOilMessWebsocketMessage(oilMess[0])
        // }
    }
    onChangeAcceptOrShowInvoice(buttonState){
        let params3={
            taskId:this.props.task.taskId,
            taskStatus:3,
            sfvhStaffId:this.props.staffId,
            taskOpeStaffId:this.props.staffId
        };
        let params5={
            taskId:this.props.task.taskId,
            taskStatus:5,
            sfvhStaffId:this.props.staffId,
            taskOpeStaffId:this.props.staffId
        };
       if(buttonState)
       {
           //点击生成油单按钮
           dao.onClickAcceptTaskButtonDao(
               params5,
               (res)=>{console.log(res)},
               (err)=>{console.log(err)},
           );
           this.props.onChangeTaskInfoButtonState(false);
           Actions.InvoiceComp({taskID:this.props.task.taskId});
       }else {
           //点击接受任务按钮
           dao.onClickAcceptTaskButtonDao(
               params3,
               (res)=>{console.log(res)},
               (err)=>{console.log(err)},
           );
           this.props.onChangeTaskInfoButtonState(true)
       }
    }
    render() {
        return (
            <View>
                {/*//导航栏*/}
                {/*<View style={styles.wrap}>*/}
                    {/*<Image style={styles.img} source={require('.././img/1.png')}></Image>*/}
                    {/*<Text style={styles.title}><Image source={require('.././img/1.png')}></Image> 中航油-任务详情列表</Text>*/}
                    {/*<Image style={styles.img} source={require('.././img/1.png')}></Image>*/}
                {/*</View>*/}
                {/*主体内容*/}
                <View style={styles.boodyer}>
                    <ScrollView style={styles.boodyerS}>
                        <View style={styles.nav}>
                            <Text>
                                <Text style={{color:"#b6352b"}}>   航班号  : {`${this.props.task.flgtAFlno}`}     </Text>
                                <Text style={{color:"white"}}>   油单号  : {this.props.task.taskFuelRecptNo}</Text>
                            </Text>
                            <View style={styles.butn}>
                                <TouchableHighlight    onPress={()=>{this.onChangeAcceptOrShowInvoice(this.props.buttonState)}} style={styles.buttnn} >
                                    <Text style={styles.tex}>{this.props.buttonState ? '生成油单':'接受' }</Text>
                                </TouchableHighlight>
                                <TouchableHighlight    style={[styles.buttnn,styles.hei]} >
                                    <Text style={styles.tex}>拒绝</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        {/*数据*/}
                        <View style={styles.shuju}>
                            <Text style={styles.shu}>机型:{this.props.task.flgtDAcname}</Text>
                            <Text  style={styles.shu}>机号:{this.props.task.flgtDRegn}</Text>
                            <Text  style={styles.shu}>机位:{this.props.task.flgtDPlacecode}</Text>
                            <Text  style={styles.shu}>时间:{this.props.task.flgtExedate}</Text>
                            <Text  style={[styles.shu,styles.bai]}>航班状态:{this.props.task.flgtDGame}</Text>
                            <Text   style={[styles.shu,styles.bai]}>进出类型:{this.props.task.flgtDAdid}</Text>
                            <Text   style={[styles.shu,styles.bai]}>航班属性:{this.props.task.flgtDFlti}</Text>
                            <Text   style={[styles.shu,styles.bai]}>隶属单位:{this.props.task.flgtDAlcname}</Text>
                            <Text  style={styles.shu}>起始地:{this.props.task.flgtAOrgnm}</Text>
                            <Text  style={styles.shu}>目的地:{this.props.task.flgtDDesnm}</Text>
                            <Text  style={styles.shu}>经停地:{this.props.task.flgtDTrsnm}</Text>
                            <Text  style={styles.shu}>标记:{this.props.task.flgtStarmark}</Text>
                            <Text  style={[styles.shu,styles.bai]}>计划起飞时间:{this.props.task.flgtAStot}</Text>
                            <Text  style={[styles.shu,styles.bai]}>预计到达时间:{this.props.task.flgtAEtot}</Text>
                            <Text  style={[styles.shu,styles.bai]}>实际到达时间:{this.props.task.flgtDAtot}</Text>
                            <Text  style={[styles.shu,styles.bai]}>预计起飞时间:{this.props.task.flgtDEtot}</Text>
                            <Text   style={styles.shu}>航线:{this.props.task.flgtDVialc}</Text>
                            <Text   style={styles.shu}>进港航班号:{this.props.task.flgtAFlno}</Text>
                            <Text   style={styles.shu}>出港航班号:{this.props.task.flgtDFlno}</Text>
                            <Text   style={styles.shu}>状态 :{this.props.task.taskStatus}</Text>
                            <Text  style={[styles.shu,styles.bai]}>调度员:{this.props.task.taskCreStaffId}</Text>
                            <Text  style={[styles.shu,styles.bai]}>加油员:{this.props.task.taskOpeStaffId}</Text>
                            <Text   style={[styles.shu,styles.bai]}>加油车编号:{this.props.task.taskVehiNo}</Text>
                            <Text   style={[styles.shu,styles.bai]}>地井编号:{this.props.task.wellHydrtPitNo}</Text>
                            <Text   style={styles.shu}>油单编号:{this.props.task.taskFuelRecptNo}</Text>
                            <Text   style={styles.shu}>状态:{this.props.task.taskFuelRecptNo}</Text>
                            <Text  style={styles.shu}>加油量 :{this.props.task.oliMess}</Text>
                        </View>
                        {/*//油温度*/}
                        <View style={styles.wen}>
                            <Text style={styles.du}>油温度:{`${this.props.oilInfo.fuelTemp}`}</Text>
                            <Text style={styles.du}>油密度:{`${this.props.oilInfo.fuelDnst}`}</Text>
                            <Text style={styles.du}>油品:{`${this.props.oilInfo.fuelName}`}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskInfoComp)
function mapStateToProps(state,ownProps) {
    let tasks = state.TaskReducer.get('tasks');
    let buttonState = state.TaskReducer.get('buttonState');
    let oilInfo = state.TaskReducer.get('oilInfo');
    let staffId = state.GlobalReducer.staffId;
    //实时加油量 this.props.oliMess
    let oilMess = state.TaskReducer.get('oilMess');
    let task = tasks.map((item)=>{
       if(item.taskId == ownProps.taskID)
            return item;
    });
    task = task.filter((val)=>{
        return !(!val || val === "");
    });
    return {
        oilMess,
        staffId,
        oilInfo,
        buttonState,
        task:task[0],
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onGetOilMessWebsocketMessage,
        oilInfoInit,
        onChangeTaskInfoButtonState
    },dispatch)
}
const styles = StyleSheet.create({
    du:{
        color:"white",
        marginLeft:30,
        lineHeight:60
    },
    wen:{
        width:"100%",
        flexDirection:"row",
        marginBottom:120,
        height:60,
        lineHeight:80,
        backgroundColor:"#3A3949",
        fontSize:20
    },
    bai:{
        backgroundColor:"#3B3A4C",
        textAlign:"left"
    },
    shuju:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        flexWrap: "wrap",
        marginBottom: 30,

    },
    shu:{

        color:"#757786",
        flexDirection:"row",
        justifyContent:"flex-start",
        borderBottomWidth:0.5,
        borderStyle:"solid",
        width:"25%",
        lineHeight:50,
        height:50,
        paddingLeft:40,
        textAlign:"left",
    },
    tex:{
        textAlign:"center",
        textAlignVertical:"center",
        paddingTop:5,
        color:"white"
    },
    hei:{
        backgroundColor:"black"
    },
    buttnn:{
        height:30,
        marginRight:20,
        width:80,
        color:"white",
        backgroundColor:"red",
        textAlign:"center",
        textAlignVertical:"center",
        borderRadius:10
    },

    butn:{
        flexDirection:"row",
        color:"white"
    },
    btn:{
        backgroundColor:"blue",
        borderRadius: 50
    },
    boodyerS:{
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"#2A2C3B"
    },
    nav:{
        backgroundColor:"#2B2E41",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingTop:10,
        paddingBottom: 10
    },
    boodyer:{
        // backgroundColor: "#414257",
        height: "100%",
        backgroundColor:"#3A394B"

    },
    wrap:{
        width: "100%",
        // height: 60,
        display: "flex",
        justifyContent:"space-between",
        backgroundColor: "#2A2C3B",
        alignItems:"center",
        flexDirection:"row",
        height:50
    },
    title:{
        color:"white"
    },
    img:{
        marginLeft:20,
        marginRight:20,
        borderRadius: 10
    },
});

