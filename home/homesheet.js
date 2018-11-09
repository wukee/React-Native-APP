import React, { Component } from 'react';
import {AppRegistry, Text, StyleSheet, TouchableHighlight, View} from 'react-native';
import {Actions} from "react-native-router-flux";
import axios from "axios";
export default class TextInANest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "油单",
            arrlist:this.props.text
        };
    }
    buttonClick=()=>{
        var num=this.state.arrlist

        axios({
            url:"http://192.168.2.107:8082/task/oilSupplier/receipt",
            method:"POST",
            data:num,
            headers:{'Content-Type':'application/json'}
        }).then((res)=>{
       console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
}
    render() {
        const _ = this;
        console.log(_)
        return (
            <View style={styles.baseText}>
                <Text style={styles.titleText} onPress={this.onPressTitle}>
                    {this.state.titleText}{'\n'}{'\n'}
                </Text>
                <Text numberOfLines={10} style={styles.listnum}>
                    <Text style={styles.listhome}>id{this.state.arrlist.task_id}</Text>       {'\n'}{'\n'}
                    <Text style={styles.listhome}>加油量{this.state.arrlist.flrcFiguars}</Text>       {'\n'}{'\n'}
                    <Text style={styles.listhome}>油单号{this.state.arrlist.flrc_id}</Text>   {'\n'}{'\n'}
                    <Text style={styles.listhome}>油井位置{this.state.arrlist.taskOpeStaffId}</Text> {'\n'}{'\n'}
                    <Text style={styles.listhome}>油料{this.state.arrlist.taskFlightNo}</Text>    {'\n'}
                    <Text style={styles.listhome}>{this.state.arrlist.taskFlightNo}</Text>    {'\n'}
                </Text>
                <TouchableHighlight onPress={this.buttonClick.bind(this)}
                 style={styles.button}  >
                    <Text>上传</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={
                    ()=> {buttonClick}
                } style={styles.button}  >
                    <Text>打印</Text>
                </TouchableHighlight>
            </View>
        );
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
        width:80,
        fontWeight: 'bold',
        paddingTop:5,
        textAlign:"center",
        flexDirection:"row",
        alignItems:'center',
        // textAlignVertical:'center',
    },
    listnum:{
        flexDirection:"row",
        justifyContent:"space-around"

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
