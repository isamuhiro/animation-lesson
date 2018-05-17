import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import Product from './Product'

const numColumns = 3

class ProductList extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  _keyExtractor = (item, index) => `${item.id}`

  _renderItem = ({ item }) => (
    <Product id={`${item.id}`} name={item.name} img={item.img} />
  )

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        numColumns={3}
        style={styles.container}
      />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default ProductList
