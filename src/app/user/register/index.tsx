import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import User from "../../../models/User";
import UserService from "../../../services/UserService";

export default function UserRegister() {
  const userService = new UserService();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function registerUser(): Promise<void> {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = new User(email, password);
    await userService.signUp(user);
  }

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <TouchableOpacity onPress={registerUser}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
