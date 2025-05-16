import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const dicas = [
  {
    id: 1,
    titulo: "Como adaptar um pet ao novo lar",
    conteudo:
      "Ofereça um ambiente calmo e seguro, respeite o tempo de adaptação do animal e ofereça muito carinho e paciência.",
  },
  {
    id: 2,
    titulo: "A importância da castração",
    conteudo:
      "A castração evita doenças, reduz a superpopulação e melhora o comportamento dos pets.",
  },
  {
    id: 3,
    titulo: "Cuidados básicos com cães e gatos",
    conteudo:
      "Vacinação, alimentação adequada, passeios diários e muito amor são essenciais para uma vida saudável.",
  },
]

export default function BlogTips({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dicas e Informações</Text>
        <Text style={styles.subtitle}>Aprenda mais sobre como cuidar bem dos animais</Text>
      </View>

      {dicas.map((dica) => (
        <View key={dica.id} style={styles.card}>
          <LinearGradient colors={["#fff5eb", "#fff"]} style={styles.cardInner}>
            <Text style={styles.cardTitle}>{dica.titulo}</Text>
            <Text style={styles.cardContent}>{dica.conteudo}</Text>
          </LinearGradient>
        </View>
      ))}

      {/* Botão Voltar */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <LinearGradient colors={["#ff8c00", "#ff6b00"]} style={styles.buttonGradient}>
          <Text style={styles.buttonText}>Voltar</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
    backgroundColor: "#ff7b00",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  card: {
    margin: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    backgroundColor: "#fff",
  },
  cardInner: {
    padding: 20,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff7b00",
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
  button: {
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 25,
    overflow: "hidden",
    alignSelf: "center",
  },
  buttonGradient: {
    paddingVertical: 14,
    paddingHorizontal: 36,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
})
