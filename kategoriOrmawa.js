import React from "react";
import { SafeAreaView, View, ScrollView, ImageBackground, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={require('./assets/logo_direktori.png')}
              style={styles.ormawaIcon}
            />
            <Text style={styles.headerText}>Ormawa</Text>
          </View>
          <TouchableOpacity style={styles.backButton}>
            <FontAwesome style={styles.backButtonText} name="chevron-left" size={24} color="white" />
            <FontAwesome style={styles.backButtonText} name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        </View>

       <TouchableOpacity style={styles.mainCard}>
            <Image
                source={require('./assets/ketegori.png')}
                style={styles.categoryIcon}
            />
            <View style={styles.mainCardContent}>
                <Text style={styles.mainCardTitle}>KATEGORI ORMAWA</Text>
                <Text style={styles.mainCardSubtitle}>
                Dapatkan Informasi Seputar Organisasi Mahasiswa Disini
                </Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard}>
          <Image
            source={require('./assets/Universitas.png')}
            style={styles.universityIcon}
          />
          <Text style={styles.categoryTitle}>UNIVERSITAS</Text>
          <Text style={styles.categorySubtitle}>
            Cari organisasi mahasiswa tingkat Universitas disini!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard}>
          <Image
            source={require('./assets/Fakultas.png')}
            style={styles.facultyIcon}
          />
          <Text style={styles.categoryTitle}>FAKULTAS</Text>
          <Text style={styles.categorySubtitle}>
            Dapatkan Informasi Seputar Organisasi Mahasiswa Disini
          </Text>
        </TouchableOpacity>


        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <FontAwesome name="home" size={30} color="#3b82f6" />
            <Text style={[styles.tabText, styles.activeTabText]}>Beranda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
            <FontAwesome name="th-large" size={30} color="#6b7280" />
            <Text style={styles.tabText}>Kategori</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <FontAwesome name="book" size={30} color="#6b7280" />
            <Text style={styles.tabText}>Info Pendaftaran</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <FontAwesome name="envelope" size={30} color="#6b7280" />
            <Text style={styles.tabText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <FontAwesome name="user" size={30} color="#6b7280" />
            <Text style={styles.tabText}>Akun</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#E6EEF8",
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    height: 311,
    backgroundColor: "#3470A2",
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    marginBottom: 20,
  },
  headerLeft: {
    top: -100,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "rgba(150, 181, 207, 0.75)",
    borderRadius: 5,
  },
  ormawaIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    top: -100,
    padding: 8,
    flexDirection: "row",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  mainCard: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#225580",
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 160, 
    alignItems: "center",
    borderRadius: 20,
    elevation: 4,
    zIndex: 999,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
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
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: "center",
    borderRadius: 20,
  },
  universityIcon: {
    width: 60,
    height: 60,
    marginBottom: 16,
  },
  facultyIcon: {
    width: 60,
    height: 60,
    marginBottom: 16,
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
  tabBar: {
    bottom: -37,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  tabItem: {
    alignItems: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  tabText: {
    fontSize: 10,
    color: "#8C8994",
  },
  activeTab: {
    // Add styles for the active tab if needed
  },
  activeTabText: {
    color: "#FFC727",
  },
};
