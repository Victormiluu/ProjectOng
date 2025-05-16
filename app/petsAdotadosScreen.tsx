import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function PetsAdotadosScreen({ navigation }: any) {
  const petsAdotados = [
    {
      id: 1,
      nome: 'Mel',
      raca: 'SRD',
      idade: '2 anos',
      descricao: 'Mel foi adotada por uma família cheia de amor em março de 2024.',
      imagem: require('../assets/images/adotado_one.jpg'),
    },
    {
      id: 2,
      nome: 'Tigrão',
      raca: 'Poodle',
      idade: '3 anos',
      descricao: 'Tigrão encontrou um novo lar com crianças que o adoram.',
      imagem: require('../assets/images/adotado_two.jpg'),
    },
    {
      id: 3,
      nome: 'Nina',
      raca: 'Gatinha Persa',
      idade: '1 ano',
      descricao: 'Hoje, Nina é a rainha do sofá de sua nova tutora!',
      imagem: require('../assets/images/adotado_three.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pets Adotados</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Histórias com Final Feliz</Text>
          <Text style={styles.heroSubtitle}>
            Conheça alguns dos nossos queridos amigos que já foram adotados!
          </Text>
        </View>

        <View style={styles.petsContainer}>
          {petsAdotados.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <Image source={pet.imagem} style={styles.petImage} />
              <View style={styles.petInfo}>
                <Text style={styles.petName}>{pet.nome}</Text>
                <Text style={styles.petDetails}>{pet.raca} • {pet.idade}</Text>
                <Text style={styles.petDescricao}>{pet.descricao}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    elevation: 3,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: '#ff7b00',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff7b00',
  },
  placeholder: {
    width: 20,
  },
  heroSection: {
    padding: 20,
    backgroundColor: '#fff5eb',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff7b00',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  petsContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  petCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  petImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  petInfo: {
    padding: 12,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff7b00',
    marginBottom: 4,
  },
  petDetails: {
    fontSize: 13,
    color: '#777',
    marginBottom: 8,
  },
  petDescricao: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});
