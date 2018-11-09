

import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View,} from 'react-native';
import {Stack,Router,Scene} from 'react-native-router-flux'
import TaskInfoComp from './src/components/TaskInfoComp'
import InvoiceComp from './src/components/InvoiceComp'
import Login from './src/components/login'
import FlightInfoComp from './src/components/FlightInfoComp/FlightInfoComp'
import HomelistRight from './src/components/homelistRight'
import homesheet from './src/components/homesheet'
import PersonalInfoComp from './src/components/PersonalInfoComp/PersonalInfoComp'
import TaskListComp from './src/components/TaskListComp/TaskListComp'

import { Provider } from "react-redux";
import { store } from "./src/store";
export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            flag:true
        }
    }
    render() {
        return (
            <Provider store={store} >
                {this.state.flag == false ? <Login/>: <View >
                    {/*//导航栏*/}
                    <View style={styles.wrap}>
                        <Image style={styles.img} source={require('./src/img/1.png')}></Image>
                        <Text style={styles.title}><Image source={require('./src/img/1.png')}></Image> 中航油-任务详情列表</Text>
                        <Image style={styles.img} source={require('./src/img/1.png')}></Image>
                    </View>
                    {/*侧边栏*/}
                    <View style={styles.app}>
                        <View style={styles.contsent}>
                            <HomelistRight/>
                        </View>

                        <View style={styles.content}>
                            <Router>
                                <Stack>
                                    {/*<Scene key={'Login'} path={"/Login"} component={Login} title={'Login'} style={styles.login}*/}
                                    {/*hideNavBar={true} initial={true}></Scene>*/}
                                    {/*<Scene key={'HomelistRight'} path={"/HomelistRight"} component={HomelistRight} title="HomelistRight" initial={true} hideNavBar={true}/>*/}
                                    <Scene key={'TaskListComp'} path={"/TaskListComp"} component={TaskListComp} hideNavBar={true} />
                                    <Scene key={'PersonalInfoComp'} path={"/PersonalInfoComp"} component={PersonalInfoComp} hideNavBar={true}/>
                                    <Scene key={'TaskInfoComp'} path={"/TaskInfoComp/id"} component={TaskInfoComp} hideNavBar={true}/>
                                    {/*<Scene key={'TaskInfoComp'} path={"/TaskInfoComp/id"} component={TaskInfoComp} hideNavBar={true}/>*/}
                                    <Scene key={'InvoiceComp'} path={"/InvoiceComp"} component={InvoiceComp} hideNavBar={true}/>
                                    {/*<Scene key={'FlightInfoComp'} path={"/FlightInfoComp"} component={FlightInfoComp} hideNavBar={true}/>*/}
                                </Stack>
                            </Router>
                        </View>
                    </View>




                    {/*<Router>*/}
                    {/*<Stack>*/}
                    {/*<Scene key={'Login'} path={"/Login"} component={Login} title={'Login'}*/}
                    {/*hideNavBar={true} initial={true}*/}
                    {/*></Scene>*/}
                    {/*<Scene key={'HomelistRight'} path={"/HomelistRight"} component={HomelistRight} title="HomelistRight" initial={true} hideNavBar={true}/>*/}
                    {/*<Scene key={'TaskInfoComp'} path={"/TaskInfoComp/id"} component={TaskInfoComp} hideNavBar={true}/>*/}
                    {/*<Scene key={'InvoiceComp'} path={"/InvoiceComp/id"} component={InvoiceComp} hideNavBar={true}/>*/}
                    {/*</Stack>*/}
                    {/*</Router>*/}
                </View>}


            </Provider>
        )}
}
const styles = StyleSheet.create({
    login:{
        width:"100%",
        height:"100%",

    },
    wrap:{
        width: "100%",
        // height: 60,
        display: "flex",
        justifyContent:"space-between",
        backgroundColor: "#2A2C3B",
        alignItems:"center",
        flexDirection:"row",
        height:50,
        position: "absolute",
        left:0,
        top:0,

    },
    title:{
        color:"white"
    },
    img:{
        marginLeft:20,
        marginRight:20,
        borderRadius: 10
    },
    contsent:{
        width:80,
        marginTop:50,
        height:"100%",
        backgroundColor:"black"
    },
    app:{
        flexDirection:"row",
        position:"relative",
    },
    content:{
        width:"92%",
        marginTop: 50,
        height: "100%",

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
