import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  StatusBar,
  Animated,
  Dimensions,
  BackHandler,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useRef, useEffect } from "react"
import { Platform } from "react-native"
const { width } = Dimensions.get("window")
const DRAWER_WIDTH = width * 0.7

export default function AnimalShelterScreen({ navigation }: any) {
  const [menuVisible, setMenuVisible] = useState(false)
  const slideAnim = useRef(new Animated.Value(DRAWER_WIDTH)).current
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const backAction = () => {
      if (menuVisible) {
        closeDrawer()
        return true
      }
      return false
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

    return () => backHandler.remove()
  }, [menuVisible])

  const openDrawer = () => {
    setMenuVisible(true)
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: DRAWER_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setMenuVisible(false)
    })
  }

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Error opening link:", err))
  }

const navigateTo = (screen: string) => {
  closeDrawer();
  if (navigation) { 
    navigation.navigate(screen);
  } else {
    console.error("Navigation prop is undefined");
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header with Menu Button */}
      <View style={styles.header}>
        <Image source={require("../assets/images/adote_photo.jpg")} style={styles.headerLogo} resizeMode="contain" />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerOrgName}>Adote Taboão da Serra</Text>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={openDrawer}>
          <View style={styles.menuIcon}>
            <View style={styles.menuLine}></View>
            <View style={styles.menuLine}></View>
            <View style={styles.menuLine}></View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Drawer Navigation */}
      {menuVisible && (
       <View style={[StyleSheet.absoluteFill, styles.drawerWrapper]}>
          <Animated.View style={[styles.modalOverlay, { opacity: fadeAnim }]}>
            <TouchableOpacity style={StyleSheet.absoluteFill} activeOpacity={1} onPress={closeDrawer} />
          </Animated.View>

          <Animated.View style={[styles.drawerContainer, { transform: [{ translateX: slideAnim }] }]}>
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>Menu</Text>
              <TouchableOpacity onPress={closeDrawer}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.menuItems}>
              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo("Home")}>
                <Text style={styles.menuItemText}>Página Inicial</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo("Adote")}>
                <Text style={styles.menuItemText}>Adote Conosco</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo("Volunteer")}>
                <Text style={styles.menuItemText}>Voluntariar-se</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo("Events")}>
                <Text style={styles.menuItemText}>Eventos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo("Adotados")}>
  <Text style={styles.menuItemText}>Pets Adotados</Text>
