import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const RegistrationScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Informasi Pendaftaran */}
      <View style={styles.card}>
        <Text style={styles.title}> Pendaftaran</Text>
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
        <Text style={styles.info}>Informasi Pendaftaran :</Text>
        <Text style={styles.dates}>Tanggal Pendaftaran 14-28 Mei 2024</Text>
        <Text style={styles.contact}>Narahubung : 08********14 (Sandu)</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.header}>
          <Image 
            style={styles.logo}
            source={{uri: 'https://example.com/belisario-logo.png'}} // ganti dengan URL logo Belisario
          />
          
          <Text style={styles.organization}>STAFF U-READ</Text>
        </View>
        <Text style={styles.info}>Informasi Pendaftaran :</Text>
        <Text style={styles.dates}>Tanggal Pendaftaran 24 Mei - 7 Juni 2024</Text>
        <Text style={styles.contact}>Narahubung : 08********44 (Maya)</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  card: {
    backgroundColor: 'white',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
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
    marginBottom: 10,
  },
  logo: {
    
    width: 50,
    height: 50,
    marginRight: 10,
  },
  organization: {
    fontSize: 18,

    fontWeight: 'bold',
    color: '#333',
  },
  info: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  dates: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  contact: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default RegistrationScreen;