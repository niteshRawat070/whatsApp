import React from 'react'
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'

export default function Card(props) {
    return (
        <TouchableOpacity style={styles.mainCardContainer} onPress={props.onPress} >
            <View style={styles.imageContainer}>
                <Image source={props.image} style={styles.image}  />
            </View>
            <View style={styles.topicContainer}>
                <Text style={styles.text}>{props.topic}</Text>
                <Text style={{color:'gray'}}>{props.unseen}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    mainCardContainer:{
        paddingTop:Constants.statusBarHeight,
        height:100,
        width:'100%',
        marginHorizontal:5,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'lightgray'
    },
    imageContainer:{
        height:100,
        width:'20%',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    image:{
        width:50,
        height:50,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    topicContainer:{
        height:100,
        width:'80%'

    },
    text:{
        fontWeight:'bold'
    }
})