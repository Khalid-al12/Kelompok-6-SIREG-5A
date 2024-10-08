import React from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package

const FAQScreen = () => {
  const faqItems = [
    "Apa manfaat mengikuti Ormawa di kampus?",
    "Apa perbedaan organisasi mahasiswa tingkat universitas dan tingkat fakultas?",
    "Apakah organisasi mahasiswa dapat mengganggu kegiatan belajar?",
    "Apakah boleh seorang mahasiswa tidak mengikuti organisasi mahasiswa?",
    "Apakah wajib mengikuti organisasi bagi mahasiswa?"
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <View style={styles.logoContainer}>
          {/* Replace with actual logo */}
          <View style={styles.logo} />
        </View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>FAQ</Text>
          <Text style={styles.subtitleText}>Pertanyaan seputar Ormawa</Text>
        </View>
      </View>

      <ScrollView style={styles.faqContainer}>
        {faqItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.faqItem}>
            <Text style={styles.faqText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#8C8994" />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Icon name="more-horiz" size={24} color="#FFC727" />
          <Text style={[styles.navText, styles.activeNavText]}>Lainnya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="school" size={24} color="#8C8994" />
          <Text style={styles.navText}>Akademik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="message" size={24} color="#8C8994" />
          <Text style={styles.navText}>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#8C8994" />
          <Text style={styles.navText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3478F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    padding: 8,
  },
  headerStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 17,
    marginRight: 8,
  },
  batteryWifi: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryText: {
    color: '#FFFFFF',
    fontSize: 11,
    marginLeft: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginRight: 15,
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  titleTextContainer: {},
  titleText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  faqContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  faqItem: {
    backgroundColor: '#3478F6',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  faqText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  activeNavItem: {},
  navText: {
    fontSize: 10,
    color: '#8C8994',
    marginTop: 4,
  },
  activeNavText: {
    color: '#FFC727',
  },
});

export default FAQScreen;