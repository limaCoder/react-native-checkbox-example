import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import Checkbox from './components/Checkbox';

const App = () => {
  const optionsIndividual = [{text: 'Li e concordo', id: 1}];
  const optionsOneAtATime = [
    {text: 'MacOS', id: 1},
    {text: 'Windows', id: 2},
    {text: 'Linux', id: 3},
  ];
  const optionsMultiple = [
    {text: 'Bacon', id: 1},
    {text: 'Fritas', id: 2},
    {text: 'Cheddar', id: 3},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Checkbox individual</Text>
      <Checkbox options={optionsIndividual} onChange={(op) => alert(op)} />
      <Text style={styles.title}>Checkbox uma opção por vez</Text>
      <Checkbox options={optionsOneAtATime} onChange={(op) => alert(op)} />
      <Text style={styles.title}>Checkbox múltipla escolha</Text>
      <Checkbox options={optionsMultiple} onChange={(op) => alert(op)} multiple />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  title: {
    color: '#333',
    size: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginVertical: 10,
    marginLeft: 12,
  }
});

export default App;
