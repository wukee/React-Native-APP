import React, { Component } from 'react';
import {AppRegistry, Text, StyleSheet, TouchableHighlight, View, Image, ScrollView} from 'react-native';
import {Actions} from "react-native-router-flux";
import axios from "axios";
export default class TextInANest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrlist:this.props.text,
            sheet:""
        };
    }
    //油料
    componentDidMount(){
        axios({
            url:"http://192.168.2.107:8082/task/fuelCharge/getFuelInfo",
            method:"GET",
        }).then((res)=>{
            console.log(res.data)
           this.setState({
               sheet:res.data.data[0]
           })
        }).catch((error)=>{
            console.log(error)
        })
    }
    //上传
    buttonClick=()=>{
        var num=this.state.arrlist//路由穿过来的参数
        console.log(num)
        // TODO
        axios({
            url:"http://192.168.2.107:8082/task/fuelCharge/receipt",
            method:"POST",
            data:num,
            headers:{'Content-Type':'application/json'}
        }).then((res)=>{
       console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
}
   //打印
    buttonClickSheet=()=>{
        var num={
            "token":"test01",
            "id":"123456",
            "date":"2018-01-01",
            "airport":"2",
            "delivered":"2",
            "filghtNo":"3",
            "aircraftNo":"2",
            "aircraftType":"2",
            "departure":"2",
            "transitStop":"2",
            "destination":"2",
            "testBillNo":"2",
            "descriptionAndGrade":"2",
            "temperature":"2",
            "actualDensity":"2",
            "meterStart":"2",
            "meterFinish":"2",
            "figures":"2",
            "figuresInWordsstring":"2",
            "quantity":"2",
            "hydrantPitNo":"2",
            "vehicleTypeAndNo":"2",
            "timeStart":"2018-09-30 12:19",
            "timeFinish":"2018-09-30 12:19",
            "signPhoto":"2",
            "signName":"2"
        }
        axios({
            url:"http://192.168.1.3:8686/commitOilSheet.action",
            method:"POST",
           data:num
        }).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    };
    render() {
        const _ = this;
        console.log(_)
        return (
            <View style={styles.sheet}>
                {/*//导航栏*/}
                <View style={styles.wrap}>
                    <Image style={styles.img} source={require('.././img/1.png')}></Image>
                    <Text style={styles.title}><Image source={require('.././img/1.png')}></Image> 中航油-任务详情列表</Text>
                    <Image style={styles.img} source={require('.././img/1.png')}></Image>
                </View>
                {/*主体*/}
                <View  style={styles.boodyer}>
                    <ScrollView style={styles.boodyerS}>
                        {/*导航*/}
                        <View style={styles.nav}>
                            <Text>
                                <Text style={{color:"#B6352B"}}>   航班号  :  CA1234     </Text>
                                <Text style={{color:"white"}}>   油单号  :  12223</Text>
                            </Text>
                            <View style={styles.butn}>
                                <TouchableHighlight     style={styles.buttnn} >
                                    <Text style={styles.tex}>上传打印</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                        {/*数据*/}
                        <View style={styles.shuju}>
                            <Text style={styles.shu}>日期 :{this.props.flrcDate}</Text>
                            <Text  style={styles.shu}>机场名称 :｛this.props.flrcAirport｝</Text>
                            <Text  style={styles.shu}>进港航班号 :{this.props.flrcFlightNo}</Text>
                            <Text  style={styles.shu}>机场号 :{this.props.flrcAircrftNo}</Text>
                            <Text  style={[styles.shu,styles.bai]}>机型 :{this.props.flrcAircrftType}</Text>
                            <Text   style={[styles.shu,styles.bai]}>起始地 :{this.props.flrcDeparture}</Text>
                            <Text   style={[styles.shu,styles.bai]}>经停 :{this.props.flrcTransit}</Text>
                            <Text   style={[styles.shu,styles.bai]}>目的地 :{this.props.flrcDest}</Text>
                            <Text  style={styles.shu}>化验单号 :{this.props.flrcTestBillNo}</Text>
                            <Text  style={styles.shu}>油量民称与标准 :{this.props.flrcFuelName}</Text>
                            <Text  style={styles.shu}>温度 :{this.props.flrcFuelTemp}</Text>
                            <Text  style={styles.shu}>密度 :{this.props.flrcFuelDnst}</Text>
                            <Text  style={[styles.shu,styles.bai]}>油量计起始读数 :{this.props.flrcMeterStat}</Text>
                            <Text  style={[styles.shu,styles.bai]}>油量计终止读数 :{this.props.flrcMeterFnsh}</Text>
                            <Text  style={[styles.shu,styles.bai]}>加油量(L):{this.props.flrcFiguars}</Text>
                            <Text  style={[styles.shu,styles.bai]}>加油量(L大写) :{this.props.flrcFiguarsWord}</Text>
                            <Text   style={styles.shu}>加油量(kg) :{this.props.flrcQuantity}</Text>
                            <Text   style={styles.shu}>地井编号 :{this.props.flrcHydrtPitNo}</Text>
                            <Text   style={styles.shu}>加油车编号 :{this.props.flrcVehiNo}</Text>
                            <Text   style={styles.shu}>任务起始时间 :{this.props.flrcStatTime}</Text>
                            <Text  style={[styles.shu,styles.bai]}>任务结束时间 :{this.props.flrcFnshTime}</Text>
                            {/*<Text  style={[styles.shu,styles.bai]}>加油员 :{this.props}</Text>*/}
                            {/*<Text   style={[styles.shu,styles.bai]}>加油车编号 :{this.props}</Text>*/}
                            {/*<Text   style={[styles.shu,styles.bai]}>地井编号 :{this.props}</Text>*/}


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
        );
    }
}

const styles = StyleSheet.create({
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
