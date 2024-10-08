import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>

          <Text style={styles.headerText}>Fitur Galeri</Text>
        </View>
        
      </View>
      <View style={styles.subHeader}>
      <FontAwesome name="arrow-left" size={25} color="white" />
      </View>
      <ScrollView>
        <View style={styles.gallery}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/4DhdlAgNkBpoLdnhIgOokdwZHgJV2HlVoMCI4Zd1LMdSAM5E.jpg' }}
            style={styles.galleryIcon}
          />
          <View style={styles.galleryText}>
            <Text style={styles.galleryTitle}>GALERI ORMAWA</Text>
            <Text style={styles.gallerySubtitle}>Lihat Foto Menarik Seputar Ormawa Disini</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/Su9gIskVT9a6MJTOsiwDbypPGkXOu0ijMb3H3qJdlO9RAM5E.jpg' }}
            style={styles.cardImage}
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>GERAKAN MAHASISWA</Text>
            <Text style={styles.cardSubtitle}>PEM UNIVERSITAS SRIWIJAYA 2023</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/eyBoNVGSrfsKG0VOcXfWQEy8tGK6514RadC9PNGhhrfYEATOB.jpg' }}
            style={styles.cardImage}
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>GERAKAN MEMBACA</Text>
          </View>
        </View>
      </ScrollView>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
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
    color: 'white',
    fontSize: 18,
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 8,
  },
  subHeader: {
    backgroundColor: '#2563eb',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gallery: {
    backgroundColor: '#1e40af',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  galleryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  galleryText: {
    marginLeft: 16,
  },
  galleryTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gallerySubtitle: {
    color: 'white',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 16,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardText: {
    padding: 16,
  },
  cardTitle: {
    color: '#f59e0b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#4b5563',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: 'gray',
    fontSize: 12,
  },
});