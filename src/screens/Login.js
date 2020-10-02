import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} 
                    placeholder='Email' autoFocus={true} keyboardType='email-address' 
                    value={this.state.email} onChangeText={email => this.setState({ email })} />
                <TextInput style={styles.input} 
                    placeholder='Senha' secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity style={styles.buttom} onPress={this.login}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom} onPress={() => {this.props.navigation.navigate('Register')}}>
                    <Text style={styles.buttomText}>Criar nova conta...</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    }
})

export default Login