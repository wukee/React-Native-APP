import React, { Component } from 'react';
import {onTaskListWebsocketMessage,taskListInit} from "../../action/TaskAction";
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import config from '../../constant/config'
import {Actions} from "react-native-router-flux";
import GlobalReducer from "../../reducer/GlobalReducer";


class TaskListComp extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.taskListInit(this.props.staffId);
        const ws = new WebSocket(`${config.sockeIP}:8070/websocket/${this.props.staffId}`);
        ws.onopen = () =>{console.log('connect success')};
        ws.onmessage = (e) => {
            //todo：操作转化成需要的样子
            this.props.onTaskListWebsocketMessage(JSON.parse(e.data));
        }
        ws.onerror=(e)=>{

        }
    }

    render() {
        return (
            <View >
                {/*//导航栏*/}
                {/*//主体*/}
                <View style={styles.scrollBorder}>
                    <ScrollView style={styles.boodyerS} >
                        <View>
                        {
                           this.props.tasks.map((l, i) => (
                                <View key={i}style={styles.bodySEN} >
                                    {/*<Text></Text>*/}
                                    <Text  style={styles.bodySens} onPress={()=>Actions.TaskInfoComp({taskID:l.taskId})}
                                    >{l.flgtAFlno}</Text>
                                    <Text style={styles.bodySens} onPress={()=>Actions.TaskInfoComp({taskID:l.taskId})} ><Image style={styles.img} source={require('../../img/li.png')}></Image> {l.flgtDFlti}</Text>
                                    <Text style={styles.bodySens} onPress={()=>Actions.TaskInfoComp({taskID:l.taskId})} >{l.flgtExedate}</Text>
                                    <Text style={styles.bodySens} onPress={()=>Actions.TaskInfoComp({taskID:l.taskId})} ><Text style={styles.cenen}>机位 :</Text>{l.flgtDPlacecode}</Text>
                                    <Text style={styles.bodySens} onPress={()=>Actions.TaskInfoComp({taskID:l.taskId})} ><Text style={styles.cenen}></Text>{l.flgtAStot}</Text>
                                    <Text style={styles.bodySens} onPress={()=>Actions.TaskInfoComp({taskID:l.taskId})} >{l.flgtDAlcname}</Text>
                                    <Text style={styles.bodySens} onPress={()=>Actions.TaskInfoComp({taskID:l.taskId})} ><Text style={styles.cenen}>机型 : </Text>{l.flgtDAcname}</Text>
                                    <Text style={styles.bodySens} onPress={()=>Actions.TaskInfoComp({taskID:l.taskId})} ><Image style={styles.img} source={require('../../img/zhuang.png')}></Image>  {l.flgtDGame}</Text>
                                    <Text style={styles.bodySens} onPress={()=>Actions.TaskInfoComp({taskID:l.taskId})} ><Text style={styles.cenen}>机号: </Text>{l.flgtDRegn}</Text>
                                </View>
                            ))
                        }
                        </View>

                    </ScrollView>
                </View>

            </View>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskListComp)

function mapStateToProps(state) {
    let tasks = state.TaskReducer.get('tasks');
    console.log(tasks);
    let staffId = state.GlobalReducer.staffId;
    return {
        tasks,
        staffId
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onTaskListWebsocketMessage,
        taskListInit
    },dispatch)
}

const styles = StyleSheet.create({
    id:{
        lineHeight:50,
        color:"#757786"
    },
    inputtext:{
        borderWidth: 0.5,
        borderStyle:"solid",
        borderColor:'white',
        height:40,
        lineHeight:50,
        marginTop:10,
        borderRadius:10,
        backgroundColor:"white"
    },
    tee:{
        textAlign:"center",
        paddingTop:8,
        textAlignVertical:"center",
        color:"white",
    },
    basded:{
        width:100,
        height:40,
        marginTop:10,
        backgroundColor:"#1C5589",
        borderRadius:10
    },
    sheet:{
        backgroundColor:"#373948"
    },
    ban:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
        height:60,
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
        marginBottom: 30
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
        paddingLeft:40,
        backgroundColor:"#292B3A"
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
    boodyer:{
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
    boodye:{
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
    ///




    lefts:{
        marginLeft:"10%"
    },
    mar:{
        marginLeft:'12%'
    },
    bodys:{
        // textAlign:"center",
        marginLeft:"10%"
    },
    bodySEN:{
        // borderRadius:10,
        flexDirection: "row",
        width:"100%",
        display:"flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 20,
        // borderWidth: 1,
        borderStyle:"solid",
        backgroundColor:"#2A2C3B"
    },
    bodySens:{
        width:"33%",
        fontSize:15,
        color:"#757786",
        textAlign:"left",
        textAlignVertical: "center",
        paddingLeft:40,
        marginBottom: 10
    },
    cenen:{
        marginLeft:10
    },
    wra:{
        width: "100%",
        // height: 60,
        display: "flex",
        justifyContent:"space-between",
        backgroundColor: "#2A2C3B",
        alignItems:"center",
        flexDirection:"row",
        height:50
    },
    scrollBorder:{
        backgroundColor: "#414257",
        height: "100%"
    },
    boodyerS:{
        marginBottom:100,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        overflow:'hidden',
        backgroundColor: "#3D3F54",
    }
});