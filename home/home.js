import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Homelist from './homelist'

export default class Page1 extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home"
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="任务列表"
                    selectedTitleStyle={{color:"#007aff"}}//设置tab标题颜色
                    // badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <View>
                       <Homelist/>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shebei'}
                    title="设备列表"
                    selectedTitleStyle={{color:"#007aff"}}

                    // renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'shebei' })}>
                    <View>
                        <Text>人员信息</Text>
                    </View>
                </TabNavigator.Item>
            </TabNavigator>

        )
    }
}
const styles = StyleSheet.create({
    home:{
        height:500,
    }
})