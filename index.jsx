import React from 'react';
import 'react-native';
import { Subjects, Login, Password, authorizeLibrus } from "./modules/planGet.js";

let login
let password


const subjects = Subjects;

const App = () => {
  const [writedLogin, setWritedLogin] = useState('');
  const [writedPass, setWritedPass] = useState('');

  const zaloguj = () => {
    login = writedLogin;
    password = writedPass;
    authorizeLibrus(login, password)
  }

  return (
    <View style={styles.main}>
        <TextInput
          style={styles.textInput}
          placeholder = "Wpisz login"
          onChangeText={newText => setWritedLogin(newText)}
        />
        <TextInput
          style={styles.textInput}
          placeholder = "Wpisz haslo"
          onChangeText={newText => setWritedPass(newText)}
        />
        <Button
          title = "Zaloguj"
          onPress={zaloguj}
        />
    </View>
);
};

const styles = StyleSheet.create({
  main:{
    backgroundColor: '#01040f',
    color: '#3d02b3'
  },
  textInput:{
    width: '80%',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#08080f',
    fontSize: 16,
    color: '#3d02b3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  }
})

export default App;

module.exports = {
  Login: login,
  Password: password,
}