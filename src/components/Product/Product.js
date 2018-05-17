import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Tile } from 'react-native-elements'

class Product extends React.PureComponent {
  render() {
    return (
      <Tile
        id={`${this.props.id}`}
        imageSrc={{ uri: this.props.img }}
        title={`${this.props.name}`}
        featured
        containerStyle={styles.itemContainer}
        imageContainerStyle={styles.imageContainerStyle}
        onPress={()=> console.log(`${this.props.id}`)}
      />
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: Dimensions.get('window').width / 3,
    margin: 1,
  },
  imageContainerStyle: {
    width:'100%',
    height: Dimensions.get('window').width / 3    
  }
})

export default Product
