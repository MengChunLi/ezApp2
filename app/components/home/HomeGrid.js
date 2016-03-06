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

import Hotel from './Hotel'

export default class HomeGrid extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
  }
  //
  // onPressRow () {
  //   const {navigator, actions} = this.props
  //     //console.log(actions);
  //     actions.toNavigation('Hotel')
  //       .then(() => {
  //         navigator.push(Object.assign({}, {
  //           name: 'Hotel',
  //           component: Hotel
  //         }))
  //       })
  //       .catch(err => console.error(err))
  //
  // }

  nextPage() {
    this.props.toRoute({
      name: "訂房",
      component: Hotel
    });
  }

	render() {
    const {game} = this.props;
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.header}>
						<Image style={styles.logo} source={require('./img/ad_marketing_default.jpg')} />
				</TouchableOpacity>

				<View style={styles.row}>
					<TouchableOpacity onPress={this.nextPage} underlayColor="transparent" style={[styles.item, styles.hotel]}>
						<Image style={styles.iconHotel} source={require('./img/ic_hotel.imageset/ic_hotel@2x.png')} />
            <View style={styles.iconTextBox}>
              <Text style={styles.iconTextTitle}>訂房</Text>
              <Text style={styles.iconText}>國外 國內</Text>
            </View>
					</TouchableOpacity>
          <TouchableOpacity style={[styles.item, styles.airticket]}>
            <Image style={styles.iconHotel} source={require('./img/ic_airticket.imageset/ic_airticket@2x.png')} />
            <View style={styles.iconTextBox}>
              <Text style={styles.iconTextTitle}>機票</Text>
              <Text style={styles.iconText}>國外 國內</Text>
            </View>
          </TouchableOpacity>
				</View>
			</View>
		)
	}
}

HomeGrid.propTypes = {
  toRoute: PropTypes.func.isRequired,
  navigator: PropTypes.object,
  actions: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  header: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	margin: 10,
  	height: 101.5,
  	backgroundColor: '#80dd41',
  	borderRadius: 5
  },
  logo: {
  	width: 270,
  	height: 91.5
  },
  row: {
  	flex: 1,
    paddingHorizontal: 5,
  	flexDirection: 'row'
  },
  item: {
  	flex: 1,
  	alignItems: 'center',
  	justifyContent: 'center',
  	marginHorizontal: 5,
  	marginBottom: 10,
  	height: 130,
  	borderRadius: 5
  },
  hotel: {
    backgroundColor: '#fc5970'
  },
  airticket: {
    backgroundColor: '#67c223'
  },
  iconHotel: {
  	width: 67,
  	height: 55
  },
  iconTextBox: {
    alignItems: 'center',
    marginTop: 10
  },
  iconTextTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  iconText: {
    color: 'white',
    fontSize: 13,
    marginTop: 3
  }

})
