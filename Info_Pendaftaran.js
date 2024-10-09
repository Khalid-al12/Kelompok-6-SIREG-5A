import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';

const RegistrationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Informasi Pendaftaran */}
        <View style={styles.card}>
          <Text style={styles.title}>Pendaftaran</Text>
          <TouchableOpacity style={styles.oramawaButton}>
            <Text style={styles.oramawaText}>ORMAWA UNIVERSITAS</Text>
            <Text>Dapatkan Informasi Pendaftaran Ormawa Universitas Disini</Text>
          </TouchableOpacity>
        </View>

        {/* BPH BEM UNSRI */}
        <View style={styles.card}>
          <View style={styles.header}>
            <Image 
              style={styles.logo}
              source={{uri: 'https://example.com/bem-logo.png'}} // ganti dengan URL logo BEM
            />
            <Text style={styles.organization}>BPH BEM UNSRI</Text>
          </View>
          <Icon name="file-text" size={100} color="#ffffff" style={styles.iconCenter} />
          <Text style={styles.info}>Informasi Pendaftaran :</Text>
          <Text style={styles.dates}>Tanggal Pendaftaran 1-5 Mei 2024</Text>
          <Text style={styles.contact}>Narahubung : 08********21 (Ayu)</Text>
        </View>

        {/* STAFF BELISARIO */}
        <View style={styles.card}>
          <View style={styles.header}>
            <Image 
              style={styles.logo}
              source={{uri: 'https://example.com/belisario-logo.png'}} // ganti dengan URL logo Belisario
            />
            <Text style={styles.organization}>STAFF BELISARIO</Text>
          </View>
          <Icon name="file-text" size={100} color="#ffffff" style={styles.iconCenter} />
          <Text style={styles.info}>Informasi Pendaftaran :</Text>
          <Text style={styles.dates}>Tanggal Pendaftaran 14 -28 Mei 2024</Text>
          <Text style={styles.contact}>Narahubung : 08********14 (Sandu)</Text>
        </View>

        {/* STAFF U-READ */}
        <View style={styles.card}>
          <View style={styles.header}>
            <Image 
              style={styles.logo}
              source={{uri: 'https://example.com/u-read-logo.png'}} // ganti dengan URL logo U-Read
            />
            <Text style={styles.organization}>STAFF U-READ</Text>
          </View>
          <Icon name="file-text" size={100} color="#ffffff" style={styles.iconCenter} />
          <Text style={styles.info}>Informasi Pendaftaran :</Text>
          <Text style={styles.dates}>Tanggal Pendaftaran 24 Mei - 7 Juni 2024</Text>
          <Text style={styles.contact}>Narahubung : 08********44 (Maya)</Text>
        </View>
      </ScrollView>

      {/* Footer Tetap di Bawah */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <FontAwesome name="home" size={24} color="gray" />
          <Text style={styles.footerText}>Beranda</Text>
        </View>
        <View style={styles.footerItem}>
          <FontAwesome name="th-large" size={24} color="orange" />
          <Text style={[styles.footerText, { color: 'orange' }]}>Lainnya</Text>
        </View>
        <View style={styles.footerItem}>
          <FontAwesome name="book" size={24} color="gray" />
          <Text style={styles.footerText}>Akademik</Text>
        </View>
        <View style={styles.footerItem}>
          <FontAwesome name="envelope" size={24} color="gray" />
          <Text style={styles.footerText}>Pesan</Text>
        </View>
        <View style={styles.footerItem}>
          <FontAwesome name="user" size={24} color="gray" />
          <Text style={styles.footerText}>Akun</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    paddingBottom: 100, // Supaya ada ruang di atas footer
  },

  card: {
    backgroundColor: "#3470A2",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  oramawaButton: {
    backgroundColor: '#E0EFFF',
    padding: 10,
    borderRadius: 5,
  },
  oramawaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003399',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 50,
  },
  organization: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  info: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color : '#ffffff'
  },
  dates: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 5,
  },
  contact: {
    fontSize: 10,
    color: '#ffffff',
    marginTop: 5,
  },
  iconCenter: {
    alignSelf: 'center', // Menempatkan icon di tengah
    marginVertical: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: 'gray',
    fontSize: 12,
  },
});

export default RegistrationScreen;
