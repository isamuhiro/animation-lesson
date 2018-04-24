class MyListItem extends React.PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.id);
    };
  
    render() {
      const textColor = this.props.selected ? "red" : "black";
      return (
        <TouchableOpacity onPress={this._onPress}>
          <View>
            <Text style={{ color: textColor }}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  
  class MultiSelectList extends React.PureComponent {
    state = {selected: (new Map())};
  
    _keyExtractor = (item, index) => item.id;
  
    _onPressItem = (id) => {
      this.setState((state) => {
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id)); 
        return {selected};
      });
    };
  
    _renderItem = ({item}) => (
      <MyListItem
        id={item.id}
        onPressItem={this._onPressItem}
        selected={!!this.state.selected.get(item.id)}
        title={item.title}
      />
    );
  
    render() {

        console.log(this.state.selected);
      return (
        <FlatList
          data={this.props.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      );
    }
  }