import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "./ThemeContext";

export default (props) => {

  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView style={isDarkMode ? styles.darkContainer : styles.lightContainer}
    >
      <ScrollView horizontal={false} style={styles.scrollView}>
        <View style={styles.column}>
          {/* Header Section */}
          <View style={styles.persegiBiru}>
            <View style={styles.seperempatLingkaran} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 0,
                marginBottom: 48,
                marginHorizontal: 19,
              }}
            >
              <View
                style={{ width: 150, flexDirection: "row", alignItems: "center" }}
              >
                {/* Logo */}
                <Image
                  source={require("./assets/logo_direktori.png")}
                  defaultSource={require("./assets/placeholder.png")} // Placeholder fallback
                  style={{ width: 41, height: 41 }}
                  onError={(error) =>
                    console.log("Image failed to load:", error.nativeEvent)
                  }
                />
                {/* Title */}
                <View style={styles.ormaTextContainer}>
                  <Text style={styles.ormaText}>Ormawa</Text>
                </View>
              </View>

              {/* Back Button */}
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => alert("Back button pressed")}
              >
                <FontAwesome name="chevron-left" size={24} color="white" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.mainCard}>
            <Image
                source={require("./assets/kategori.png")} // Pastikan path benar
                style={styles.categoryIcon}
              />
              <View style={styles.mainCardContent}>
                <Text style={styles.mainCardTitle}>KATEGORI ORMAWA</Text>
                <Text style={styles.mainCardSubtitle}>
                  Dapatkan Informasi Seputar Organisasi Mahasiswa Disini
                </Text>
              </View>
            </View>
          </View>

          {/* Universitas Button */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ListOrmawaUniversitas")}
          >
            <View style={styles.categoryCard}>
              <Image
                source={require("./assets/Universitas.png")}
                defaultSource={require("./assets/placeholder.png")} // Placeholder fallback
                style={ {
                  width: 60,
                  height: 60,
                  marginTop: 20,
                  marginBottom: 20,
                }}
                onError={(error) =>
                  console.log("Image failed to load:", error.nativeEvent)
                }
              />
              <Text style={styles.categoryTitle}>UNIVERSITAS</Text>
              <Text style={styles.categorySubtitle}>
                Cari organisasi mahasiswa tingkat Universitas disini!
              </Text>
            </View>
          </TouchableOpacity>

          {/* Fakultas Button */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ListOrmawaFakultas")}
          >
            <View style={styles.categoryCard}>
              <Image
                source={require("./assets/Fakultas.png")}
                defaultSource={require("./assets/placeholder.png")} // Placeholder fallback
                style={ {
                  width: 60,
                  height: 60,
                  marginTop: 20,
                  marginBottom: 20,
                }}
                onError={(error) =>
                  console.log("Image failed to load:", error.nativeEvent)
                }
              />
              <Text style={styles.categoryTitle}>FAKULTAS</Text>
              <Text style={styles.categorySubtitle}>
                Dapatkan Informasi Seputar Organisasi Mahasiswa Disini
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#121212",
  },
  scrollView: {
    paddingBottom: 21,
  },
  column: {
    width: "100%",
    alignItems: "center",
  },
  persegiBiru: {
    width: "100%",
    height: 315,
    backgroundColor: "#3470A2",
    paddingTop: 72,
    paddingBottom: 33,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    position: "relative",
    marginBottom: 20,
  },
  seperempatLingkaran: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 250,
    height: 250,
    backgroundColor: "#63ABE6",
    borderTopLeftRadius: 350,
    borderBottomRightRadius: 40,
  },
  ormaTextContainer: {
    backgroundColor: "#96B5CF",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 15,
    marginLeft: -5,
  },
  ormaText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    padding: 8,
    backgroundColor: "#225580",
    borderRadius: 8,
  },
  mainCard: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#225580",
    padding: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 160,
    alignItems: "center",
    borderRadius: 20,
    elevation: 4,
    zIndex: 999,
  },
  mainCardContent: {
    flex: 1,
  },
  mainCardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  mainCardSubtitle: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  categoryCard: {
    backgroundColor: "#225580",
    width: 350,
    height: 200,
    borderRadius: 20,
    padding: 16,
    margin: 16,
    alignItems: "center",
  },
  categoryIcon: {
    width: 45,
    height: 45,
    marginRight: 20,
  },
  categoryTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  categorySubtitle: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
  },
});
