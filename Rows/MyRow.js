import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MyRow = (props) => {
    return (
        <View style={{width:'100%',alignItems:'flex-end'}}>
            <View style={styles.myRow}>
                <Text style={styles.text}>{props.mes}</Text>
                <Text style={styles.textTime}>{props.tim}</Text>
            </View>
            </View>
    )
}
const styles=StyleSheet.create({
    myRow:{
        borderWidth:0.3,
        borderRadius:10,
        width:'80%',
        borderColor:'gray',
        // backgroundColor:'gray',
        padding:5,
        margin:7,
        backgroundColor:'#dbfcc0'
    },
    text:{
        textAlign:'center',
    },
    textTime:{
        textAlign:'right',
        paddingHorizontal:5,
        fontSize:10,
        color:'gray'
    },
})
export default MyRow
