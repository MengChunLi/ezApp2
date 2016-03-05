'use strict'

import React, {
  PropTypes,
  Component,
  Navigator
} from 'react-native'

import PhoneIndex from '../components/phone/PhoneIndex'
import NavigatorBar from '../components/share/NavigatorBar'

export default class Phone extends Component {

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
          name: 'PhoneIndex',
          component: PhoneIndex
        }}
        configureScene={() => ({
          ...Navigator.SceneConfigs.FloatFromRight
        })}
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}
