import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from "react-native";

const ProductListingScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/1").then(response => response.json()).then(data => setProducts(data)).catch(error => console.error(error));
  }, []);

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image style={styles.image} source={{
      uri: item.image
    }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={products} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  price: {
    fontSize: 14,
    color: "#888"
  }
});
export default ProductListingScreen;