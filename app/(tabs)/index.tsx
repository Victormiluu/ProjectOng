import { Image, StyleSheet, Platform } from 'react-native';

import { View,Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.containerStyle}>
      <Image
        source={require('@/assets/images/autism-logo.png')}
      />
      <Text style={styles.textHeaderStyle}>Welcome to my app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
//ola
  containerStyle:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },

  textHeaderStyle: {
    fontWeight:"bold",
    fontSize:35
  },

  logoStyle: {

  }
  
});
