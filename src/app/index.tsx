import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/sign-up" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.label}>Sign In</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#000000",
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
