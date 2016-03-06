'use strict'

import React, {
  Component,
  StyleSheet,
  ListView,
  View,
  Text,
  PropTypes,
  Image
} from 'react-native'

export default class MemberIndex extends Component {
	render() {
		return (
			<View style={styles.container}>
        <Text>會員</Text>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})
