import React from 'react';
import 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View } from 'react-native-web';
import { ToastAndroid } from 'react-native';
const plan = require("./modules/planGet.js")

const Stack = createNativeStackNavigator();
let login;
let password;
const subjects = plan.Subjects;

function loginScreen({navigation}){
  const [writedLogin, setWritedLogin] = useState('');
  const [writedPass, setWritedPass] = useState('');

  const zaloguj = () => {
    login = writedLogin;
    password = writedPass;
    if(plan.authorizeLibrus(login,password)){
      plan.authorizeLibrus(login,password)
      navigation.replace("Main")
    }
    else{
      ToastAndroid("Złe dane logowania!")
    }
    
  }

  return(
    <View style={styles.main}>
      <Text style={styles.title}>Logowanie do Librusa</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={writedLogin}
        onChangeText={setWritedLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Hasło"
        value={writedPass}
        onChangeText={setWritedPass}
        secureTextEntry
      />
      <Button title="Zaloguj" onPress={zaloguj} />
    </View>
  );
}

function mainScreen(){
  return(
    <View style={styles.main}>
      <Text>{subjects.Monday}</Text> 
    </View>
  );
}


const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={loginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={mainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  main:{
    backgroundColor: '#01040f',
    color: '#3d02b3'
  }
})

export default App;

module.exports = {
  Login: login,
  Password: password,
}