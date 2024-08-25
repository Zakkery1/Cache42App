import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default MenuList = () => {
  return (
    <ScrollView style={styles.container}>
      <Section title="SMALL PLATES">
        <MenuItem name="Lobster Queso with warm chips" price="$20" />
        <MenuItem name="Char Grilled Oysters" price="$22" />
        <MenuItem
          name="Smoked Wings"
          description="Bourbon Glazed, Cajun Dusted, Buffalo"
          price="$18"
        />
        <MenuItem name="Bourbon Lollipop Lamb" price="$35" />
        <MenuItem name="OxTail Egg Rolls" price="$22" />
        <MenuItem
          name="Lobster Menage"
          description="3 Cold Water Tails 3 Ways- Grilled, Fried, and Stuffed and served with 3 sauces"
          price="$51"
        />
        <MenuItem
          name="Jumbo Fried Shrimp"
          description="Served with double dipping sauces"
          price="$22"
        />
        <MenuItem
          name="Lobster Queso Fries"
          description="House made fries with a jalapeño queso and warm butter poached lobster"
          price="$21"
        />
        <MenuItem
          name="Jumbo Shrimp Cocktail"
          description="Jumbo prawns served with cocktail and spicy remoulade"
          price="$20"
        />
        <MenuItem name="Buffalo Egg Rolls" price="$20" />
      </Section>

      <Section title="Salads">
        <MenuItem name="42 Chopped Salad" price="$14" />
        <MenuItem name="42 Caesar Salad" price="$14" />
        <MenuItem name="42 Wedge Ice Salad" price="$14" />
        <MenuItem name="42 House Salad" price="$14" />
      </Section>

      <Section title="Off The Grill">
        <MenuItem name="40oz Prime Tomahawk" price="$135" />
        <MenuItem name="Golden Rack Of Lamb" />
        <MenuItem
          name="Surf And Turf"
          description="8oz Filet Mignon with a delicious grilled lobster tail served with melted garlic butter and lemon"
          price="$68"
        />
        <MenuItem name="Cajun NY Strip with Shrimp" price="$55" />
      </Section>

      <Section title="MAINS">
        <MenuItem name="Jamaican Oxtails Over Rice" price="$38" />
        <MenuItem name="King Salmon And Shrimp" price="$42" />
        <MenuItem
          name="Cache Cajun Pasta"
          price="$28"
          description="Shrimp, Chicken, Lamb, Lobster, Salmon"
        />
      </Section>

      <Section title="Side Items">
        <MenuItem name="Lobster Mashed Potatoes" price="$23" />
        <MenuItem name="1LB Baked Potatoes" price="$14" />
        <MenuItem name="Garlic Mashed Potatoes" price="$13" />
        <MenuItem name="Brussel Sprouts" price="$13" />
        <MenuItem name="Queso Blanco Lobster Mac" price="$23" />
        <MenuItem name="Creamed Spinach" price="$12" />
        <MenuItem name="Sautéed Asparagus" price="$13" />
      </Section>

      <Section title="Cocktails">
        <MenuItem name="House Martini" price="$12" />
        <MenuItem name="Top Shelf Martini" price="$15" />
        <MenuItem name="Bubbly Martini" price="$15" />
        <MenuItem name="Cotton Candy Margarita/Martini" price="$15" />
        <MenuItem name="Wokesha" price="$20" />
        <MenuItem name="Strawberry Casamigos" price="$14" />
        <MenuItem name="Strawberry Hennessy" price="$14" />
        <MenuItem name="Old Fashion" price="$12" />
        <MenuItem name="Long Island" price="$10" />
        <MenuItem name="Walk Me Down" price="$10" />
        <MenuItem name="Amaretto Sour" price="$10" />
        <MenuItem name="Top Shelf Margarita" price="$17" />
        <MenuItem name="House Margarita" price="$12" />
        <MenuItem name="Mai Tai" price="$10" />
        <MenuItem name="Screwdriver" price="$10" />
        <MenuItem name="Tequila Sunrise" price="$10" />
        <MenuItem name="Green Tea Shot" price="$10" />
        <MenuItem name="Don Julio 1942" price="$35" />
        <MenuItem name="Don Julio Rosado" price="$30" />
      </Section>
    </ScrollView>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const MenuItem = ({ name, description, price }) => (
  <View style={styles.menuItem}>
    <Text style={styles.itemName}>{name}</Text>
    {description && <Text style={styles.itemDescription}>{description}</Text>}
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  menuItem: {
    marginBottom: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: "#555",
  },
  itemPrice: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
  },
});
