import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function EventsScreen({ navigation }: any) {
  const events = [
    {
      id: 1,
      title: "Feira de Adoção",
      date: "15 de Maio, 2023",
      time: "10:00 - 16:00",
      location: "Praça Central, Taboão da Serra",
      description: "Venha conhecer nossos animais disponíveis para adoção e encontre seu novo melhor amigo! Teremos cães e gatos de várias idades esperando por um lar amoroso.",
      image: require("../assets/images/adote_photo.jpg"),
    },
    {
      id: 2,
      title: "Campanha de Vacinação",
      date: "22 de Maio, 2023",
      time: "09:00 - 15:00",
      location: "Sede da ONG, Taboão da Serra",
      description: "Campanha de vacinação gratuita para cães e gatos. Traga seu pet para receber vacinas essenciais e orientações veterinárias.",
      image: require("../assets/images/adote_photo.jpg"),
    },
    {
      id: 3,
      title: "Workshop de Cuidados com Pets",
      date: "5 de Junho, 2023",
      time: "14:00 - 17:00",
      location: "Centro Comunitário, Taboão da Serra",
      description: "Aprenda sobre cuidados básicos, alimentação adequada e primeiros socorros para seu animal de estimação com nossos veterinários voluntários.",
      image: require("../assets/images/adote_photo.jpg"),
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
        <Text style={styles.headerTitle}>Eventos</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Próximos Eventos</Text>
          <Text style={styles.heroSubtitle}>
            Participe de nossas atividades e ajude a fazer a diferença na vida dos animais
          </Text>
        </View>

        {events.map((event) => (
          <TouchableOpacity
            key={event.id}
            style={styles.eventCard}
            activeOpacity={0.9}
          >
            <View style={styles.cardInner}>
              <Image source={event.image} style={styles.eventImage} />
              <View style={styles.eventContent}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <View style={styles.eventDetails}>
                  <Text style={styles.eventDate}>📅 {event.date}</Text>
                  <Text style={styles.eventTime}>⏰ {event.time}</Text>
                  <Text style={styles.eventLocation}>📍 {event.location}</Text>
                </View>
                <Text style={styles.eventDescription}>{event.description}</Text>
                <TouchableOpacity
                  style={styles.eventButton}
                  onPress={() => navigation.navigate("EventDetail", { event })}
                >
                  <LinearGradient colors={["#ff8c00", "#ff6b00"]} style={styles.buttonGradient}>
                    <Text style={styles.eventButtonText}>Participar</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.subscribeSection}>
          <Text style={styles.subscribeTitle}>Fique por dentro!</Text>
          <Text style={styles.subscribeText}>
            Siga nossas redes sociais para receber atualizações sobre eventos futuros e outras atividades da ONG.
          </Text>
          <TouchableOpacity style={styles.subscribeButton}>
            <LinearGradient colors={["#ff8c00", "#ff6b00"]} style={styles.buttonGradient}>
              <Text style={styles.subscribeButtonText}>Seguir nas Redes</Text>
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
  eventCard: {
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
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
    overflow: 'hidden'
  },
  cardInner: {
    borderRadius: 16,
    overflow: 'hidden'
  },
  eventImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  eventContent: {
    padding: 16,
    backgroundColor: '#fff',
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff7b00",
    marginBottom: 10,
  },
  eventDetails: {
    marginBottom: 12,
  },
  eventDate: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  eventDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
    marginBottom: 16,
  },
  eventButton: {
    borderRadius: 25,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  buttonGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  eventButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
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