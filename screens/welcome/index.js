import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";

const ListScreen = ({
  navigation
}) => {
  const [data, setData] = useState([{
    id: 1,
    title: "iPhone 6",
    description: "An apple mobile which is nothing like apple",
    price: 400,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
  }, {
    id: 2,
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
  }, {
    id: 3,
    title: "iPhone 10",
    description: "An apple mobile which is nothing like apple",
    price: 600,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
  }]);
  const [search, setSearch] = useState("");

  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("Details", {
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

  const filterData = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
  const sortedData = filterData.sort((a, b) => b.price - a.price);
  return <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} value={search} placeholder="Search by title..." onChangeText={setSearch} />
        <Button title="Sort by price" onPress={() => setData(sortedData)} />
      </View>
      <FlatList data={filterData} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
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
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  searchInput: {
    flex: 1,
    borderColor: "#000",
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5,
    padding: 5
  }
});