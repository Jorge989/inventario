import React, { useState } from "react";

import {
  Picker,
  StyleSheet,
  SafeAreaView,
  Animated,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

export default function Config({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("HTTP");
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View></View>

      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={styles.pikcer}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="HTTP" value="HTTP" />
          <Picker.Item label="HTTPS" value="HTTPS" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="192.168.0.55"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input2}
          placeholder="20984"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input3}
          placeholder="jderest"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSalvar}>
          <Text style={styles.salvar}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  input: {
    top: 45,

    backgroundColor: "#FFF",
    width: "90%",
    marginBottom: 15,
    height: 45,
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  input2: {
    top: 100,
    marginLeft: -180,
    backgroundColor: "#FFF",
    width: "40%",
    marginBottom: 15,
    height: 45,
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  input3: {
    top: 40,
    marginLeft: 180,
    backgroundColor: "#FFF",
    color: "pink",
    width: "40%",
    marginBottom: 15,
    height: 45,
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSalvar: {
    backgroundColor: "#76C86D",
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
    width: 330,
    height: 49,
    borderRadius: 20,
    letterSpacing: 2.5,
    fontWeight: "bold",
    elevation: 5,
  },
  salvar: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 7.5,
  },
  pikcer: {
    color: "#606060",
    fontWeight: "bold",
    height: 50,
    width: 330,
    backgroundColor: "#FFF",
    top: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});
