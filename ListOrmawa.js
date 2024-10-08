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
        <Text style={styles.headerText}>Profil Ormawa Universitas</Text>
        <TouchableOpacity style={styles.headerbackButton}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </View>

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
    backgroundColor: "#3470A2",
    paddingVertical: 50,
    paddingHorizontal: 33,
    alignItems: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerbackButton: {
    backgroundColor: '#93C5FD',
    padding: 8,
    borderRadius: 8,
    marginLeft: 250,
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