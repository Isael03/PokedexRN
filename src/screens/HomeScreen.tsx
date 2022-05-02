import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <Text style={{...styles.title, ...styles.globalMargin}}>Pokedex</Text>
    </SafeAreaView>
  );
}
