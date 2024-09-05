import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import Accordion from "react-native-collapsible/Accordion";

const windowWidth = Dimensions.get("window").width;
const SECTIONS = [
  {
    title: "Small Plates",
    content: `
    Lobster Queso with warm chips - $20\n
    Char Grilled Oysters - $22\n
    Smoked Wings (Bourbon Glazed, Cajun Dusted, Buffalo) - $18\n
    Bourbon Lollipop Lamb - $35\n
    OxTail Egg Rolls - $22\n
    Lobster Menage (3 Cold Water Tails 3 Ways - Grilled, Fried, and 
    Stuffed, served with 3 sauces) - $51\n
    Jumbo Fried Shrimp (Served with double dipping sauces) - $22\n
    Lobster Queso Fries (House-made fries with a jalapeño queso 
    and warm butter-poached lobster) - $21\n
    Jumbo Shrimp Cocktail (Jumbo prawns served with cocktail and 
    spicy remoulade) - $20\n
    Buffalo Egg Rolls - $20`,
    image: require("../assets/Cache42foodpic1.jpg"),
  },
  {
    title: "Salads",
    content: `
      42 Chopped Salad - $14\n
      42 Caesar Salad - $14\n
      42 Wedge Ice Salad - $14\n
      42 House Salad - $14`,
    image: require("../assets/Cache42foodpic2.jpg"),
  },
  {
    title: "Off The Grill",
    content: `
      40oz Prime Tomahawk - $135\n
      Golden Rack Of Lamb - Market Price\n
      Surf And Turf (8oz Filet Mignon with a delicious grilled lobster 
      tail served with melted garlic butter and lemon) - $68\n
      Cajun NY Strip with Shrimp - $55`,
    image: require("../assets/Cache42foodpic3.jpg"),
  },
  {
    title: "Mains",
    content: `
      Jamaican Oxtails Over Rice - $38\n
      King Salmon And Shrimp - $42\n
      Cache Cajun Pasta (Options: Shrimp, Chicken, Lamb, Lobster, 
      Salmon) - $28`,
    image: require("../assets/Cache42foodpic4.jpg"),
  },
  {
    title: "Side Items",
    content: `
      Lobster Mashed Potatoes - $23\n
      1LB Baked Potatoes - $14\n
      Garlic Mashed Potatoes - $13\n
      Brussel Sprouts - $13\n
      Queso Blanco Lobster Mac - $23\n
      Creamed Spinach - $12\n
      Sautéed Asparagus - $13`,
    image: require("../assets/Cache42foodpic5.jpg"),
  },
  {
    title: "Cocktails",
    content: `
      House Martini - $12\n
      Top Shelf Martini - $15\n
      Bubbly Martini - $15\n
      Cotton Candy Margarita/Martini - $15\n
      Wokesha - $20\n
      Strawberry Casamigos - $14\n
      Strawberry Hennessy - $14\n
      Old Fashion - $12\n
      Long Island - $10\n
      Walk Me Down - $10\n
      Amaretto Sour - $10\n
      Top Shelf Margarita - $17\n
      House Margarita - $12\n
      Mai Tai - $10\n
      Screwdriver - $10\n
      Tequila Sunrise - $10\n
      Green Tea Shot - $10\n
      Don Julio 1942 - $35\n
      Don Julio Rosado - $30`,
    image: require("../assets/Cache42foodpic6.jpg"),
  },
];

export default class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = (section) => {
    return <View style={styles.content}></View>;
  };

  _renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <ImageBackground
          style={{ height: 70, maxWidth: windowWidth }}
          source={section.image}
        ></ImageBackground>
      </View>
    );
  };

  _renderContent = (section) => {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <ScrollView>
        <Text>Menu</Text>
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
    color: "white",
  },
  header: {
    backgroundColor: "black",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  content: {
    padding: 15,
    backgroundColor: "black",
  },
  contentText: {
    color: "white",
    textAlign: "center",
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#fff",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
  image: {
    height: 35,
    width: 50,
  },
});
