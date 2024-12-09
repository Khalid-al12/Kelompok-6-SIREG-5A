import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import hook navigasi

// Import gambar dari direktori lokal
import FMIPA from "./PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_FAKULTAS/FMIPA.png";
import TEKNIK from "./PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_FAKULTAS/FT.png";
import FKIP from "./PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_FAKULTAS/FKIP.png";
import FASILKOM from "./PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_FAKULTAS/FASILKOM.png";
import FP from "./PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_FAKULTAS/FP.png";
import FK from "./PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_FAKULTAS/FK.png";
import FH from "./PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_FAKULTAS/FH.png";
import FISIP from "./PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_FAKULTAS/FISIP.png";
import FKM from "./PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_FAKULTAS/FKM.png";
import FE from "./PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_FAKULTAS/FE.png";

export default function ListOrmawaFakultas() {
  const navigation = useNavigation(); // Inisialisasi navigasi

  const ormawaData = [
    {
      name: "BEM FMIPA UNSRI",
      desc: "Badan Eksekutif Mahasiswa Fakultas Matematika dan Pengetahuan Alam",
      image: FMIPA,
      screen: "PSOF1",
    },
    {
      name: "BEM FT UNSRI",
      desc: "Badan Eksekutif Mahasiswa Fakultas Teknik",
      image: TEKNIK,
      screen: "PSOF2",
    },
    {
      name: "BEM FKIP UNSRI",
      desc: "Badan Eksekutif Mahasiswa Fakultas Keguruan dan Ilmu Pendidikan",
      image: FKIP,
      screen: "PSOF3",
    },
    {
      name: "BEM FASILKOM UNSRI",
      desc: "Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer",
      image: FASILKOM,
      screen: "PSOF4",
    },
    {
      name: "BEM FP UNSRI",
      desc: "Badan Eksekutif Mahasiswa Fakultas Pertanian",
      image: FP,
      screen: "PSOF5",
    },
    {
      name: "BEM FK UNSRI",
      desc: "Badan Eksekutif Mahasiswa Fakultas Kedokteran",
      image: FK,
      screen: "PSOF6",
    },
    {
      name: "BEM FH UNSRI",
      desc: "Badan Eksekutif Mahasiswa Fakultas Hukum",
      image: FH,
      screen: "PSOF7",
    },
    {
      name: "BEM FISIP UNSRI",
      desc: "Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik",
      image: FISIP,
      screen: "PSOF8",
    },
    {
        name: "BEM FKM UNSRI",
        desc: "Badan Eksekutif Mahasiswa Fakultas Kesehatan Masyarakat",
        image: FKM,
        screen: "PSOF9",
      },
    {
        name: "BEM FE UNSRI",
        desc: "Badan Eksekutif Mahasiswa Fakultas Ekonomi",
        image: FE,
        screen: "PSOF10",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBackButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifikasi</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
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
