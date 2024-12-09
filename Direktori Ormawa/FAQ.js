import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet, Image, Modal } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from "./ThemeContext";

export default (props) => {

  const { isDarkMode } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <ScrollView horizontal={false} style={styles.scrollView}>
        <View style={styles.column}>
          {/* Card Kategori Ormawa */}
          <View style={styles.persegiBiru}>
            <View style={styles.seperempatLingkaran} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 48, marginHorizontal: 19 }}>
              <View style={{ width: 150, flexDirection: "row", alignItems: "center" }}>
                {/* Logo */}
                <Image
                  source={require('./assets/logo_direktori.png')}
                  style={{ width: 41, height: 41, zIndex: 2 }}
                />
                {/* Tulisan Ormawa */}
                <View style={styles.ormaTextContainer}>
                  <Text style={styles.ormaText}>Ormawa</Text>
                </View>
              </View>

              {/* Back Button */}
              <TouchableOpacity style={styles.backButton} onPress={() => alert('Back button pressed')}>
                <FontAwesome name="chevron-left" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.mainCard}>
              <Image
                source={require('./assets/faq.png')}
                style={styles.categoryIcon}
              />
              <View style={styles.mainCardContent}>
                <Text style={styles.mainCardTitle}>FAQ</Text>
                <Text style={styles.mainCardSubtitle}>
                  Pertanyaan Seputar Ormawa
                </Text>
              </View>
            </View>
          </View>

          {/* Pertanyaan pertama */}
          <TouchableOpacity onPress={() => handleOpenModal(
            "Mengikuti organisasi mahasiswa di kampus memiliki sejumlah manfaat, antara lain:\n\n" +
            "1. Memperluas jaringan sosial dan membangun hubungan dengan sesama mahasiswa.\n\n" +
            "2. Mengembangkan keterampilan kepemimpinan dan manajemen waktu.\n\n" +
            "3. Meningkatkan kemampuan komunikasi dan kerjasama tim.\n\n" +
            "4. Memperoleh pengalaman praktis di luar ruang kelas yang dapat memperkaya CV dan meningkatkan prospek karier di masa depan.\n\n" +
            "5. Memiliki platform untuk mengaktualisasikan minat, bakat, dan aspirasi di berbagai bidang seperti olahraga, seni, atau sosial."
          )}>
            <View style={styles.categoryCard}>
              <Text style={styles.categorySubtitle}>
                Apa manfaat mengikuti ormawa di kampus?
              </Text>
            </View>
          </TouchableOpacity>

          {/* Pertanyaan kedua */}
          <TouchableOpacity onPress={() => handleOpenModal(
            "Perbedaan utama antara organisasi mahasiswa tingkat universitas dan tingkat fakultas terletak pada cakupan dan lingkup kerjanya.\n\n" +
            "Organisasi mahasiswa tingkat universitas lebih bersifat menyeluruh dan mewakili seluruh mahasiswa di universitas, sementara organisasi mahasiswa tingkat fakultas lebih terfokus pada mahasiswa yang terdaftar di fakultas tertentu.\n\n" +
            "Selain itu, agenda dan program kerja kedua jenis organisasi ini juga bisa berbeda sesuai dengan kebutuhan dan karakteristik mahasiswa di tingkat universitas atau fakultas."
          )}>
            <View style={styles.categoryCard}>
              <Text style={styles.categorySubtitle}>
                Apa perbedaan organisasi tingkat universitas dan tingkat fakultas?
              </Text>
            </View>
          </TouchableOpacity>

          {/* Pertanyaan ketiga */}
          <TouchableOpacity onPress={() => handleOpenModal(
            "Secara umum, keikutsertaan dalam organisasi mahasiswa tidak seharusnya mengganggu kegiatan belajar jika diatur dengan baik.\n\n" +
            "Namun, jika seseorang tidak dapat mengelola waktu dengan efektif antara kegiatan organisasi dan akademik, kemungkinan akan terjadi gangguan.\n\n" +
            "Penting bagi mahasiswa untuk memiliki keseimbangan antara kegiatan organisasi dan akademik agar tidak mengorbankan kualitas pendidikan mereka."
          )}>
            <View style={styles.categoryCard}>
              <Text style={styles.categorySubtitle}>
                Apakah organisasi mahasiswa dapat mengganggu kegiatan belajar?
              </Text>
            </View>
          </TouchableOpacity>

          {/* Pertanyaan keempat */}
          <TouchableOpacity onPress={() => handleOpenModal(
            "Ya, keikutsertaan dalam organisasi mahasiswa adalah pilihan.\n\n" +
            "Tidak ada kewajiban bagi seorang mahasiswa untuk menjadi anggota organisasi mahasiswa.\n\n" +
            "Namun demikian, mengikuti organisasi dapat memberikan banyak manfaat tambahan selama masa kuliah."
          )}>
            <View style={styles.categoryCard}>
              <Text style={styles.categorySubtitle}>
                Apakah boleh seorang mahasiswa tidak mengikuti organisasi mahasiswa?
              </Text>
            </View>
          </TouchableOpacity>

          {/* Pertanyaan kelima */}
          <TouchableOpacity onPress={() => handleOpenModal(
            "Tidak, tidak ada ketentuan yang secara resmi mewajibkan mahasiswa untuk mengikuti organisasi.\n\n" +
            "Namun, banyak universitas mendorong partisipasi mahasiswa dalam organisasi untuk memperluas pengalaman di luar kelas.\n\n" +
            "Keikutsertaan dalam organisasi sering dianggap sebagai bagian integral dari pengalaman mahasiswa di perguruan tinggi, meskipun bukan suatu kewajiban."
          )}>
            <View style={styles.categoryCard}>
              <Text style={styles.categorySubtitle}>
                Apakah mahasiswa harus mengikuti organisasi mahasiswa?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalContent}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    width: '100%',
    height: 315,
    backgroundColor: "#3470A2",
    paddingTop: 72,
    paddingBottom: 33,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    position: 'relative',
    marginBottom: 9,
  },
  seperempatLingkaran: {
    position: 'absolute',
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
    backgroundColor: '#225580',
    borderRadius: 8,
  },
  mainCard: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#225580",
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 160,
    alignItems: "center",
    elevation: 4,
  },
  categoryIcon: {
    width: 45,
    height: 45,
    marginRight: 20,
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
    width: 360,
    height: 75,
    borderRadius: 20,
    padding: 18,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  categorySubtitle: {
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "#3470A2",  // Blue background
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#FFFFFF",  // White text
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#225580",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});
