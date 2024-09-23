import React from 'react';
import 'react-native';
const plan = require("./modules/planGet.js")

let login;
let password;
const subjects = plan.Subjects;

const App = () => {
  const [writedLogin, setWritedLogin] = useState('');
  const [writedPass, setWritedPass] = useState('');

  const zaloguj = () => {
    login = writedLogin;
    password = writedPass;
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