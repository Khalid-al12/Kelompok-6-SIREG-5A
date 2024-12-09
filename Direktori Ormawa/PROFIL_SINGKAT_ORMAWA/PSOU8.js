import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome untuk ikon

const OrmawaScreen = ({ navigation }) => {
  // Fungsi untuk membuka URL
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open link:", err)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          {/* Header Section */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 0,
              marginBottom: 20,
              marginHorizontal: 19,
            }}
          >
            <View style={{ width: 150, flexDirection: "row", alignItems: "center" }}>
              {/* Logo */}
              <Image
                source={require("./assets/logo_direktori.png")}
                defaultSource={require("./assets/placeholder.png")}
                style={{ width: 41, height: 41 }}
                onError={(error) =>
                  console.log("Image failed to load:", error.nativeEvent)
                }
              />
              {/* Title */}
              <View style={styles.ormaTextContainer}>
                <Text style={styles.ormaText}>Profil Ormawa</Text>
              </View>
            </View>

            {/* Back Button */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()} // Navigasi kembali ke halaman sebelumnya
            >
              <FontAwesome name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Content Section */}
          <View style={styles.column3}>
            <View style={styles.row3}>
              <Image
                source={require('C:/Users/User/Zann/PROFIL_SINGKAT_ORMAWA/ASET_LOGO_ORMAWA/LOGO_ORMAWA_UNIV/GABI.jpg')}
                style={{ borderRadius: 14, width: 76, height: 76, }}
              />
              <View style={styles.column4}>
                <Text style={styles.text2}>{"GABI Unsri"}</Text>
                <Text style={styles.text3}>{"Teater Gabi'91 Unsri "}</Text>
              </View>
            </View>
            <Text style={styles.text5}>{"PROFIL SINGKAT"}</Text>
            <Text style={styles.text4}>
              {
                "Unit Kegiatan Mahasiswa (UKM)  di Universitas Sriwijaya\n(UNSRI) adalah organisasi mahasiswa yang bertujuan\nuntuk mengembangkan potensi, bakat, dan minat\nmahasiswa di bidang Bidang UKM, misalnya olahraga,\nseni, penelitian, kewirausahaan, dll."
              }
            </Text>
            <Text style={styles.text5}>{"VISI"}</Text>
            <Text style={styles.text6}>
              {
                "Menjadi wadah pengembangan potensi dan bakat\nmahasiswa Universitas Sriwijaya yang unggul dan\nberintegritas, serta mampu berkontribusi positif bagi\nmasyarakat dan bangsa."
              }
            </Text>
            <Text style={styles.text7}>{"MISI"}</Text>
            <Text style={styles.text8}>
              {
                "1. Mengembangkan Potensi Mahasiswa\n2. Meningkatkan Kompetensi dan Keterampilan\n3. Mendorong Kreativitas dan Inovasi\n4. Menumbuhkan Jiwa Kepemimpinan dan Kewirausahaan\n5. Memperkuat Solidaritas dan Kerjasama\n6. Mengabdi kepada Masyarakat\n7. Mendukung Prestasi Akademik dan Non-Akademik"
              }
            </Text>
            
            <Text style={styles.text9}>{"Info Lebih Lanjut"}</Text>
            <View style={styles.row4}>
              {/* Tombol WhatsApp */}
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => openLink("https://wa.me/+628228926548")} // Ganti dengan nomor WhatsApp Anda
              >
                <FontAwesome name="whatsapp" size={40} color="#25D366" />
              </TouchableOpacity>

              {/* Tombol Instagram */}
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => openLink("https://instagram.com/sbi_unsri")} // Ganti dengan link Instagram Anda
              >
                <FontAwesome name="instagram" size={40} color="#E4405F" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  column: {
    backgroundColor: "#3470A2",
    paddingTop: 73,
    paddingBottom: 83,
    paddingHorizontal: 22,
  },
  column3: {
    backgroundColor: "#FCF4F4",
    borderColor: "#FFC727",
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 40,
    paddingHorizontal: 24,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  column4: {
    width: 203,
    alignSelf: "flex-start",
    marginTop: 12,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 39,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  socialButton: {
    marginRight: 15,
  },
  text2: {
    color: "#000000",
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 10,
  },
  text3: {
    color: "#000000",
    fontSize: 12,
    marginLeft: 10,
  },
  text4: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 34,
    width: 304,
  },
  text5: {
    color: "#000000",
    fontSize: 18,
    marginBottom: 5,
  },
  text6: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 29,
    width: 304,
  },
  text7: {
    color: "#000000",
    fontSize: 18,
    marginBottom: 5,
  },
  text8: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 33,
    width: 304,
  },
  text9: {
    color: "#000000",
    fontSize: 18,
    marginBottom: 14,
  },
  ormaTextContainer: {
    marginLeft: 10,
  },
  ormaText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    marginLeft: "auto",
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 10,
  },
});

export default OrmawaScreen;
