import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"

export default function VolunteerScreen({ navigation }: any) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    // Aqui você pode integrar com backend ou serviço de email
    Alert.alert("Obrigado!", "Seu formulário foi enviado com sucesso.")
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Voluntarias-se</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <Image source={require("../assets/images/adote_photo.jpg")} style={styles.logo} resizeMode="contain" />

        <Text style={styles.title}>Seja um Voluntário</Text>
        <Text style={styles.description}>
          Ao se voluntariar conosco, você se torna parte da transformação da vida de centenas de animais.
          Oferecemos oportunidades para atuar em eventos, cuidados com os animais, transporte, divulgação e muito mais.
        </Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#999"
          />
          <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor="#999"
          />
          <TextInput
            placeholder="Telefone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={styles.input}
            placeholderTextColor="#999"
          />
          <TextInput
            placeholder="Por que você quer ser voluntário?"
            value={message}
            onChangeText={setMessage}
            style={[styles.input, styles.textArea]}
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
            <LinearGradient colors={["#ff8c00", "#ff6b00"]} style={styles.button}>
              <Text style={styles.buttonText}>Enviar</Text>
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
  contentContainer: {
    padding: 24,
    paddingBottom: 40,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff7b00",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 24,
  },
  form: {
    width: "100%",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fdfdfd",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    borderRadius: 30,
    overflow: "hidden",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
})
