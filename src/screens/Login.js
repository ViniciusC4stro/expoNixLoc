import React, { Component } from "react";
import { 
  Image, 
  Text, 
  StyleSheet, 
  View, 
  TextInput,
  TouchableOpacity, 
  Alert
} from "react-native";

import logoImage from '../../assets/imgs/logo.png'
import LoginInput from "../components/LoginInput"

export default class Login extends Component {

  state = {
    user: '', 
    password: '',
    forgotPassword: '',
    stageLogin: true
  }

  signinOrSigup = () => {
    if(this.state.stageLogin) {
      Alert.alert('Sucesso', 'Login realizado com sucesso!')
    } else {
      Alert.alert('Redefinir sua senha')
    }
  }

  render() {
    return (
      <>
        <View style={{alignItems: 'center'}}>
          <Image style={{marginTop: 96}} source={logoImage}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.subTitle}>{this.state.stageLogin ? 'Login de acesso' : 'Redefinir senha'}</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginInput icon='user' placeholder="Usuário" 
            value={this.state.user} 
            style={styles.input} onChangeText={user => this.setState({ user })}/>
          {this.state.stageLogin &&
            <LoginInput icon='lock' placeholder="Senha" 
              secureTextEntry={true} value={this.state.password} 
              style={styles.input} onChangeText={password => this.setState({ password })}/>
          }

            <TouchableOpacity style={{marginTop: 6}} onPress={this.signinOrSigup}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  {this.state.stageLogin ? 'Entrar' : 'Solicitar'}
                </Text>
              </View>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.changePassword} 
        onPress={() => this.setState({ stageLogin: !this.state.stageLogin})}>
            <Text style={{color: '#577696'}}>{this.state.stageLogin ? 'Esqueceu a senha?' : 'Voltar para login' }</Text>
        </TouchableOpacity>
      </>
    )
  }
}

const styles = StyleSheet.create({
  subTitle: {
    marginTop: 58,
    marginBottom: 7,
    fontSize: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'
  },
  input: {
    width: 296,
    height: 39,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: '#E9EDF3',
    borderRadius: 5,
    marginBottom: 18,
  },
  button: {
    backgroundColor: '#577696',
    width: 211,
    height: 39,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 15
  },
  changePassword: {
    height: 20,
    marginTop: 33,
    alignItems: 'center'
  }
})
