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

export default class PhoneIndex extends Component {
	render() {
		return (
			<View style={styles.container}>
        <Text>電話</Text>
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
