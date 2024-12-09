import React from "react"; 
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; // Import Stack Navigator
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeProvider } from "./ThemeContext";

// Import semua layar

import Beranda from "./Beranda";
import KategoriOrmawa from "./KategoriOrmawa";
import ListOrmawaUniversitas from "./ListOrmawaUniversitas"; // Import layar tambahan
import ListOrmawaFakultas from "./ListOrmawaFakultas";
import FAQ from './FAQ';
import Informasi from "./Informasi";
import Galeri from "./Galeri";
import SplashScreen from "./SplashScreen";
import Notifikasi from "./notifikasi";
import Login from './LOGIN'; 
import Register from './REGISTER';

// Import layar PSOU (PSOU1, PSOU2, dll)
import PSOU1 from './PROFIL_SINGKAT_ORMAWA/PSOU1';
import PSOU2 from './PROFIL_SINGKAT_ORMAWA/PSOU2';
import PSOU3 from './PROFIL_SINGKAT_ORMAWA/PSOU3';
import PSOU4 from './PROFIL_SINGKAT_ORMAWA/PSOU4';
import PSOU5 from './PROFIL_SINGKAT_ORMAWA/PSOU5';
import PSOU6 from './PROFIL_SINGKAT_ORMAWA/PSOU6';
import PSOU7 from './PROFIL_SINGKAT_ORMAWA/PSOU7';
import PSOU8 from './PROFIL_SINGKAT_ORMAWA/PSOU8';

// Import layar PSOU (PSOU1, PSOU2, dll)
import PSOF1 from './PROFIL_SINGKAT_ORMAWA/PSOF1';
import PSOF2 from './PROFIL_SINGKAT_ORMAWA/PSOF2';
import PSOF3 from './PROFIL_SINGKAT_ORMAWA/PSOF3';
import PSOF4 from './PROFIL_SINGKAT_ORMAWA/PSOF4';
import PSOF5 from './PROFIL_SINGKAT_ORMAWA/PSOF5';
import PSOF6 from './PROFIL_SINGKAT_ORMAWA/PSOF6';
import PSOF7 from './PROFIL_SINGKAT_ORMAWA/PSOF7';
import PSOF8 from './PROFIL_SINGKAT_ORMAWA/PSOF8';
import PSOF9 from './PROFIL_SINGKAT_ORMAWA/PSOF9';
import PSOF10 from './PROFIL_SINGKAT_ORMAWA/PSOF10';
import Profil from "./Profil";


import InfoUniversitas from './InfoUniversitas'; // Import layar InfoUniversitas
import InfoFakultas from "./InfoFakultas";


// Stack Navigator for Kategori Ormawa
const KategoriStack = createStackNavigator();

function KategoriOrmawaStack() {
  return (
    <KategoriStack.Navigator screenOptions={{ headerShown: false }}>
      <KategoriStack.Screen name="KategoriOrmawa" component={KategoriOrmawa} />
      <KategoriStack.Screen
        name="ListOrmawaUniversitas"
        component={ListOrmawaUniversitas}
      />
      {/* Daftarkan setiap screen PSOU (PSOU1, PSOU2, dll) */}
      <KategoriStack.Screen name="PSOU1" component={PSOU1} />
      <KategoriStack.Screen name="PSOU2" component={PSOU2} />
      <KategoriStack.Screen name="PSOU3" component={PSOU3} />
      <KategoriStack.Screen name="PSOU4" component={PSOU4} />
      <KategoriStack.Screen name="PSOU5" component={PSOU5} />
      <KategoriStack.Screen name="PSOU6" component={PSOU6} />
      <KategoriStack.Screen name="PSOU7" component={PSOU7} />
      <KategoriStack.Screen name="PSOU8" component={PSOU8} />

      <KategoriStack.Screen
        name="ListOrmawaFakultas"
        component={ListOrmawaFakultas}
      />
      {/* Daftarkan setiap screen PSOU (PSOU1, PSOU2, dll) */}
      <KategoriStack.Screen name="PSOF1" component={PSOF1} />
      <KategoriStack.Screen name="PSOF2" component={PSOF2} />
      <KategoriStack.Screen name="PSOF3" component={PSOF3} />
      <KategoriStack.Screen name="PSOF4" component={PSOF4} />
      <KategoriStack.Screen name="PSOF5" component={PSOF5} />
      <KategoriStack.Screen name="PSOF6" component={PSOF6} />
      <KategoriStack.Screen name="PSOF7" component={PSOF7} />
      <KategoriStack.Screen name="PSOF8" component={PSOF8} />
      <KategoriStack.Screen name="PSOF9" component={PSOF9} />
      <KategoriStack.Screen name="PSOF10" component={PSOF10} />

    </KategoriStack.Navigator>
  );
}

const InformasiStack = createStackNavigator();

function InformasiStackNavigator() {
  return (
    <InformasiStack.Navigator screenOptions={{ headerShown: false }}>
      <InformasiStack.Screen name="Informasi" component={Informasi} />
      <InformasiStack.Screen name="InfoUniversitas" component={InfoUniversitas} />
      <InformasiStack.Screen name="InfoFakultas" component={InfoFakultas} />
    </InformasiStack.Navigator>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Beranda") {
          iconName = "home-outline";
        } else if (route.name === "Kategori Ormawa") {
          iconName = "grid-outline";
        } else if (route.name === "Informasi") {
          iconName = "information-circle-outline";
        } else if (route.name === "Galeri") {
          iconName = "image-outline";
        } else if (route.name === "FAQ") {
          iconName = "help-circle-outline";
        } else if (route.name === "Akun") {
          iconName = "person-outline";
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#FFC727",
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    })}
  >
    <Tab.Screen name="Beranda" component={Beranda} />
    <Tab.Screen name="Kategori Ormawa" component={KategoriOrmawaStack} />
    <Tab.Screen name="Informasi" component={InformasiStackNavigator} />
    <Tab.Screen name="Galeri" component={Galeri} />
    <Tab.Screen name="FAQ" component={FAQ} />
    <Tab.Screen name="Akun" component={Profil} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainApp" component={MainTabNavigator} />
        <Stack.Screen name="Notifikasi" component={Notifikasi} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}
