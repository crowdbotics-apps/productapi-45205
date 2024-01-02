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
  }, {
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images": ["https://i.dummyjson.com/data/products/5/1.jpg", "https://i.dummyjson.com/data/products/5/2.jpg", "https://i.dummyjson.com/data/products/5/3.jpg"]
  }, {
    "id": 6,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "discountPercentage": 11.02,
    "rating": 4.57,
    "stock": 83,
    "brand": "Apple",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
    "images": ["https://i.dummyjson.com/data/products/6/1.png", "https://i.dummyjson.com/data/products/6/2.jpg", "https://i.dummyjson.com/data/products/6/3.png", "https://i.dummyjson.com/data/products/6/4.jpg"]
  }, {
    "id": 7,
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 1499,
    "discountPercentage": 4.15,
    "rating": 4.25,
    "stock": 50,
    "brand": "Samsung",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    "images": ["https://i.dummyjson.com/data/products/7/1.jpg", "https://i.dummyjson.com/data/products/7/2.jpg", "https://i.dummyjson.com/data/products/7/3.jpg", "https://i.dummyjson.com/data/products/7/thumbnail.jpg"]
  }, {
    "id": 8,
    "title": "Microsoft Surface Laptop 4",
    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "price": 1499,
    "discountPercentage": 10.23,
    "rating": 4.43,
    "stock": 68,
    "brand": "Microsoft Surface",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    "images": ["https://i.dummyjson.com/data/products/8/1.jpg", "https://i.dummyjson.com/data/products/8/2.jpg", "https://i.dummyjson.com/data/products/8/3.jpg", "https://i.dummyjson.com/data/products/8/4.jpg", "https://i.dummyjson.com/data/products/8/thumbnail.jpg"]
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