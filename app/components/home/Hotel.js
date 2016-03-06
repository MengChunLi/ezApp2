'use strict'

import React, {
  Component,
  StyleSheet,
  ListView,
  View,
  Text,
  PropTypes,
  Image,
  TouchableOpacity
} from 'react-native'

export default class Hotel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.row}>
          <Image style={styles.image} source={require('./img/pic_hotel_abroad.imageset/pic_hotel_abroad.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Image style={styles.image} source={require('./img/pic_hotel_domestic.imageset/pic_hotel_domestic.png')}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5
  },
  row: {
    flex: 1,
    marginVertical: 5,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: 360,
     resizeMode: 'cover'
  }
});
