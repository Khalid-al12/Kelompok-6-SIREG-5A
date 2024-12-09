import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "./ThemeContext";

const InfoUniversitas = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const { isDarkMode } = useTheme();

  // Data untuk Info Universitas
  const data = [
    {
      id: 1,
      name: "BPH BEM UNSRI",
      logo: "https://example.com/bem-logo.png",
      dates: "1-5 Mei 2024",
      contact: "08********21 (Ayu)",
      link: "https://id.linkedin.com/in/bemkmunsri",
      instagram: "https://instagram.com/bemunsriofficial",
    },
    {
      id: 2,
      name: "STAFF BELISARIO",
      logo: "https://example.com/belisario-logo.png",
      dates: "14-28 Mei 2024",
      contact: "08********14 (Sandu)",
      link: "https://id.linkedin.com/in/belisario-choir-unsri-2520692a9?trk=people-guest_people_search-card",
      instagram: "https://instagram.com/belisario_unsri",
    },
    {
      id: 3,
      name: "STAFF U-READ",
      logo: "https://example.com/u-read-logo.png",
      dates: "24 Mei-7 Juni 2024",
      contact: "08********44 (Maya)",
      link: "https://www.u-readunsri.com/",
      instagram: "https://instagram.com/uread_unsri",
    },
  ];

  // Tangani navigasi dengan parameter "selected"
  React.useEffect(() => {
    const selected = route.params?.selected || null;
    if (selected === "bph_bem_unsri") {
      const selectedData = data.find((info) => info.name === "BPH BEM UNSRI");
      if (selectedData) {
        openModal(selectedData);
      }
    }
  }, [route.params]);

  const openModal = (info) => {
    setSelectedInfo(info);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedInfo(null);
  };

  return (
    <SafeAreaView style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBackButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Informasi Universitas</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => openModal(item)}
          >
            <View style={styles.cardHeader}>
              <Image style={styles.logo} source={{ uri: item.logo }} />
              <Text style={styles.organization}>{item.name}</Text>
            </View>
            <Icon name="file-text" size={100} color="#ffffff" style={styles.iconCenter} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal Pop-up */}
      {selectedInfo && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedInfo.name}</Text>
              <Text style={styles.modalText}>
                Tanggal Pendaftaran: {selectedInfo.dates}
              </Text>
              <Text style={styles.modalText}>
                Narahubung: {selectedInfo.contact}
              </Text>
              <Text
                style={styles.modalLink}
                onPress={() => Linking.openURL(selectedInfo.link)}
              >
                Link Pendaftaran
              </Text>
              <Text
                style={styles.modalLink}
                onPress={() => Linking.openURL(selectedInfo.instagram)}
              >
                Instagram
              </Text>
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={closeModal}
              >
                <Text style={styles.modalCloseText}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
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
  scrollContainer: {
    paddingBottom: 25,
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
  card: {
    backgroundColor: "#3470A2",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  organization: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  iconCenter: {
    alignSelf: "center",
    marginVertical: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalLink: {
    fontSize: 16,
    color: "blue",
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  modalCloseButton: {
    backgroundColor: "#3470A2",
    padding: 10,
    borderRadius: 5,
  },
  modalCloseText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default InfoUniversitas;
