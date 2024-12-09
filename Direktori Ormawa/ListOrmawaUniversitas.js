import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import hook navigasi
import { useTheme } from "./ThemeContext";

// Import gambar dari direktori lokal
import bemLogo from './PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_UNIV/BEMU.png';
import ldkLogo from './PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_UNIV/LDK.jpg';
import lpmgsLogo from './PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_UNIV/LPMGS.jpg';
import ureadLogo from './PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_UNIV/UREAD.jpeg';
import harmoniLogo from './PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_UNIV/HARMONI.jpg';
import belisarioLogo from './PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_UNIV/BELISARIO.jpg';
import pramukaLogo from './PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_UNIV/PRAMUKA.jpeg';
import gabiLogo from './PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_UNIV/GABI.jpg';

export default function ListOrmawaUniversitas() {
  const navigation = useNavigation(); // Inisialisasi navigasi
  const { isDarkMode } = useTheme();

  const ormawaData = [
    { name: "BEM Universitas Sriwijaya", desc: "Badan Eksekutif Mahasiswa", image: bemLogo, screen: "PSOU1" },
    { name: "LDK Nadwah Unsri", desc: "Lembaga Dakwah Kampus", image: ldkLogo, screen: "PSOU2" },
    { name: "LPMGS Unsri", desc: "Lembaga Pers Mahasiswa Gelora Sriwijaya", image: lpmgsLogo, screen: "PSOU3" },
    { name: "U-READ Unsri", desc: "Unsri Riset dan Edukasi", image: ureadLogo, screen: "PSOU4" },
    { name: "HARMONI Unsri", desc: "Harmoni Unsri", image: harmoniLogo, screen: "PSOU5" },
    { name: "BELISARIO Unsri", desc: "Belisario Choir Unsri", image: belisarioLogo, screen: "PSOU6" },
    { name: "PRAMUKA Unsri", desc: "Praja Muda Karana Unsri KSATRIA SRIWIJAYA", image: pramukaLogo, screen: "PSOU7" },
    { name: "GABI Unsri", desc: "Teater Gabi'91 Unsri", image: gabiLogo, screen: "PSOU8" },
  ];

  return (
    <SafeAreaView style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBackButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profil Ormawa Universitas</Text>
      </View>

      {/* Ormawa List */}
      <ScrollView style={styles.scrollView}>
        {ormawaData.map((ormawa, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card}
            onPress={() => navigation.navigate(ormawa.screen)} // Navigasi ke screen yang sesuai
          >
            <Image source={ormawa.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{ormawa.name}</Text>
              <Text style={styles.desc}>{ormawa.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    backgroundColor: "#3470A2",
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  headerBackButton: {
    padding: 8,
    borderRadius: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  desc: {
    fontSize: 12,
    color: "#6E6E6E",
    marginTop: 4,
  },
});
