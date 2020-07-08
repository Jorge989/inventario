import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Action from "../../assets/action";
import Lock from "../../assets/Lock";
import User from "../../assets/User";
import Set from "../../assets/set";
import {
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

export default function App({ navigation }) {
  const navigation = useNavigation();
  function navigateToConfig() {
    navigation.navigate("Config");
  }

  const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }));
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
    }).start();
  }, []);
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 35,
            top: 650,
          }}
        >
          Inventário
        </Text>
        <Action style={styles.act} />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "#1D4A71",
            transform: [{ rotate: "45deg" }],
          },
        ]}
      ></View>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <Text style={styles.textsenha}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <Text style={styles.textsenha2}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <User style={styles.user} />
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Configurações} onPress={useNavigation}>
          <Set style={styles.engrenagem} />
          <Text style={styles.ConfigText}>Configurações</Text>
        </TouchableOpacity>
        <Lock style={styles.lock} />
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFEFEF",
  },
  in: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 35,
    top: 650,
  },
  act: {
    marginLeft: 17,
    top: 480,
    justifyContent: "center",
    alignItems: "center",
  },

  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 770,
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "#FFF",
    width: "90%",
    marginBottom: 15,
    top: -80,
    height: 49,
    fontSize: 17,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 42,
  },
  btnSubmit: {
    backgroundColor: "#35AAFF",
    width: "90%",
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    letterSpacing: 2.5,
    fontWeight: "bold",
    top: -35,
    elevation: 5,
  },
  submitText: {
    color: "#FFF",
    fontSize: 15,
    top: -10,
    fontWeight: "bold",
    letterSpacing: 2.9,
  },
  Configurações: {
    marginTop: -80,
    top: 75,
    backgroundColor: "#FFB84D",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 51,
    borderRadius: 20,
    letterSpacing: 2.5,
    fontWeight: "bold",
    elevation: 5,
  },
  ConfigText: {
    color: "#FFF",
    top: -8,

    fontWeight: "bold",
    letterSpacing: 2.5,
  },
  textsenha: {
    top: -93,
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: -250,
  },
  textsenha2: {
    top: -87,
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: -260,
  },
  engrenagem: {
    flex: 1,
    width: "90%",
    top: 9,
    marginLeft: -180,
    zIndex: 1,
  },
  user: {
    flex: 1,
    width: "90%",
    top: -189,
    marginLeft: -280,
    zIndex: 1,
  },
  lock: {
    flex: 1,
    width: "90%",
    top: -150,
    marginLeft: -280,
    zIndex: 1,
  },
  box: {
    height: 750,
    width: 600,
    top: 750,
    borderRadius: 5,
    marginVertical: 0,
    marginLeft: 330,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
  },
});
