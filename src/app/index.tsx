import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { UserService } from "../services/UserService";

export default function App() {
  const userService = new UserService();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInUser(): Promise<void> {
    await userService.signIn(email, password);
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity onPress={signInUser}>
        <Text>Acessar</Text>
      </TouchableOpacity>
      <Link href="/user/register">Novo? Cadastre-se</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
