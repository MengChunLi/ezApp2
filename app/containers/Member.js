'use strict'

import React, {
  PropTypes,
  Component,
  Navigator
} from 'react-native'

import MemberIndex from '../components/member/MemberIndex'
import NavigatorBar from '../components/share/NavigatorBar'

export default class Member extends Component {

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
          name: 'MemberIndex',
          component: MemberIndex
        }}
        configureScene={() => ({
          ...Navigator.SceneConfigs.FloatFromRight
        })}
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}
