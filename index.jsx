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
    <View>
        <TextInput
          placeholder = "Wpisz login"
          onChangeText={newText => setWritedLogin(newText)}
        />
        <TextInput
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
  }
})

export default App;

module.exports = {
  Login: login,
  Password: password,
}