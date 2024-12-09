import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "./ThemeContext";


export default () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView  style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <ScrollView
        style={[
          isDarkMode ? styles.darkBackground : styles.lightBackground,
        ]}
      >
        <View style={{ marginBottom: 53, position: "relative" }}>
          {/* Header Section */}
          <View
            style={{
              backgroundColor: "#3470A2",
              width: "100%",
              height: 315,
              paddingTop: 72,
              paddingBottom: 33,
              borderBottomLeftRadius: 32,
              borderBottomRightRadius: 32,
            }}
          >
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 250,
                height: 250,
                backgroundColor: "#63ABE6",
                borderTopLeftRadius: 350,
                borderBottomRightRadius: 40,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 19,
              }}
            >
              <View
                style={{
                  width: 150,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./assets/logo_direktori.png")}
                  style={{ width: 41, height: 41, zIndex: 2 }}
                />
                <View style={styles.ormaTextContainer}>
                  <Text style={styles.ormaText}>Ormawa</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifikasi")} // Navigasi ke Notifikasi
              >
                <View
                  style={{
                    position: "absolute",
                    top: -9,
                    right: 6,
                    width: 45,
                    height: 45,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 25,
                  }}
                />
                <Icon
                  name="bell"
                  size={28}
                  color="#FFC727"
                  style={{ right: 14, top: -1 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.mainCard}>
              <View style={styles.mainCardContent}>
                <Text style={styles.mainCardTitle}>Selamat Datang, </Text>
                <Text style={styles.mainCardTitle}>
                  Intelektual Sriwijaya Muda{" "}
                </Text>
                <Text style={styles.mainCardSubtitle}>
                  Dapatkan Informasi Seputar Organisasi Mahasiswa Disini
                </Text>
              </View>
            </View>
          </View>

          {/* Search Bar */}
          <View
            style={{
              position: "absolute",
              top: 288,
              left: 35,
              right: 35,
              backgroundColor: "#F7F8FA",
              borderRadius: 24,
              paddingVertical: 9,
              paddingHorizontal: 15,
              zIndex: 3,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" [styles.searchBar, isDarkMode ? styles.darkInput : {}]}}>
              <Icon
                name="search"
                size={21}
                color={isDarkMode ? "#FFF" : "#8C8994"}
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={{ flex: 1, color: "#8C8994" [styles.searchInput, isDarkMode ? styles.darkText : {}]}}
                placeholder="Cari Ormawa"
                placeholderTextColor="#8C8994"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>

          {/* Seputar Ormawa */}
          <Text
            style={{
              color: "#002649",
              fontSize: 20,
              marginLeft: 20,
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            {"Seputar Ormawa"}
          </Text>

          {/* Button Group */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 30,
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Kategori Ormawa")}
            >
              <Icon name="folder" size={24} color="#FFFFFF" />
              <Text style={styles.buttonText}>Kategori Ormawa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Informasi")}
            >
              <Icon name="info-circle" size={24} color="#FFFFFF" />
              <Text style={styles.buttonText}>Informasi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("FAQ")}
            >
              <Icon name="question-circle" size={24} color="#FFFFFF" />
              <Text style={styles.buttonText}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Galeri")} // Pastikan nama ini sesuai dengan nama di Tab.Navigator
        >
        <Icon name="image" size={24} color="#FFFFFF" />
        <Text style={styles.buttonText}>Galeri</Text>
        </TouchableOpacity>

          </View>
        </View>

        {/* Berita Ormawa */}
<Text
  style={{
    color: "#002549",
    fontSize: 20,
    marginBottom: 7,
    marginLeft: 21,
  }}
>
  {"Berita Ormawa"}
</Text>
<ScrollView
  horizontal
  style={{
    flexDirection: "row",
    marginBottom: 22,
    marginHorizontal: 18,
  }}
>
  {/* Pemilihan Ketua & Wakil BEM Unsri */}
  <TouchableOpacity
    style={styles.newsCard}
    onPress={() => navigation.navigate("Galeri", { selected: "bem_unsri" })}
  >
    <Image
      source={require("./assets/Gerakan Mahasiswa2.jpg")} // Gambar lokal untuk Pemilihan BEM Unsri
      style={styles.cardImage}
    />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>
        {"Pemilihan Ketua & Wakil BEM Unsri"}
      </Text>
    </View>
  </TouchableOpacity>

  {/* Pemilihan Ketua BEM FT Unsri */}
  <TouchableOpacity
    style={styles.newsCard}
    onPress={() => navigation.navigate("Galeri", { selected: "bem_ft_unsri" })}
  >
    <Image
      source={require("./assets/Pemilihan BEM FT.jpg")} // Gambar lokal untuk Pemilihan BEM FT Unsri
      style={styles.cardImage}
    />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>
        {"Pemilihan Ketua BEM FT Unsri"}
      </Text>
    </View>
  </TouchableOpacity>

  {/* Oprec Staff BEM Unsri */}
  <TouchableOpacity
    style={styles.newsCard}
    onPress={() => navigation.navigate("InfoUniversitas", { selected: "bph_bem_unsri" })}
  >
    <Image
      source={require("./assets/Oprec Staff BEM U.jpg")} // Gambar lokal untuk Oprec Staff BEM Unsri
      style={styles.cardImage}
    />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>
        {"Oprec Staff BEM Unsri"}
      </Text>
    </View>
  </TouchableOpacity>
</ScrollView>
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
  lightBackground: {
    backgroundColor: "#FFFFFF",
  },
  darkBackground: {
    backgroundColor: "#121212",
  },
  lightText: {
    color: "#000",
  },
  darkText: {
    color: "#FFF",
  },
  darkInput: {
    backgroundColor: "#333",
  },
  searchInput: {
    fontSize: 16,
    marginLeft: 10,
    color: "#000",
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: "#3470A2",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
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
  newsCard: {
    width: 150,
    borderColor: "#F2F2F2",
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 15,
  },
  cardContent: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  cardTitle: {
    color: "#002549",
    fontSize: 16,
    width: 116,
  },
  mainCard: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#225580",
    borderRadius: 20,
    padding: 16,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 160,
    alignItems: "center",
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
  cardImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover", // Menyesuaikan gambar agar proporsional
  },  
});
