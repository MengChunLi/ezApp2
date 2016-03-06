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

export default class ShopList extends Component {
	render() {
		return (
			<View style={styles.container}>
        <Text>門市</Text>
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
