import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet } from "react-native";

const ListScreen = () => {
  const [data, setData] = useState([{
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
  }]);

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image source={{
      uri: item.thumbnail
    }} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{item.title}</Text>
        <Text style={styles.descriptionStyle}>{item.description}</Text>
        <Text style={styles.priceStyle}>${item.price}</Text>
      </View>
    </View>;

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