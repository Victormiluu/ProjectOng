import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function AdoteConoscoScreen({ navigation }: any) {
  const animais = [
    {
      id: 1,
      nome: "Luna",
      raca: "Vira-lata",
      idade: "2 anos",
      descricao: "Luna é uma cachorrinha dócil e brincalhona que adora crianças. Ela está vacinada e castrada, pronta para encontrar um lar amoroso.",
      imagem: require("../assets/images/adote_photo.jpg"),
    },
    {
      id: 2,
      nome: "Thor",
      raca: "Labrador",
      idade: "1 ano",
      descricao: "Thor é um filhote energético e muito carinhoso. Ele adora brincar e está sempre pronto para novas aventuras.",
      imagem: require("../assets/images/adote_photo.jpg"),
    },
    {
      id: 3,
      nome: "Mia",
      raca: "Siamês",
      idade: "3 anos",
      descricao: "Mia é uma gatinha tranquila e independente. Ela está castrada e gosta de ambientes calmos.",
      imagem: require("../assets/images/adote_photo.jpg"),
    },
    {
      id: 4,
      nome: "Bob",
      raca: "Golden Retriever",
      idade: "4 anos",
      descricao: "Bob é um cachorro muito dócil e obediente. Ele se dá bem com outros animais e está pronto para fazer parte da sua família.",
      imagem: require("../assets/images/adote_photo.jpg"),
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Adote Conosco</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Animais para Adoção</Text>
          <Text style={styles.heroSubtitle}>
            Conheça nossos amiguinhos que estão à procura de um lar cheio de amor e carinho
          </Text>
        </View>

        <View style={styles.animaisContainer}>
          {animais.map((animal, index) => (
            <TouchableOpacity
              key={animal.id}
              style={styles.animalCard}
              activeOpacity={0.9}
            >
              <View style={styles.polaroidCard}>
                <Image source={animal.imagem} style={styles.animalImage} />
                <View style={styles.animalInfo}>
                  <Text style={styles.animalNome}>{animal.nome}</Text>
                  <Text style={styles.animalDetalhes}>{animal.raca} • {animal.idade}</Text>
                  <Text style={styles.animalDescricao}>{animal.descricao}</Text>
                  <TouchableOpacity style={styles.adotarButton}>
                    <LinearGradient colors={["#ff8c00", "#ff6b00"]} style={styles.buttonGradient}>
                      <Text style={styles.adotarButtonText}>Quero Adotar</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.subscribeSection}>
          <Text style={styles.subscribeTitle}>Não encontrou o que procura?</Text>
          <Text style={styles.subscribeText}>
            Receba notificações quando novos animais estiverem disponíveis para adoção.
          </Text>
          <TouchableOpacity style={styles.subscribeButton}>
            <LinearGradient colors={["#ff8c00", "#ff6b00"]} style={styles.buttonGradient}>
              <Text style={styles.subscribeButtonText}>Receber Notificações</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
    justifyContent: "space-between",
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
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: "#ff7b00",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff7b00",
  },
  placeholder: {
    width: 20,
  },
  heroSection: {
    padding: 20,
    backgroundColor: "#fff5eb",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff7b00",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  animaisContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  animalCard: {
    width: "48%",
    marginBottom: 16,
  },
  polaroidCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    overflow: 'hidden',
  },
  animalImage: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  animalInfo: {
    padding: 12,
  },
  animalNome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff7b00",
    marginBottom: 4,
  },
  animalDetalhes: {
    fontSize: 13,
    color: "#777",
    marginBottom: 8,
  },
  animalDescricao: {
    fontSize: 13,
    lineHeight: 18,
    color: "#444",
    marginBottom: 12,
  },
  adotarButton: {
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "center",
  },
  buttonGradient: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  adotarButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
  subscribeSection: {
    margin: 16,
    padding: 20,
    backgroundColor: "#fff5eb",
    borderRadius: 16,
    alignItems: "center",
  },
  subscribeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff7b00",
    marginBottom: 10,
  },
  subscribeText: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 22,
  },
  subscribeButton: {
    borderRadius: 25,
    overflow: "hidden",
  },
  subscribeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
})