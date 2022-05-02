import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';

export default function HomeScreen() {
  const {} = usePokemonPaginated();

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
