'use strict'

import React, {
  PropTypes,
  Component,
  Navigator
} from 'react-native'

import ShopList from '../components/shop/ShopList'
import NavigatorBar from '../components/share/NavigatorBar'

export default class Shop extends Component {

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
    return (
      <Navigator
        initialRoute={{
          name: 'ShopList',
          component: ShopList
        }}
        configureScene={() => ({
          ...Navigator.SceneConfigs.FloatFromRight
        })}
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}