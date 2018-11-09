import React, { Component } from 'react';
import {Text, StyleSheet, View, TouchableHighlight, Image, ScrollView} from 'react-native';
import { connect } from 'react-redux'
import {TransformToChinese} from "../constant/numTransfer";
import dao from '../dao/taskDao/taskDao'
import {bindActionCreators} from 'redux'
import {Actions} from "react-native-router-flux";

class TaskInfoComp extends Component {
    constructor(props) {
        super(props);
    }
    onClickUpdateInvoiceButton(){
        dao.onUpdateinvoiceInformationDao(
            this.props._invoice,
            (res)=>{console.log(res)},
            (err)=>{console.log(err)}
        )
    }
    render() {
        console.log(this.props.invoice)
        return (
            <View style={styles.sheet}>
                {/*//导航栏*/}
                {/*<View style={styles.wrap}>*/}
                    {/*<Image style={styles.img} source={require('.././img/1.png')}></Image>*/}
                    {/*<Text style={styles.title}><Image source={require('.././img/1.png')}></Image> 中航油-任务详情列表</Text>*/}
                    {/*<Image style={styles.img} source={require('.././img/1.png')}></Image>*/}
                {/*</View>*/}
                {/*主体*/}
                <View  style={styles.boodyer}>
                    <ScrollView style={styles.boodyerS}>
                        {/*导航*/}
                        <View style={styles.nav}>
                            <Text>
                                <Text style={{color:"#B6352B"}}>   航班号  :  {this.props.invoice.flgtAFlno}   </Text>
                                <Text style={{color:"white"}}>   油单号  :  {this.props.invoice.flrcTestBillNo}</Text>
                            </Text>
                            <View style={styles.butn}>
                                <TouchableHighlight  onPress={()=>{this.onClickUpdateInvoiceButton()}}   style={styles.buttnn} >
                                    <Text style={styles.tex}>上传打印</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                        {/*数据*/}
                        <View style={styles.shuju}>
                            <Text style={styles.shu}>日期:{this.props.invoice.flrcDate}</Text>
                            <Text  style={styles.shu}>机场名称:｛this.props.invoice.flrcAirport｝</Text>
                            <Text  style={styles.shu}>进港航班号:{this.props.invoice.flrcFlightNo}</Text>
                            <Text  style={styles.shu}>机场号:{this.props.invoice.flrcAircrftNo}</Text>
                            <Text  style={[styles.shu,styles.bai]}>机型:{this.props.invoice.flrcAircrftType}</Text>
                            <Text   style={[styles.shu,styles.bai]}>起始地:{this.props.invoice.flrcDeparture}</Text>
                            <Text   style={[styles.shu,styles.bai]}>经停:{this.props.invoice.flrcTransit}</Text>
                            <Text   style={[styles.shu,styles.bai]}>目的地:{this.props.invoice.flrcDest}</Text>
                            <Text  style={styles.shu}>化验单号:{this.props.invoice.flrcTestBillNo}</Text>
                            <Text  style={styles.shu}>油量民称与标准:{this.props.invoice.flrcFuelName}</Text>
                            <Text  style={styles.shu}>温度:{this.props.invoice.flrcFuelTemp}</Text>
                            <Text  style={styles.shu}>密度:{this.props.invoice.flrcFuelDnst}</Text>
                            <Text  style={[styles.shu,styles.bai]}>油量计起始读数:{this.props.invoice.flrcMeterStat}</Text>
                            <Text  style={[styles.shu,styles.bai]}>油量计终止读数:{this.props.invoice.flrcMeterFnsh}</Text>
                            <Text  style={[styles.shu,styles.bai]}>加油量(L):{this.props.invoice.flrcFiguars}</Text>
                            <Text  style={[styles.shu,styles.bai]}>加油量(L大写):{this.props.invoice.flrcFiguarsWord}</Text>
                            <Text   style={styles.shu}>加油量(kg):{this.props.invoice.flrcQuantity}</Text>
                            <Text   style={styles.shu}>地井编号:{this.props.invoice.flrcHydrtPitNo}</Text>
                            <Text   style={styles.shu}>加油车编号:{this.props.invoice.flrcVehiNo}</Text>
                            <Text   style={styles.shu}>任务起始时间:{this.props.invoice.flrcStatTime}</Text>
                            <Text  style={[styles.shu,styles.bai,styles.lefts]}>任务结束时间:{this.props.invoice.flrcFnshTime}</Text>
                        </View>
                        {/*手写板*/}
                        <View style={styles.ban}>
                            <TouchableHighlight  style={styles.basded}  >
                                <Text style={styles.tee}>签名确认</Text>
                            </TouchableHighlight>
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
    let task = tasks.map((item)=>{
        if(item.taskId == ownProps.taskID)
            return item;
    });
    task = task.filter((val)=>{
        return !(!val || val === "");
    });
    task = task[0];
    let oilInfo = state.TaskReducer.get('oilInfo');
    let oilMess = state.TaskReducer.get('oilMess');
    let oilMessD = TransformToChinese(parseInt(oilMess));
    let invoice = {
        flrcNo:'',               //pk
        flrcManualTag:'', 	    //特殊标记
        flrcDate: task.flgtExedate,            //日期
        flrcAirport:'沈阳桃仙国际机场',		    //机场名称
        flrcAirlName:task.flgtDAlcname,         //隶属单位
        flrcFlightNo:task.flgtAFlno,        //进港航班号
        flrcAircrftNo:task.flgtDRegn,        //机号
        flrcAircrftType:task.flgtDAcname,      //机型
        flrcDeparture: task.flgtAOrgnm,       //起始地
        flrcTransit: task.flgtDTrsnm,         //经停(备降)
        flrcDest: task.flgtDDesnm,           //目的地
        flrcTestBillNo: oilInfo.fuelTestBillNo,      //化验单号
        flrcFuelName: oilInfo.fuelName,      //油品名称与标准
        flrcFuelTemp: oilInfo.fuelTemp,        //温度
        flrcFuelDnst: oilInfo.fuelDnst,        //密度
        flrcMeterStat:0,    //油量计起始读数
        flrcMeterFnsh:oilMess,	    //油量计终止读数
        flrcFiguars:oilMess,		    //加油量(L)
        flrcFiguarsWord: oilMessD,   //加油量(L大写)
        flrcQuantity:parseInt(oilMess).toFixed(1)*oilInfo.fuelDnst,		    //加油量(kg)
        flrcHydrtPitNo:task.wellHydrtPitNo,      //地井编号
        flrcVehiNo:	task.taskVehiNo,	    //加油车编号
        flrcStatTime: task.taskAccTime,        //任务起始时间(接受任务时间)
        flrcFnshTime:task.taskDoneTime    //任务结束时间
    };
    let invoiceNum = task.taskFuelRecptNo;
    let staffID = state.GlobalReducer.staffId;
    let _invoice = {
        token:'',
        Id:invoiceNum,
        signName:staffID,
        flrcNo:'',               //pk
        flrcManualTag:'', 	    //特殊标记
        flrcDate: task.flgtExedate,            //日期
        flrcAirport:'沈阳桃仙国际机场',		    //机场名称
        flrcAirlName:task.flgtDAlcname,         //隶属单位
        flrcFlightNo:task.flgtAFlno,        //进港航班号
        flrcAircrftNo:task.flgtDRegn,        //机号
        flrcAircrftType:task.flgtDAcname,      //机型
        flrcDeparture: task.flgtAOrgnm,       //起始地
        flrcTransit: task.flgtDTrsnm,         //经停(备降)
        flrcDest: task.flgtDDesnm,           //目的地
        flrcTestBillNo: oilInfo.fuelTestBillNo,      //化验单号
        flrcFuelName: oilInfo.fuelName,      //油品名称与标准
        flrcFuelTemp: oilInfo.fuelTemp,        //温度
        flrcFuelDnst: oilInfo.fuelDnst,        //密度
        flrcMeterStat:0,    //油量计起始读数
        flrcMeterFnsh:oilMess,	    //油量计终止读数
        flrcFiguars:oilMess,		    //加油量(L)
        flrcFiguarsWord: oilMessD,   //加油量(L大写)
        flrcQuantity:parseFloat(oilMess).toFixed(1)*oilInfo.fuelDnst,		    //加油量(kg)
        flrcHydrtPitNo:task.wellHydrtPitNo,      //地井编号
        flrcVehiNo:	task.taskVehiNo,	    //加油车编号
        flrcStatTime: task.taskAccTime,        //任务起始时间(接受任务时间)
        flrcFnshTime:task.taskDoneTime,    //任务结束时间
        signPhoto:''
    };
    return {
        invoice,
       _invoice
    }
}
function mapDispatchToProps(dispatch){
    // return bindActionCreators({
    //     onGetOilMessWebsocketMessage,
    //     oilInfoInit,
    //     onChangeTaskInfoButtonState
    // },dispatch)
    return {}
}

const styles = StyleSheet.create({
    lefts:{
        textAlign:"left"
    },
    tee:{
        textAlign:"center",
        paddingTop:8,
        textAlignVertical:"center",
        color:"white",
    },
    basded:{
        position:"absolute",
        bottom:5,
        right:5,
        width:100,
        height:40,
        backgroundColor:"#1C5589",
        borderRadius:10
    },
    sheet:{
        backgroundColor:"#373948"
    },
    ban:{
        position:"relative",
        width:"100%",
        height:200,
        backgroundColor:"#2A2C3B",
        marginBottom: 200,
        borderStyle: "solid",
        borderWidth:1
    },
    shuju:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        flexWrap: "wrap",
        marginBottom: 30,
    },
    bai:{
        backgroundColor:"#3B3A4C"
    },
    shu:{
        color:"#757786",
        borderStyle:"solid",
        width:"25%",
        lineHeight:50,
        height:50,
        textAlign:"left",
        backgroundColor:"#292B3A",
        paddingLeft:40
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
        backgroundColor:"#3B3A4C"
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
        backgroundColor: "#3F3E50",
        height: "100%",
        // backgroundColor:"#3A394B"

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

