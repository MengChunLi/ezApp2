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

export default class HomeGrid extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.header}>
						<Image style={styles.logo} source={require('./img/ad_marketing_default.jpg')} />
				</TouchableOpacity>
			
				<View style={styles.row}>
					<TouchableOpacity style={styles.hotel}>
						<Image style={styles.iconHotel} source={require('./img/ic_hotel.imageset/ic_hotel@2x.png')} />
					</TouchableOpacity>
          <TouchableOpacity style={styles.hotel}>
            <Image style={styles.iconHotel} source={require('./img/ic_hotel.imageset/ic_hotel@2x.png')} />
          </TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	margin: 10,
  	height: 101.5,
  	backgroundColor: '#ddd',
  	borderRadius: 5
  },
  logo: {
  	width: 270,
  	height: 91.5
  },
  row: {
  	flex: 1,
  	flexDirection: 'row'
  },
  hotel: {
  	flex: 1,
  	alignItems: 'center',
  	justifyContent: 'center',
  	marginHorizontal: 10,
  	marginBottom: 10,
  	height: 130,
  	backgroundColor: '#fc5970',
  	borderRadius: 5
  },
  iconHotel: {
  	width: 67,
  	height: 55
  }

})