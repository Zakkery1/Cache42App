// import React from "react";
// import { ScrollView, Text, View, StyleSheet } from "react-native";

// export default MenuList = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <Section title="SMALL PLATES">
//         <MenuItem name="Lobster Queso with warm chips" price="$20" />
//         <MenuItem name="Char Grilled Oysters" price="$22" />
//         <MenuItem
//           name="Smoked Wings"
//           description="Bourbon Glazed, Cajun Dusted, Buffalo"
//           price="$18"
//         />
//         <MenuItem name="Bourbon Lollipop Lamb" price="$35" />
//         <MenuItem name="OxTail Egg Rolls" price="$22" />
//         <MenuItem
//           name="Lobster Menage"
//           description="3 Cold Water Tails 3 Ways- Grilled, Fried, and Stuffed and served with 3 sauces"
//           price="$51"
//         />
//         <MenuItem
//           name="Jumbo Fried Shrimp"
//           description="Served with double dipping sauces"
//           price="$22"
//         />
//         <MenuItem
//           name="Lobster Queso Fries"
//           description="House made fries with a jalapeño queso and warm butter poached lobster"
//           price="$21"
//         />
//         <MenuItem
//           name="Jumbo Shrimp Cocktail"
//           description="Jumbo prawns served with cocktail and spicy remoulade"
//           price="$20"
//         />
//         <MenuItem name="Buffalo Egg Rolls" price="$20" />
//       </Section>

//       <Section title="Salads">
//         <MenuItem name="42 Chopped Salad" price="$14" />
//         <MenuItem name="42 Caesar Salad" price="$14" />
//         <MenuItem name="42 Wedge Ice Salad" price="$14" />
//         <MenuItem name="42 House Salad" price="$14" />
//       </Section>

//       <Section title="Off The Grill">
//         <MenuItem name="40oz Prime Tomahawk" price="$135" />
//         <MenuItem name="Golden Rack Of Lamb" />
//         <MenuItem
//           name="Surf And Turf"
//           description="8oz Filet Mignon with a delicious grilled lobster tail served with melted garlic butter and lemon"
//           price="$68"
//         />
//         <MenuItem name="Cajun NY Strip with Shrimp" price="$55" />
//       </Section>

//       <Section title="MAINS">
//         <MenuItem name="Jamaican Oxtails Over Rice" price="$38" />
//         <MenuItem name="King Salmon And Shrimp" price="$42" />
//         <MenuItem
//           name="Cache Cajun Pasta"
//           price="$28"
//           description="Shrimp, Chicken, Lamb, Lobster, Salmon"
//         />
//       </Section>

//       <Section title="Side Items">
//         <MenuItem name="Lobster Mashed Potatoes" price="$23" />
//         <MenuItem name="1LB Baked Potatoes" price="$14" />
//         <MenuItem name="Garlic Mashed Potatoes" price="$13" />
//         <MenuItem name="Brussel Sprouts" price="$13" />
//         <MenuItem name="Queso Blanco Lobster Mac" price="$23" />
//         <MenuItem name="Creamed Spinach" price="$12" />
//         <MenuItem name="Sautéed Asparagus" price="$13" />
//       </Section>

//       <Section title="Cocktails">
//         <MenuItem name="House Martini" price="$12" />
//         <MenuItem name="Top Shelf Martini" price="$15" />
//         <MenuItem name="Bubbly Martini" price="$15" />
//         <MenuItem name="Cotton Candy Margarita/Martini" price="$15" />
//         <MenuItem name="Wokesha" price="$20" />
//         <MenuItem name="Strawberry Casamigos" price="$14" />
//         <MenuItem name="Strawberry Hennessy" price="$14" />
//         <MenuItem name="Old Fashion" price="$12" />
//         <MenuItem name="Long Island" price="$10" />
//         <MenuItem name="Walk Me Down" price="$10" />
//         <MenuItem name="Amaretto Sour" price="$10" />
//         <MenuItem name="Top Shelf Margarita" price="$17" />
//         <MenuItem name="House Margarita" price="$12" />
//         <MenuItem name="Mai Tai" price="$10" />
//         <MenuItem name="Screwdriver" price="$10" />
//         <MenuItem name="Tequila Sunrise" price="$10" />
//         <MenuItem name="Green Tea Shot" price="$10" />
//         <MenuItem name="Don Julio 1942" price="$35" />
//         <MenuItem name="Don Julio Rosado" price="$30" />
//       </Section>
//     </ScrollView>
//   );
// };

