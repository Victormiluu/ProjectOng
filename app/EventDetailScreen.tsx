import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function EventDetailScreen({ route, navigation }: any) {
  const { event } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={event.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.detail}>📅 Data: {event.date}</Text>
        <Text style={styles.detail}>⏰ Horário: {event.time}</Text>
        <Text style={styles.detail}>📍 Local: {event.location}</Text>
        <Text style={styles.detail}>👤 Organizador: {event.organizer || "ONG Esperança"}</Text>
        <Text style={styles.detail}>📞 Contato: {event.contact || "(00) 91234-5678"}</Text>

        <Text style={styles.description}>
          {event.description}
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <LinearGradient colors={['#ff8c00', '#ff6b00']} style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Voltar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff7b00',
    marginBottom: 14,
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    color: '#444',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#555',
    marginTop: 20,
    lineHeight: 26,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    borderRadius: 25,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  buttonGradient: {
    paddingVertical: 14,
    paddingHorizontal: 36,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
