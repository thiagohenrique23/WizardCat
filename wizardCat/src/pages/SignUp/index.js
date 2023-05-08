import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { yupRevolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    nome: yup.string().required("Informe seu nome"),
    email: yup.string().email("Email Inválido").required("Informe seu email"),
    senha: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("Informe sua senha")
})


export default function SignUp() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupRevolver(schema)
    });

    function handleSignIn(data) {
        console.log(data)
    }

    return (
        <View style={styles.container}>

            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Seja Bem vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>

                <Text style={styles.title}>Nome</Text>
                <Controller
                    control={control}
                    name="nome"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput onChangeText={onChange} onBlur={onBlur} placeholder="Digite um nome..." value={value} style={styles.input} />
                    )}
                />
                {errors.nome && <Text style={styles.labelError}>{errors.nome?.message}</Text>}

                <Text style={styles.title}>Email</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput onChangeText={onChange} onBlur={onBlur} placeholder="Digite um email..." value={value} style={styles.input} />
                    )}
                />
                {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

                <Text style={styles.title}>Senha</Text>
                <Controller
                    control={control}
                    name="senha"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput onChangeText={onChange} onBlur={onBlur} placeholder="Digite uma senha..." value={value} style={styles.input} secureTextEntry={true} />
                    )}
                />
                {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}

                <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
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
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
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
    }
})