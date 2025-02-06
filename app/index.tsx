import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Customer Management</Text>
        <Text style={styles.subtitle}>Welcome to the dashboard</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 30,
    marginBottom: 32,
    fontWeight: "500",
    lineHeight: 1.2,
    letterSpacing: -0.5,
    fontWeight: "500",
    lineHeight: 1.2,
    letterSpacing: -0.5,
    fontSize: 24,
    fontSize: 36,
    color: "#38434D",
  },
});
