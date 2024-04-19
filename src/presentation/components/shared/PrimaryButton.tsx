import {
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

interface Props {
  label: string;
  result: any;
  setResult: any;
}

interface PropsClear {
  label: string;
  setResult: any;
}

export const NumberButton = ({label, result, setResult}: Props) => {
  const handleButtonPress = (butonText: string) => {
    if (result == '0') {
      setResult(butonText);
    } else {
      setResult(result + butonText);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleButtonPress(label);
      }}
      style={
        label == '+' || label == '*'
          ? styles.buttonSumaMul
          : label == '-' || label == '/'
          ? styles.buttonResDiv
          : styles.button
      }>
      <Text style={styles.textNumButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export const ResultButton = ({label, result, setResult}: Props) => {
  const calculateResult = () => {
    try {
      //el eval sirve para hacer una cuenta matematica con el string que le pasas
      const resultOperation = eval(result);
      setResult(resultOperation);
    } catch (error) {
      Alert.alert('Error!!!', 'No se puede realizar esta operación', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        calculateResult();
      }}
      style={styles.buttonResult}>
      <Text style={styles.textNumButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export const ClearButton = ({label, setResult}: PropsClear) => {
  const clearResult = () => {
    setResult('0');
  };

  return (
    <TouchableOpacity
      onPress={() => {
        clearResult();
      }}
      style={styles.buttonClear}>
      <Text style={styles.textClearButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export const BorrarButton = ({label, result, setResult}: Props) => {
  const handleButtonPress = () => {
    const cantSting = result.length;

    if (cantSting != 0) {
      const newResult = result.slice(0, -1);
      setResult(newResult);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleButtonPress();
      }}
      style={styles.buttonClear}>
      <Text style={styles.textClearButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#242424',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 2,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },

  buttonSumaMul: {
    backgroundColor: '#740202',
    width: 100,
    height: 100,
    color: '#fff',
    borderRadius: 10,
    margin: 2,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },

  buttonResDiv: {
    backgroundColor: '#0135a5',
    width: 100,
    height: 100,
    color: '#fff',
    borderRadius: 10,
    margin: 2,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },

  buttonResult: {
    backgroundColor: '#065f02',
    width: 100,
    height: 100,
    color: '#fff',
    borderRadius: 10,
    margin: 2,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },

  buttonClear: {
    backgroundColor: '#d14200',
    width: 100,
    height: 100,
    color: '#000',
    borderRadius: 10,
    margin: 2,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },

  textNumButton: {
    textAlign: 'center',
    fontSize: 36,
    color: '#fff',
  },

  textClearButton: {
    textAlign: 'center',
    fontSize: 36,
    color: '#000',
  },

  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
