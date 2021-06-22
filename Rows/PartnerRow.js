import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PartnerRow = (props) => {
    return (
        <View style={{width:'100%',alignItems:'flex-start'}}>
            <View style={styles.PartnerRow}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.text}>{props.mes}</Text>
                <Text style={styles.textTime}>{props.tim}</Text>
            </View>
            </View>
    )
}
const styles=StyleSheet.create({
    PartnerRow:{
        borderWidth:0.3,
        borderRadius:10,
        width:'80%',
        borderColor:'gray',
        backgroundColor:'#f7f8fa',
        padding:5,
        margin:7
    },
    name:{
        color:'coral'
    },
    textTime:{
        textAlign:'right',
        paddingHorizontal:5,
        fontSize:10,
        color:'gray'
    },
})
export default PartnerRow
