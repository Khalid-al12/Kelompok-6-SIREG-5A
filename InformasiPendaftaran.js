import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/EI4fiysUPd1uXCRKPOFZiORF9Jm8qnuH1KcZ4AsMkizttYyJA.jpg' }}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Ormawa</Text>
        </View>
        <TouchableOpacity>
          <FontAwesome name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={[styles.card, { backgroundColor: '#2563eb' }]}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/TUGRbGW4v9KzA5UNtVX71TnmEH9y6FI9BtFQbffwVQLn5vkTA.jpg' }}
            style={styles.cardImage}
          />
          <View>
            <Text style={styles.cardTitle}>INFORMASI PENDAFTARAN</Text>
            <Text style={styles.cardText}>Dapatkan Informasi Pendaftaran Ormawa Disini</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/wa2UPa5GQSIbFFrZApjtykXMVTkSmw7Smyf51GzIWcq08XyJA.jpg' }}
            style={styles.cardImage}
          />
          <View>
            <Text style={styles.cardTitle}>UNIVERSITAS</Text>
            <Text style={styles.cardText}>Dapatkan Informasi Seputar Pendaftaran Ormawa Universitas</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/fMDIDiGTCNStRqYZZeEWcTKTFlLrbrrT1s7oZex4e30YmflcC.jpg' }}
            style={styles.cardImage}
          />
          <View>
            <Text style={styles.cardTitle}>FAKULTAS</Text>
            <Text style={styles.cardText}>Dapatkan Informasi Seputar Pendaftaran Ormawa Fakultas</Text>
          </View>
        </View>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3b82f6',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    marginLeft: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  titleText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    fontSize: 24,
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: 'white',
  },
  cardText: {
    fontSize: 14,
    color: 'white',
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