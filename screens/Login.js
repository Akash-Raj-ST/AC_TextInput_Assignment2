import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import InputField from '../components/InputField'


export default function Login() {
    
    return (
        <View style={styles.container}> 
            <Image source={require("../assets/images/logo.png")} style={styles.logo}/>
            <View>
                <InputField title="Email" placeHolder="Email" type="email"/>
                <InputField title="Password" placeHolder="Password" type="password"/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View>
                <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>New here? </Text>
                <TouchableOpacity>
                    <Text 
                        style={{
                            textDecorationLine:'underline',
                            fontWeight:'bold',
                            fontSize:18,
                            color:'black'
                        }}> Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:"100%",
        backgroundColor:'white'
    },
    
    logo:{
        width:100,
        height:100,
        marginBottom:50,
    },

    input:{
        margin:10,
    },

    button:{
        backgroundColor:'black',
        paddingHorizontal:60,
        paddingVertical:10,
        borderRadius:15,
        margin:20
    },

    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
})