</TouchableOpacity>

            </View>
          </Animated.View>
        </View>
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.modernSection}>
          <View style={styles.sectionIconContainer}>
            <View style={styles.sectionIcon}>
              <Text style={styles.sectionIconText}>🏠</Text>
            </View>
          </View>
          <Text style={styles.modernSectionTitle}>Sobre Nossa ONG</Text>
          <Text style={styles.modernSectionText}>
            Nossa organização sem fins lucrativos é dedicada ao resgate, cuidado e adoção de animais desabrigados.
            Trabalhamos incansavelmente para proporcionar abrigo, alimentação, cuidados veterinários e muito amor para
            cães e gatos abandonados, enquanto buscamos lares permanentes e amorosos para eles.
          </Text>
        </View>

        <View style={[styles.modernSection, styles.altSection]}>
          <View style={styles.sectionIconContainer}>
            <View style={[styles.sectionIcon, styles.altSectionIcon]}>
              <Text style={styles.sectionIconText}>🎯</Text>
            </View>
          </View>
          <Text style={[styles.modernSectionTitle, styles.altSectionTitle]}>Nossa Missão</Text>
          <Text style={[styles.modernSectionText, styles.altSectionText]}>
            Resgatar, reabilitar e encontrar lares amorosos para animais abandonados e maltratados, além de educar a
            comunidade sobre a importância da adoção responsável e do bem-estar animal.
          </Text>
        </View>

        <View style={styles.modernSection}>
          <View style={styles.sectionIconContainer}>
            <View style={styles.sectionIcon}>
              <Text style={styles.sectionIconText}>❤️</Text>
            </View>
          </View>
          <Text style={styles.modernSectionTitle}>Doar para a Causa</Text>
          <Text style={styles.modernSectionText}>
            Sua doação ajuda a fornecer alimentos, abrigo, cuidados médicos e muito mais para os animais necessitados.
            Cada contribuição faz a diferença!
          </Text>

          <TouchableOpacity style={styles.modernDonateButton} onPress={() => openLink("https://example.com/donate")}>
            <LinearGradient colors={["#ff8c00", "#ff6b00"]} style={styles.donateGradient}>
              <Text style={styles.modernDonateButtonText}>Fazer uma Doação</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.bankInfoCard}>
            <Text style={styles.bankInfoTitle}>Transferência Bancária</Text>
            <View style={styles.bankInfoRow}>
              <Text style={styles.bankInfoLabel}>Banco:</Text>
              <Text style={styles.bankInfoValue}>Exemplo</Text>
            </View>
            <View style={styles.bankInfoRow}>
              <Text style={styles.bankInfoLabel}>Agência:</Text>
              <Text style={styles.bankInfoValue}>0000</Text>
            </View>
            <View style={styles.bankInfoRow}>
              <Text style={styles.bankInfoLabel}>Conta:</Text>
              <Text style={styles.bankInfoValue}>00000-0</Text>
            </View>
            <View style={styles.bankInfoRow}>
              <Text style={styles.bankInfoLabel}>CNPJ:</Text>
              <Text style={styles.bankInfoValue}>00.000.000/0001-00</Text>
            </View>
          </View>
        </View>

        <LinearGradient colors={["#ff8c00", "#ff6b00"]} style={styles.modernSocialSection}>
          <Text style={styles.modernSocialTitle}>Siga-nos nas Redes Sociais</Text>
          <View style={styles.modernSocialIcons}>
            <TouchableOpacity style={styles.modernSocialButton} onPress={() => openLink("https://wa.me/5500000000000")}>
              <Text style={styles.modernSocialButtonText}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modernSocialButton}
              onPress={() => openLink("https://facebook.com/Associação Adote")}
            >
              <Text style={styles.modernSocialButtonText}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modernSocialButton}
              onPress={() => openLink("https://instagram.com/adotetaboaodaserra")}
            >
              <Text style={styles.modernSocialButtonText}>Instagram</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 100,
  },
  headerLogo: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerOrgName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ff7b00",
    letterSpacing: 0.5,
  },
  headerOrgLocation: {
    fontSize: 14,
    color: "#666",
    letterSpacing: 0.3,
  },
  // Menu Button Styles
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    width: 24,
    height: 18,
    justifyContent: "space-between",
  },
  menuLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#ff7b00",
    borderRadius: 1,
  },
  // Drawer Menu Styles
  drawerWrapper: {
    zIndex: 9999,
    ...Platform.select({
      web: {
        position: 'fixed',
      },
    }),
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9998,
  },
  drawerContainer: {
    width: DRAWER_WIDTH,
    height: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 9999,
    ...Platform.select({
      web: {
        position: 'fixed',
      },
    }),
  },
  drawerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ff7b00",
  },
  closeButton: {
    fontSize: 22,
    color: "#666",
    padding: 5,
  },
  menuItems: {
    marginTop: 20, // Added space between header and menu items
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuItemText: {
    fontSize: 18, // Increased font size
    color: "#333",
    fontWeight: "500",
  },
  // Original styles
  logoContainer: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 10,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 12,
  },
  orgName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff7b00",
    textAlign: "center",
  },
  heroSection: {
    padding: 30,
    alignItems: "center",
    paddingTop: 30,
  },
  heroText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  heroDonateButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  heroDonateButtonText: {
    color: "#ff7b00",
    fontSize: 16,
    fontWeight: "bold",
  },
  modernSection: {
    padding: 24,
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  altSection: {
    backgroundColor: "#fff5eb",
  },
  sectionIconContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  sectionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff5eb",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#ff7b00",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  
  altSectionIcon: {
    backgroundColor: "#fff",
  },
  sectionIconText: {
    fontSize: 30,
  },
  modernSectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#ff7b00",
    textAlign: "center",
  },
  altSectionTitle: {
    color: "#ff7b00",
  },
  modernSectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    textAlign: "center",
  },
  altSectionText: {
    color: "#666",
  },
  modernDonateButton: {
    borderRadius: 30,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    overflow: "hidden",
  },
  donateGradient: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  modernDonateButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  bankInfoCard: {
    backgroundColor: "#fff5eb",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  bankInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff7b00",
    marginBottom: 12,
    textAlign: "center",
  },
  bankInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  bankInfoLabel: {
    fontSize: 15,
    color: "#666",
    fontWeight: "500",
  },
  bankInfoValue: {
    fontSize: 15,
    color: "#333",
    fontWeight: "600",
  },
  modernSocialSection: {
    padding: 30,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modernSocialTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  modernSocialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  modernSocialButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    minWidth: 100,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  modernSocialButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})
