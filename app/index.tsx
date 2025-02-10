import {Button, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";
import React from "react";

export default function Page() {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Customer Management</Text>
          <Text style={styles.subtitle}>Welcome to the dashboard</Text>



        <Link href='/customer'><Button title={"Customer Management"}/></Link>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
   backgroundColor: "#007bff",
    padding: 16,
    borderRadius: 8,
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    marginTop:-600,
    marginLeft:-550,
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 30,
    marginBottom: 32,
    fontWeight: "500",
    lineHeight: 1.2,
    fontSize:32,
    letterSpacing: -0.5,
    color: "#38434D",
  },
});
