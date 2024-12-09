import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import { useTheme } from "./ThemeContext"; // Import ThemeContext
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";

export default function Profil() {
  const { isDarkMode, toggleTheme } = useTheme(); // Akses state global
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null); // URL foto profil

  useEffect(() => {
    const loadProfileData = async () => {
      const storedName = await AsyncStorage.getItem("userName");
      const storedPhoto = await AsyncStorage.getItem("userPhoto");

      if (storedName) setName(storedName);
      if (storedPhoto) setPhoto(storedPhoto);
    };

    loadProfileData();
  }, []);

  const handleSaveProfile = async () => {
    await AsyncStorage.setItem("userName", name);
    await AsyncStorage.setItem("userPhoto", photo || "");
    alert("Profil berhasil disimpan!");
  };

  return (
    <SafeAreaView style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <ScrollView contentContainerStyle={[styles.content, { marginTop: 50 }]}>
        {/* Foto Profil */}
        <TouchableOpacity onPress={() => alert("Fitur upload foto belum tersedia")}>
          <Image
            source={
              photo
                ? { uri: photo }
                : require("./assets/default-profile.png") // Gambar default
            }
            style={styles.profilePhoto}
          />
        </TouchableOpacity>
        <Text style={isDarkMode ? styles.darkText : styles.lightText}>
          {photo ? "Ubah Foto Profil" : "Tambahkan Foto Profil"}
        </Text>

        {/* Nama Akun */}
        <Text style={isDarkMode ? styles.darkText : styles.lightText}>Nama Akun</Text>
        <TextInput
          placeholder="Masukkan Nama Anda"
          value={name}
          onChangeText={setName}
          style={[
            styles.input,
            {
              backgroundColor: isDarkMode ? "#333" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
            },
          ]}
        />

        {/* Email Akun */}
        <Text style={isDarkMode ? styles.darkText : styles.lightText}>Email Akun</Text>
        <Text style={styles.email}>
          {currentUser ? currentUser.email : "Email tidak ditemukan"}
        </Text>

        {/* Dark Mode / Light Mode */}
        <View style={styles.themeToggle}>
          <Text style={isDarkMode ? styles.darkText : styles.lightText}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>

        {/* Tombol Simpan */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
          <Text style={styles.saveButtonText}>Simpan Profil</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
    color: "#888",
  },
  themeToggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#3470A2",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  lightText: {
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
});
