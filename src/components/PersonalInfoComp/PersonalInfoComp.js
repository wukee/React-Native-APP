import React, { Component } from 'react';
import {Text, StyleSheet, View, Image, ScrollView, TouchableHighlight, TextInput} from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Actions} from "react-native-router-flux";
import TabNavigator from "react-native-tab-navigator";


class PersonalInfoComp extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.boodyer}>
                <View  style={styles.boodye}>
                    <ScrollView style={styles.scrollBorder}>
                        <View style={styles.ban}>
                                <Text style={styles.id}>人员id : 123131</Text>
                                <Text style={styles.id}>车辆id :  123123</Text>
                                <TextInput style={[styles.inputtext,styles.id]}
                                           placeholder={"请输入车牌号"}
                                    // onChangeText={this.onPasswordChanged}
                                           editable={true}
                                />
                                <TouchableHighlight  style={[styles.basded,styles.id]}  >
                                    <Text style={styles.tee}>绑定</Text>
                                </TouchableHighlight>
                            </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PersonalInfoComp)

function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch){
    // return bindActionCreators({
    //
    // },dispatch)
    return {}
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
        // marginTop:20,
        // marginLeft:20,
        // marginRight:20,
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
        display:"flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 20,
        // borderWidth: 1,
        borderStyle:"solid",
        backgroundColor:"#2A2C3B"
    },
    bodySens:{
        width:"30%",
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