// const Section = ({ title, children }) => (
//   <View style={styles.section}>
//     <Text style={styles.sectionTitle}>{title}</Text>
//     {children}
//   </View>
// );

// const MenuItem = ({ name, description, price }) => (
//   <View style={styles.menuItem}>
//     <Text style={styles.itemName}>{name}</Text>
//     {description && <Text style={styles.itemDescription}>{description}</Text>}
//     <Text style={styles.itemPrice}>{price}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   section: {
//     marginBottom: 30,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   menuItem: {
//     marginBottom: 15,
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   itemDescription: {
//     fontSize: 14,
//     color: "#555",
//   },
//   itemPrice: {
//     fontSize: 16,
//     color: "#333",
//     marginTop: 5,
//   },
// });
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

const menuItems = [
  {
    name: "Lobster Queso with warm chips",
    price: "$20",
    description:
      "Start your meal with these great plates made for sharing or being selfish.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Char Grilled Oysters",
    price: "$22",
    description:
      "Start your meal with these great plates made for sharing or being selfish.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Smoked Wings (Bourbon Glazed, Cajun Dusted, Buffalo)",
    price: "$18",
    description:
      "Start your meal with these great plates made for sharing or being selfish.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Bourbon Lollipop Lamb",
    price: "$35",
    description:
      "Start your meal with these great plates made for sharing or being selfish.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "OxTail Egg Rolls",
    price: "$22",
    description:
      "Start your meal with these great plates made for sharing or being selfish.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Lobster Menage",
    price: "$51",
    description:
      "3 Cold Water Tails 3 Ways- Grilled, Fried, and Stuffed and served with 3 sauces",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jumbo Fried Shrimp",
    price: "$22",
    description: "Served with double dipping sauces.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Lobster Queso Fries",
    price: "$21",
    description:
      "House-made fries with a jalapeño queso and warm butter-poached lobster.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jumbo Shrimp Cocktail",
    price: "$20",
    description: "Jumbo prawns served with cocktail and spicy remoulade.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Buffalo Egg Rolls",
    price: "$20",
    description:
      "Start your meal with these great plates made for sharing or being selfish.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "42 Chopped Salad",
    price: "$14",
    description: "A delicious chopped salad.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "42 Caesar Salad",
    price: "$14",
    description: "A fresh Caesar salad.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "42 Wedge Ice Salad",
    price: "$14",
    description: "A crisp wedge ice salad.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "42 House Salad",
    price: "$14",
    description: "A classic house salad.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "40oz Prime Tomahawk",
    price: "$135",
    description: "The highest quality proteins grilled to perfection.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Golden Rack Of Lamb",
    price: "Market Price",
    description: "Tender and juicy rack of lamb.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Surf And Turf",
    price: "$68",
    description:
      "8oz Filet Mignon with a grilled lobster tail served with melted garlic butter and lemon.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Cajun NY Strip with Shrimp",
    price: "$55",
    description: "A Cajun-seasoned NY strip steak served with shrimp.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jamaican Oxtails Over Rice",
    price: "$38",
    description: "Tender oxtails served over rice.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "King Salmon And Shrimp",
    price: "$42",
    description: "Delicious salmon served with shrimp.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Cache Cajun Pasta",
    price: "$28",
    description:
      "Cajun pasta with your choice of Shrimp, Chicken, Lamb, Lobster, or Salmon.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Lobster Mashed Potatoes",
    price: "$23",
    description: "Perfect pairings for every entree.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "1LB Baked Potatoes",
    price: "$14",
    description: "Perfect pairings for every entree.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Garlic Mashed Potatoes",
    price: "$13",
    description: "Perfect pairings for every entree.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Brussel Sprouts",
    price: "$13",
    description: "Perfect pairings for every entree.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Queso Blanco Lobster Mac",
    price: "$23",
    description: "Perfect pairings for every entree.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Creamed Spinach",
    price: "$12",
    description: "Perfect pairings for every entree.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sautéed Asparagus",
    price: "$13",
    description: "Perfect pairings for every entree.",
    image: "https://via.placeholder.com/150",
  },
];
const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);
const MenuList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <Image style={styles.itemImage} source={{ uri: item.image }} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "transparent", // Adjust background color to your preference
    padding: 16,
    top: 50,
    borderWidth: 3,
    // borderColor: "red",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    backgroundColor: "#333", // Dark background for each menu item
    padding: 16,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    paddingRight: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  itemDescription: {
    fontSize: 14,
    color: "#bbb",
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    color: "#fff",
    marginTop: 8,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default MenuList;
