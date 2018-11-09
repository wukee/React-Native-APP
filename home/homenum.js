import React, { Component } from 'react';
import {AppRegistry, Text, StyleSheet, TextInput, View, TouchableHighlight,Button} from 'react-native';
import axios from "axios";
import {Actions} from "react-native-router-flux";

export default class TextInANest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "任务详情",
            tableData:[],
            flrcFiguars:"",
            task_id:""
        };
    }
    componentDidMount() {
        // var _this=this
        var num=this.props.list
        this.setState({
            task_id:num
        })
        console.log(this.props.list)
        console.log(num)
        if(num){
            axios.get('http://192.168.2.107:8082/task/stbutton/findBusId?task_id='+num,
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
    homelistone=()=>{
    this.setState({
    })
       this.state.tableData['flrcFiguars']=this.state.flrcFiguars
        if(this.state.flrcFiguars){
            console.log(this.state.tableData)
            Actions.homesheet({text:this.state.tableData})
        }
}
    render() {
        return (
            <View style={styles.baseText}>
                <Text style={styles.titleText} onPress={this.onPressTitle}>
                    {this.state.titleText}{'\n'}{'\n'}
                </Text>
                <Text style={styles.titleText}>加油量  </Text>
                <TextInput
                           placeholder={"请输入加油量"}
                           onChangeText={this.onPasswordChanged}
                           editable={true}/>

                <Text numberOfLines={10} style={styles.listnum}>
                    <Text style={styles.listhome}>id{this.state.tableData.taskId}</Text>       {'\n'}{'\n'}
                    <Text style={styles.listhome}>油单号{this.state.tableData.taskFlightNo}</Text>   {'\n'}{'\n'}
                    <Text style={styles.listhome}>油井位置{this.state.tableData.taskOpeStaffId}</Text> {'\n'}{'\n'}
                    <Text style={styles.listhome}>油料{this.state.tableData.taskFlightNo}</Text>    {'\n'}{'\n'}
                </Text>
                <TouchableHighlight  style={styles.button}  onPress={this.homelistone.bind(this)} >
                    <Text >接受</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    listhome:{
        width:200,
        fontWeight: 'bold',
        paddingTop:5,
        textAlign:"right",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-around"
    },
    listnum:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    textInputStyle: {
        // 设置尺寸
        borderRadius: 5,
        width:40,
        height:50,
        marginLeft:10,
        borderWidth: 1,
        borderStyle:"solid"
    },
    button:{
        marginTop:20,
        textAlign:"center",
        alignItems:'center',
        justifyContent:'center',
        textAlignVertical:'center',
        borderRadius: 5,
        width:120,
        height:40,
        color:"white",
        backgroundColor:"#0090CE",
    },
});

