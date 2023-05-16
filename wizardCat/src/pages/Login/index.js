import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import axios from "axios";

export default function Login() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            if (!email || !password) {
                setError('Por favor, preencha todos os campos.');
                return;
            }

            const response = await axios.post(
                'https://x8ki-letl-twmt.n7.xano.io/api:vMvD84_H/auth/login',
                {
                    email,
                    password
                }
            );
            console.log(response.data);

            navigation.navigate('Home');

            setEmail('');
            setPassword('');
            setError('');


        } catch (error) {
            console.error(error);
            setError('Credenciais inválidas. Por favor, tente novamente.');
        }
    };


    return (
        <View style={styles.container}>

            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Login</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                
                {error ? <Text style={styles.error}>{error}</Text> : null}
                
                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="Digite seu email..." style={styles.input} onChangeText={(text) => setEmail(text)} />

                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Digite sua senha..." secureTextEntry style={styles.input} onChangeText={(text) => setPassword(text)} />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText} onPress={() => navigation.navigate('SignUp')}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        alignSelf: 'center'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
        color: '#8A2BE2'
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color: '#8B008B'
    },
    button: {
        backgroundColor: '#8A2BE2',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#8B008B'
    },
    error: {
        color: 'red',
        marginBottom: 12,
        marginTop: 12,
        alignSelf: 'center'
    }
})