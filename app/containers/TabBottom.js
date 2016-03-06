import React, { Component, StyleSheet, View, Text, PropTypes, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home'
import Shop from './Shop'
import Phone from './Phone'
import Member from './Member'
export default class TabBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedTab: 'home'
    }
  }

  render() {

    const {actions} = this.props;

    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首頁"
          renderIcon={() => <Image source={require('./img/tab_home.imageset/tab_home@2x.png')} />}
          renderSelectedIcon={() => <Image source={require('./img/tab_home_on.imageset/tab_home_on@2x.png')} />}
          titleStyle={styles.tabBarItemText}
          selectedTitleStyle={styles.tabBarItemActiveText}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {<Home actions={actions}/>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'shop'}
          title="門市"
          renderIcon={() => <Image source={require('./img/tab_store.imageset/tab_store@2x.png')} />}
          renderSelectedIcon={() => <Image source={require('./img/tab_store_on.imageset/tab_store_on@2x.png')} />}
          titleStyle={styles.tabBarItemText}
          selectedTitleStyle={styles.tabBarItemActiveText}
          onPress={() => this.setState({ selectedTab: 'shop' })}>
          {<Shop  actions={actions}/>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'phone'}
          title="電話"
          renderIcon={() => <Image source={require('./img/tab_phone.imageset/tab_phone@2x.png')} />}
          renderSelectedIcon={() => <Image source={require('./img/tab_phone_on.imageset/tab_phone_on@2x.png')} />}
          titleStyle={styles.tabBarItemText}
          selectedTitleStyle={styles.tabBarItemActiveText}
          onPress={() => this.setState({ selectedTab: 'phone' })}>
          {<Phone actions={actions}/>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'member'}
          title="會員"
          renderIcon={() => <Image source={require('./img/tab_member.imageset/tab_member@2x.png')} />}
          renderSelectedIcon={() => <Image source={require('./img/tab_member_on.imageset/tab_member_on@2x.png')} />}
          titleStyle={styles.tabBarItemText}
          selectedTitleStyle={styles.tabBarItemActiveText}
          onPress={() => this.setState({ selectedTab: 'member' })}>
          {<Member actions={actions} />}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabBarItemText: {
    paddingBottom: 3
  },
  tabBarItemActiveText: {
    color: '#82c032'
  }
});

TabBottom.propTypes = {
  actions: PropTypes.object
}
