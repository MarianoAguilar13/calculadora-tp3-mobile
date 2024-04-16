import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

/* El View es como el div de html, es para hacer contenedores*/

/* Los text son como los p o los h en html, son para mostrar texto */

const Calculator = () => {
  const [result, setResult] = useState('0');

  const handleButtonPress = (butonText: string) => {
    if (result == '0') {
      setResult(butonText);
    } else {
      setResult(result + butonText);
    }
  };

  const calculateResult = () => {
    try {
      const resultOperation = eval(result);
      setResult(resultOperation);
    } catch (error) {
      Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  const clearResult = () => {
    setResult('0');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handleButtonPress('1')} />
        <Button title="2" onPress={() => handleButtonPress('2')} />
        <Button title="3" onPress={() => handleButtonPress('3')} />
        <Button title="+" onPress={() => handleButtonPress('+')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handleButtonPress('4')} />
        <Button title="5" onPress={() => handleButtonPress('5')} />
        <Button title="6" onPress={() => handleButtonPress('6')} />
        <Button title="-" onPress={() => handleButtonPress('-')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handleButtonPress('7')} />
        <Button title="8" onPress={() => handleButtonPress('8')} />
        <Button title="9" onPress={() => handleButtonPress('9')} />
        <Button title="*" onPress={() => handleButtonPress('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="C" onPress={clearResult} />
        <Button title="0" onPress={() => handleButtonPress('0')} />
        <Button title="=" onPress={calculateResult} />
        <Button title="/" onPress={() => handleButtonPress('/')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  result: {
    fontSize: 36,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default Calculator;
