'use strict'

import React, {
  PropTypes,
  Component,
  StyleSheet,
  Navigator
} from 'react-native'

import Router from 'react-native-simple-router';
import HomeGrid from '../components/home/HomeGrid'
import NavigatorBar from '../components/share/NavigatorBar'
import BackButton from '../components/share/BackButton'
export default class Home extends Component {

  // componentDidMount () {
  //   const {actions} = this.props
  //   actions.getLeagueStanding()
  // }

  renderScene (route, navigator) {
    if (route.component) {
      const Component = route.component
      return <Component navigator={navigator} route={route} {...this.props} />
    }
  }

  render () {
    const firstRoute = {
      name: 'Home',
      component: HomeGrid,
      trans: true,
      hideNavigationBar: true,
      noStatusBar: true,
    };
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        titleStyle={styles.title}
        statusBarColor='black'
        backButtonComponent={BackButton}
      />
      // <Navigator
      //   initialRoute={{
      //     name: 'HomeGrid',
      //     component: HomeGrid
      //   }}
      //   configureScene={() => ({
      //     ...Navigator.SceneConfigs.FloatFromRight
      //   })}
      //   renderScene={this.renderScene.bind(this)}
      // />
    )
  }
}

Home.propTypes = {
  home: PropTypes.object,
  actions: PropTypes.object
}

const styles = StyleSheet.create({
  title: {
    color: '#222'
  },
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#BFBFBF'
  }
});
