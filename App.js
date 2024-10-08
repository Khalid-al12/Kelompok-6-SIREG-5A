import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const FAQScreen = () => {
  const faqItems = [
    'Apa manfaat mengikuti Ormawa di kampus?',
    'Apa persyaratan mengikuti pendaftaran tingkat universitas dan tingkat fakultas?',
    'Apakah organisasi mahasiswa dapat menggunggah kegiatan disini?',
    'Apakah butuh seorang mahasiswa tidak mengikuti organisasi mahasiswa?',
    'Apakah wajib mengikuti organisasi bagi mahasiswa?',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.iconContainer}>
            <Text style={styles.ormawa}>Ormawa</Text>
          </View>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>{"<"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FAQ Title Card */}
      <View style={styles.faqTitleCard}>
        <View style={styles.faqIconContainer}>
          <Text style={styles.faqIcon}>?</Text>
        </View>
        <View style={styles.faqTextContainer}>
          <Text style={styles.faqTitle}>FAQ</Text>
          <Text style={styles.faqSubtitle}>Pertanyaan Seputar Ormawa</Text>
        </View>
      </View>

      {/* FAQ List */}
      <View style={styles.faqList}>
        {faqItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.faqItem}>
            <Text style={styles.faqItemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>Akademik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>Akun</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  header: {
    backgroundColor: '#1E88E5',
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  iconContainer: {
    padding: 8,
  },
  ormawa: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
  },
  faqTitleCard: {
    backgroundColor: '#1565C0',
    margin: 16,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  faqIconContainer: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  faqIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  faqTextContainer: {
    flex: 1,
  },
  faqTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  faqSubtitle: {
    color: 'white',
    fontSize: 14,
  },
  faqList: {
    paddingHorizontal: 16,
  },
  faqItem: {
    backgroundColor: '#1565C0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  faqItemText: {
    color: 'white',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default FAQScreen;