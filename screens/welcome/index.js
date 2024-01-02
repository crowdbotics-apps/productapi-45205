import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

const ListScreen = ({
  navigation
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products").then(response => response.json()).then(json => setData(json)).catch(error => console.error(error));
  }, []);

  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("ProductDetails", {
    item
  })}>
      <Image source={{
      uri: item.thumbnail
    }} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{item.title}</Text>
        <Text style={styles.descriptionStyle}>{item.description}</Text>
        <Text style={styles.priceStyle}>${item.price}</Text>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </SafeAreaView>;
};

export default ListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "space-between"
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  descriptionStyle: {
    fontSize: 12,
    color: "#888888"
  },
  priceStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000"
  }
});