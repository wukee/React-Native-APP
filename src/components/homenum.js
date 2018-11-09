import React, { Component } from 'react';
import {AppRegistry, Text,
    StyleSheet, TextInput, View,
    TouchableHighlight, Button, Image,ScrollView} from 'react-native';
import axios from "axios";
import homesheet from './homesheet'
import {Actions} from "react-native-router-flux";
export default class TextInANest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData:[],
            flrcFiguars:"",
            task_id:""
        };
    }
    componentDidMount() {
        console.log(this.props.list)
        // var _this=this
        var num=this.props.list
        this.setState({
            task_id:num
        })
        console.log(this.props.list)
        console.log(num)
        if(num){
            // TODO
            axios.get('http://192.168.2.107:8081/flight/stbutton/findBusId?taskId='+num,
            ).then((response) => {
                console.log(66,response)
                // var num=JSON.parse(response._bodyInit)
                if(response.data.data){
                    this.setState({tableData:response.data.data})
                }
            }).catch((err) => {
                console.log(22222)
            });
        }
    }
    //input的值
    onPasswordChanged=(item)=>{
        // console.log(item)
        this.setState({flrcFiguars:item})
    }
    //接受
    homelistone=()=>{
        Actions.homesheet()
    //   axios({
    //       url:"http://192.168.2.107:8081/notifyOilTask.action",
    //       method:"post",
    //       body:{
    //           taskOpeStaffId:"2018-11-1",
    //           sfvhStaffId:"12312",
    //           taskId:"312321",
    //           taskStatus:"380"
    //       }
    //   }).then((res)=>{
    //       console.log("接受成功",res)
    //   }).catch((error)=>{
    //       console.log(error)
    //   })
    // this.setState({})
    //    this.state.tableData['flrcFiguars']=this.state.flrcFiguars
    //     if(this.state.flrcFiguars){
    //         console.log(this.state.tableData)
    //         Actions.homesheet({text:this.state.tableData})
    //     }
}
    render() {
        return (
            <View>
                {/*//导航栏*/}
                <View style={styles.wrap}>
                    <Image style={styles.img} source={require('.././img/1.png')}></Image>
                    <Text style={styles.title}><Image source={require('.././img/1.png')}></Image> 中航油-任务详情列表</Text>
                    <Image style={styles.img} source={require('.././img/1.png')}></Image>
                </View>
                {/*主体内容*/}
                <View style={styles.boodyer}>
                    <ScrollView style={styles.boodyerS}>
                        <View style={styles.nav}>
                            <Text>
                                <Text style={{color:"#B6352B"}}>   航班号  :  CA1234     </Text>
                                <Text style={{color:"white"}}>   油单号  :  12223</Text>
                            </Text>
                        <View style={styles.butn}>
                            <TouchableHighlight    onPress={this.homelistone.bind(this)} style={styles.buttnn} >
                                <Text style={styles.tex}>接受</Text>
                            </TouchableHighlight>
                            <TouchableHighlight    style={[styles.buttnn,styles.hei]} >
                                <Text style={styles.tex}>拒绝</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                        {/*数据*/}
                        <View style={styles.shuju}>
                            <Text style={styles.shu}>机型 :{this.state.tableData.flgtDAcname}</Text>
                            <Text  style={styles.shu}>机号 :{this.state.tableData.flgtDRegn}</Text>
                            <Text  style={styles.shu}>机位 :{this.state.tableData.flgtDPlacecode}</Text>
                            <Text  style={styles.shu}>时间 :{this.state.tableData.flgtExedate}</Text>
                            <Text  style={[styles.shu,styles.bai]}>航班状态 :{this.state.tableData.flgtDGame}</Text>
                            <Text   style={[styles.shu,styles.bai]}>进出类型 :{this.state.tableData.flgtDAdid}</Text>
                            <Text   style={[styles.shu,styles.bai]}>航班属性 :{this.state.tableData.flgtDFlti}</Text>
                            <Text   style={[styles.shu,styles.bai]}>属于单位 :{this.state.tableData.flgtDAlcname}</Text>
                            <Text  style={styles.shu}>起始地 :{this.state.tableData.flgtAOrgnm}</Text>
                            <Text  style={styles.shu}>目的地 :{this.state.tableData.flgtDDesnm}</Text>
                            <Text  style={styles.shu}>经停地 :{this.state.tableData.flgtDTrsnm}</Text>
                            <Text  style={styles.shu}>标记 :{this.state.tableData.flgtStarmark}</Text>
                            <Text  style={[styles.shu,styles.bai]}>计划起飞时间 :{this.state.tableData.flgtAStot}</Text>
                            <Text  style={[styles.shu,styles.bai]}>预计到达时间 :{this.state.tableData.flgtAEtot}</Text>
                            <Text  style={[styles.shu,styles.bai]}>实际到达时间 :{this.state.tableData.flgtDAtot}</Text>
                            <Text  style={[styles.shu,styles.bai]}>预计起飞时间 :{this.state.tableData.flgtDEtot}</Text>
                            <Text   style={styles.shu}>航线 :{this.state.tableData.flgtDVialc}</Text>
                            <Text   style={styles.shu}>进港航班号 :{this.state.tableData.flgtAFlno}</Text>
                            <Text   style={styles.shu}>出港航班号 :{this.state.tableData.flgtDFlno}</Text>
                            <Text   style={styles.shu}>状态 :{this.state.tableData.taskStatus}</Text>
                            <Text  style={[styles.shu,styles.bai]}>调度员 :333{this.state.tableData.stfName}</Text>
                            <Text  style={[styles.shu,styles.bai]}>加油员 :333{this.state.tableData.opeName}</Text>
                            <Text   style={[styles.shu,styles.bai]}>加油车编号 :212{this.state.tableData.taskVehiNo}</Text>
                            <Text   style={[styles.shu,styles.bai]}>地井编号 :34324{this.state.tableData.wellHydrtPitNo}</Text>
                            <Text   style={styles.shu}>油单编号 :5453{this.state.tableData.taskFuelRecptNo}</Text>
                            <Text   style={styles.shu}>状态 :无{this.state.tableData.taskFuelRecptNo}</Text>
                          

                        </View>
                        {/*//油温度*/}
                        <View style={styles.wen}>
                            <Text style={styles.du}>油温度 : 253</Text>
                            <Text style={styles.du}>油密度 : 0.8788</Text>
                            <Text style={styles.du}>油品 : 4号喷漆燃料</Text>
                        </View>
                    </ScrollView>


                </View>



            </View>
        )
    }
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

