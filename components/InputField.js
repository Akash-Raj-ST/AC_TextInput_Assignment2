import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function InputField(props){

    let textType = "other";
    if(props.type){
        switch(props.type){
            case "email":
                textType = "email";
                break;
            case "password":
                textType = "password";
                break;
        }
    }
    console.log(textType);
    return(
        <View style={styles.input}>
            <View style={styles.label}> 
                <Text style={styles.labelText}>{[props.title]}</Text>
            </View>
            <TextInput style={styles.inputField} placeholder={props.placeHolder} secureTextEntry={textType==="password"?true:false} keyboardType={textType==="email"?'email-address':'default'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputField:{
        borderWidth:2,
        width:280,
        height:60,
        borderRadius:15,
        paddingHorizontal:10,
        margin:5,
        marginBottom:20,
        position:'relative',
        fontWeight:'bold',
    },
    
    label:{
        position:'absolute',
        left:25,
        top:-5,
        backgroundColor:'white',
        zIndex:10,
        paddingHorizontal:5,
    },
    labelText:{
        fontWeight:'bold',
        color:'black'
    },
})
