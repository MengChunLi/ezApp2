'use strict'
import React, {
  Component,
  Image,
  View,
  PropTypes,
  StyleSheet
} from 'react-native'

export default class BackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image source={require('image!nav_back')} style={styles.backButton} />
    );
  }
}

BackButton.propTypes = {
};

const styles = StyleSheet.create({
  backButton: {
    width: 20,
    height: 17,
    marginLeft: 10,
    marginTop: 3,
    marginRight: 10
  }
});
