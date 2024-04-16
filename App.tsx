import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Calculator from './src/presentation/screens/Calculator';

/*
.eslintrc, las reglas del linter
app.json - info sobre la app, descriptiva
App.tsx - es la base de la aplicacion, a partir de ahi se cargan todos los componentes
index.js - es el main, es la entrada de la aplicacion que toma al app y el app esta conectado a todo
jest.config.js - config del testig jest
package.json - todas la librerias que utiliza la app y comandos posibles

la carpeta de android es donde se genera todo lo necesario para que la app funcione en android
src - presentation: van a ir todas las pantallas (pages), los componentes y los themes

*/

/*
SafeAreaView es la parte de la pantalla que se puede ver sin tapar la interfaz de SO
*/
export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name='Fernando Herrera' /> */}
        {/* <CounterScreen /> */}
        <Calculator />
      </SafeAreaView>
    </PaperProvider>
  );
};
