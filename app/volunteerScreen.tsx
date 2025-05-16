import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Collapsible } from '@/components/Collapsible';

export default function VolunteerScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Voluntariar-se</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.section}>
          <Text style={styles.title}>Ajude Nossa Causa</Text>
          <Text style={styles.subtitle}>
            Seja um voluntário e faça parte da transformação na vida de animais que precisam de cuidado e amor.
          </Text>
        </View>

        <Collapsible title="Quem pode ser voluntário?">
          <Text style={styles.collapsibleText}>• Pessoas com mais de 18 anos</Text>
          <Text style={styles.collapsibleText}>• Que amam animais</Text>
          <Text style={styles.collapsibleText}>• Que tenham tempo e vontade de ajudar</Text>
        </Collapsible>

        <Collapsible title="O que um voluntário faz?">
          <Text style={styles.collapsibleText}>• Auxilia em eventos de adoção</Text>
          <Text style={styles.collapsibleText}>• Ajuda na limpeza e alimentação dos animais</Text>
          <Text style={styles.collapsibleText}>• Divulga campanhas nas redes sociais</Text>
        </Collapsible>

        <Collapsible title="Preciso de experiência?">
          <Text style={styles.collapsibleText}>
            Não. Basta ter responsabilidade, empatia e vontade de contribuir.
          </Text>
        </Collapsible>

        <TouchableOpacity style={styles.buttonContainer}>
          <LinearGradient colors={['#ff8c00', '#ff6b00']} style={styles.button}>
            <Text style={styles.buttonText}>Quero Me Voluntariar</Text>
          </LinearGradient>
        </TouchableOpacity>
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
  section: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff7b00',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
  },
  collapsibleText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 6,
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 50,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
