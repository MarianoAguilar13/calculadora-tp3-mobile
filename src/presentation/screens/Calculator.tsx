import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {
  BorrarButton,
  ClearButton,
  NumberButton,
  ResultButton,
} from '../components/shared/PrimaryButton';

/* El View es como el div de html, es para hacer contenedores*/

/* Los text son como los p o los h en html, son para mostrar texto */

const Calculator = () => {
  const [result, setResult] = useState('0');

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonRow}>
        <NumberButton label="1" result={result} setResult={setResult} />
        <NumberButton label="2" result={result} setResult={setResult} />
        <NumberButton label="3" result={result} setResult={setResult} />
        <NumberButton label="+" result={result} setResult={setResult} />
      </View>
      <View style={styles.buttonRow}>
        <NumberButton label="4" result={result} setResult={setResult} />
        <NumberButton label="5" result={result} setResult={setResult} />
        <NumberButton label="6" result={result} setResult={setResult} />
        <NumberButton label="-" result={result} setResult={setResult} />
      </View>
      <View style={styles.buttonRow}>
        <NumberButton label="7" result={result} setResult={setResult} />
        <NumberButton label="8" result={result} setResult={setResult} />
        <NumberButton label="9" result={result} setResult={setResult} />
        <NumberButton label="*" result={result} setResult={setResult} />
      </View>
      <View style={styles.buttonRow}>
        <ClearButton label="C" setResult={setResult} />
        <NumberButton label="0" result={result} setResult={setResult} />
        <BorrarButton label="DEL" result={result} setResult={setResult} />
        <NumberButton label="/" result={result} setResult={setResult} />
      </View>
      <View style={styles.buttonRow}>
        <ResultButton label="=" result={result} setResult={setResult} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#7440f2',
    paddingTop: 100,
  },
  result: {
    fontSize: 64,
    marginBottom: 40,
    color: '#fff',
    backgroundColor: '#111',
    width: '80%',
    borderRadius: 30,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default Calculator;
