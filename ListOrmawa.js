import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function OrmawaScreen() {
  const ormawaData = [
    { name: "BEM Universitas Sriwijaya", desc: "Badan Eksekutif Mahasiswa", imageUri: "https://i.imgur.com/1tMFzp8.png" },
    { name: "LDK Nadwah Unsri", desc: "Lembaga Dakwah Kampus", imageUri: "https://i.imgur.com/1tMFzp8.png" },
    { name: "LPMGS Unsri", desc: "Lembaga Pers Mahasiswa Gelora Sriwijaya", imageUri: "https://i.imgur.com/1tMFzp8.png" },
    { name: "U-READ Unsri", desc: "Unsri Riset dan Edukasi", imageUri: "https://i.imgur.com/1tMFzp8.png" },
    { name: "HARMONI Unsri", desc: "Harmoni Unsri", imageUri: "https://i.imgur.com/1tMFzp8.png" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
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
          <View style={styles.elipse}></View>
        </View>

        <TouchableOpacity style={styles.mainCard}>
            <View style={styles.mainCardContent}>
                <Text style={styles.mainCardTitle}>ORMAWA UNIVERSITAS</Text>
            </View>
          </TouchableOpacity>


      {/* Ormawa List */}
      <ScrollView style={styles.scrollView}>
        {ormawaData.map((ormawa, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image source={{ uri: ormawa.imageUri }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{ormawa.name}</Text>
              <Text style={styles.desc}>{ormawa.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="home" size={20} color="#3b82f6" />
          <Text style={[styles.footerText, { color: '#3b82f6' }]}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="th-large" size={20} color="#6b7280" />
          <Text style={styles.footerText}>Lainnya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="book" size={20} color="#6b7280" />
          <Text style={styles.footerText}>Akademik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="envelope" size={20} color="#6b7280" />
          <Text style={styles.footerText}>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="user" size={20} color="#6b7280" />
          <Text style={styles.footerText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    height: 211,
    backgroundColor: "#3470A2",
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    marginBottom: 20,
    overflow: 'hidden',
  },
  headerLeft: {
    top: -50,
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
    top: -50,
    padding: 8,
    flexDirection: "row",
    zIndex: 99,
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  elipse: {
    left: 166,
    top: 34,
    right: -270,
    width: 494,
    height: 494,
    position: "absolute",
    borderRadius: 494,
    backgroundColor: "#63ABE6",
  },
  mainCard: {
    position: "absolute",
    flexDirection: "row",
    padding: 16,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 100, 
    alignItems: "center",
    zIndex: 999,
  },
  mainCardContent: {
    flex: 1,
  },
  mainCardTitle: {
    marginLeft: 55,
    alignContent: "center",
    position: "absolute",
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  main: {
    alignItems: 'center',
    padding: 10,
  },
 ollView: {
    flex: 1,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  card: {
    width: 346,
    height: 120,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginLeft: 22,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  desc: {
    fontSize: 12,
    color: "#6E6E6E",
    marginTop: 4,
  },
  footer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#6b7280',
  },
});
