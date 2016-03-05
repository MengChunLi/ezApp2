'use strict'

import React, {
  Component,
  View,
  StyleSheet,
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import applicationActions from '../actions/application'
// import gameActions from '../actions/game'
// import playerActions from '../actions/player'
// import teamActions from '../actions/team'
import TabBottom from './TabBottom'
import Home from './Home'
import Shop from './Shop'
//import Team from './Team'

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      tab: null
    }
  }

  componentWillMount () {
    const {application} = this.props;
    this.setState({
      tab: application.tab
    })
  }

  render () {

    const {tab} = this.state;

    console.log(tab);
   // const {home, shop} = this.props

    return (
      <TabBottom />
      // <View style={styles.container}>
      //   {tab === 'home' &&
      //     <Home />
      //   }
      //   {tab === 'shop' &&
      //     <Shop  />
      //   }
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

App.propTypes = {
  home: PropTypes.object,
  shop: PropTypes.object
  // team: PropTypes.object,
  // gameActions: PropTypes.object,
  // playerActions: PropTypes.object,
  // teamActions: PropTypes.object
}

export default connect(state => {
  return {
    application: state.application
  //   game: {
  //     live: state.live,
  //     over: state.over,
  //     unstart: state.unstart,
  //     standing: state.standing,
  //     application: state.application
  //   },
  //   player: {
  //     playerList: state.playerList,
  //     playerLoaded: state.playerLoaded
  //   },
  //   team: {
  //     team: state.team,
  //     playerLoaded: state.playerLoaded
  //   }
  }
}, dispatch => {
  return {
    actions: bindActionCreators(applicationActions, dispatch)
    //homeActions: bindActionCreators(Object.assign({}, applicationActions, homeActions), dispatch)
    // playerActions: bindActionCreators(Object.assign({}, applicationActions, playerActions), dispatch),
    // teamActions: bindActionCreators(Object.assign({}, applicationActions, playerActions, teamActions), dispatch)
  }
})(App)
