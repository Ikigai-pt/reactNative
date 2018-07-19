import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";

class ListView extends Component {
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    console.log(url);
    this.setState({
      loading: true
    });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(JSON.stringify(res));
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({
          error,
          loading: false
        });
      });
  };

  render() {
    return (
      <List>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              sutTitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
            />
          )}
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ListView;
