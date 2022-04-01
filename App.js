import React from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View
} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this) 
  } //Este é o método construtor
  calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura)
   let s = this.state
   s.resultado = imc
   if(s.resultado < 18.5){
     s.resultadoText ='Abaixo do Peso'
   }
    else if (s.resultado < 25){
     s.resultadoText ='Peso Normal'
    }
    else if (s.resultado < 30){
     s.resultadoText ='Sobrepeso'
    }
    else if (s.resultado < 35) {
     s.resultadoText ='Obesidade grau I'
    }
    else if (s.resultado < 40) {
     s.resultadoText ='Obesidade grau II'
    }
    else{
      s.resultadoText ='Obesidade Grau III'
    }
   this.setState(s)

  }

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Calculadora IMC
      </Text>
      <View>
      </View>
      
      <TextInput placeholder="saas" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}} />

      <TextInput placeholder="saas" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
  '     
      <TouchableOpacity style={styles.botao} onPress={this.calcular}><Text style={styles.paragraph}> Calcular </Text></TouchableOpacity>

      <Text style={styles.paragraph}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.paragraph,{fontSize:20}]}>{this.state.resultadoText}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0FFFF',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    height:60,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:34,
    backgroundColor:'#FFFACD',
  },
  botao:{
    height: 40,
    margin: 15,
    backgroundColor:"#DA70D6"
  },
});



