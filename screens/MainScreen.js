import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text,StyleSheet,FlatList, TouchableOpacity} from 'react-native'
import Card from '../resources/Card'

function MainScreen({details}) {
    const navigation=useNavigation();
    return (
        <>
        <View style={{width:'100%',height:50,backgroundColor:'#075E54',alignItems:'center',justifyContent:'center',borderWidth:0}}>
            <Text style={{color:'white',fontSize:20,letterSpacing:0.5}}>Chats</Text>
        </View>
        <View >
             <Card 
             onPress={()=>navigation.navigate('Messages1')}
             image={details.chats[0].image}
             topic={details.chats[0].topic}
             unseen={details.chats[0].messages[2].message}
             />
             <Card 
             onPress={()=>navigation.navigate('Messages2')}
             image={details.chats[1].image}
             topic={details.chats[1].topic}
             unseen={details.chats[1].messages[1].message}
             />
             <Card
             onPress={()=>navigation.navigate('Messages3')}
             image={details.chats[2].image}
             topic={details.chats[2].topic}
             unseen={details.chats[2].messages[1].message}
              />
        </View>
        </>
    )
}

const styles=StyleSheet.create({
})

export default MainScreen
