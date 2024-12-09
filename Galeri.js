import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "./ThemeContext";

export default (props) => {
  const { isDarkMode } = useTheme();

  const [images] = useState([
    {
      id: "1",
      title: "Pemilihan BEM Unsri",
      subtitle: "BEM UNIVERSITAS SRIWIJAYA 2024",
      source: require("./assets/Gerakan Mahasiswa2.jpg"),
    },
    {
      id: "2",
      title: "Pemilihan BEM FT Unsri",
      subtitle: "Pemilihan Ketua BEM FT Unsri",
      source: require("./assets/Pemilihan BEM FT.jpg"),
    },
    {
      id: "3",
      title: "Oprec Staff BEM Unsri",
      subtitle: "Staff BEM Unsri",
      source: require("./assets/Oprec Staff BEM U.jpg"),
    },
  ]);

  const selected = props.route?.params?.selected || null;

  const filteredImages = selected
    ? images.filter((image) => {
        if (selected === "bem_unsri" && image.title.includes("BEM Unsri")) {
          return true;
        }
        if (selected === "bem_ft_unsri" && image.title.includes("BEM FT Unsri")) {
          return true;
        }
        return false;
      })
    : images;

  const renderImageCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.source} style={styles.cardImage} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={isDarkMode ? styles.darkContainer : styles.lightContainer}
    >
      {/* Header */}
      <View style={styles.persegiBiru}>
        <View style={styles.seperempatLingkaran} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 19,
          }}
        >
          <View style={{ width: 150, flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("./assets/logo_direktori.png")}
              style={{ width: 41, height: 41 }}
            />
            <View style={styles.ormaTextContainer}>
              <Text style={styles.ormaText}>Galeri</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => props.navigation.goBack()}
          >
            <FontAwesome name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainCard}>
          <Text style={styles.mainCardTitle}>GALERI ORMAWA</Text>
          <Text style={styles.mainCardSubtitle}>
            Koleksi Foto dan Dokumentasi Kegiatan Ormawa
          </Text>
        </View>
      </View>

      {/* Content */}
      {filteredImages.length === 0 ? (
        <Text style={styles.emptyText}>Tidak ada gambar untuk ditampilkan</Text>
      ) : (
        <FlatList
          data={filteredImages}
          keyExtractor={(item) => item.id}
          renderItem={renderImageCard}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
};


// Tambahkan styles dari KategoriOrmawa.js yang relevan
const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#121212",
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
  mainCardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  mainCardSubtitle: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  emptyText: {
    textAlign: "center",
    color: "#4b5563",
    fontSize: 16,
    marginTop: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 16,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 300,
  },
  cardText: {
    padding: 16,
  },
  cardTitle: {
    color: "#f59e0b",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubtitle: {
    color: "#4b5563",
  },
  listContent: {
    paddingBottom: 16,
  },
});
