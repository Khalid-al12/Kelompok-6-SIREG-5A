import React from "react";
import { SafeAreaView, View, ScrollView, ImageBackground, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'; 

export default (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          borderRadius: 32,
          shadowColor: "#00000040",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 4,
          elevation: 4,
        }}
      >
        <View style={{ backgroundColor: "#3470A2" }}>
          <View            
            style={{
              height: 900,
              paddingTop: 21,
              paddingBottom: 191,
              paddingRight: 18,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 69,
                marginLeft: 28,
              }}
            >
              <View
                style={{
                  width: 100,
                  backgroundColor: "#D9D9D980",
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingLeft: 35,
                  paddingRight: 14,
                  marginRight: 225,
                }}
              >
                
                <Text style={{ color: "#FFFFFF", fontSize: 18 }}>FAQ</Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 35,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderColor: "#FFFFFF",
                  borderWidth: 1,
                  paddingVertical: 9,
                  paddingHorizontal: 8,
                }}
                onPress={() => console.log('FAQ Tapped')} 
              >
                <Icon name="chevron-back-outline" size={18} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                paddingVertical: 12,
                paddingHorizontal: 14,
                marginBottom: 81,
                marginLeft: 20,
              }}
            >
              <Text style={{ color: "#222222", fontSize: 18, width: 332 }}>
                {"Apakah wajib mengikuti organisasi\nbagi mahasiswa?"}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                paddingVertical: 21,
                paddingHorizontal: 19,
                marginLeft: 24,
              }}
            >
              <Text style={{ color: "#222222", fontSize: 12, width: 318 }}>
                {"Tidak, tidak ada ketentuan yang secara resmi mewajibkan\nmahasiswa untuk mengikuti organisasi.\n\nNamun, banyak universitas mendorong partisipasi\nmahasiswa dalam organisasi untuk memperluas\npengalaman di luar kelas.\n\nKeikutsertaan dalam organisasi sering dianggap sebagai\nbagian integral dari pengalaman mahasiswa di perguruan\ntinggi, meskipun bukan suatu kewajiban. "}
              </Text>
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              height: 60,
              backgroundColor: "#FFFFFF",
              borderTopWidth: 1,
              borderColor: "#D9D9D9",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => console.log('Beranda Pressed')}
            >
              <Icon name="home-outline" size={24} />
              <Text style={{ fontSize: 12 }}>Beranda</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => console.log('Kategori Pressed')}
            >
              <Icon name="grid-outline" size={24} />
              <Text style={{ fontSize: 12 }}>Kategori</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => console.log('Informasi Pressed')}
            >
              <Icon name="information-circle-outline" size={24} />
              <Text style={{ fontSize: 12 }}>Informasi</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => console.log('FAQ Pressed')}
            >
              <Icon name="help-circle-outline" size={24} />
              <Text style={{ fontSize: 12 }}>FAQ</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => console.log('Akun Pressed')}
            >
              <Icon name="person-outline" size={24} />
              <Text style={{ fontSize: 12 }}>Akun</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
