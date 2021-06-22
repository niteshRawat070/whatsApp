import React, { useState } from 'react'
import { View, TextInput, StyleSheet,ScrollView, useWindowDimensions,Text, TouchableOpacity } from 'react-native'
import MyRow from '../Rows/MyRow'
import PartnerRow from '../Rows/PartnerRow'

const ReactDeveloper = ({details}) => {
    const windowHeight = useWindowDimensions().height;
    const date=new Date()
    const hour=date.getHours()
    const minute=date.getMinutes()
    const month=date.getMonth()+1
    const day=date.getDate()
    const year=date.getFullYear()
    const time=`${day}/${month}/${year}    ${hour}:${minute}`
    // alert(time)
    const [note,setNote]=useState('')
    const [list,setList]=useState([])

    const addMessageInList=()=>{
        if(note.length>0){
        setList([...list,note]);
        setNote('')
    }else{
        return null;
    }
    }
    return (
        <ScrollView>
            <View style={{height:windowHeight-100,justifyContent:'space-between'}}>
              <View>
                  <ScrollView>
              <MyRow mes={details.chats[2].messages[0].message} tim={details.chats[2].messages[0].time}/>
              <PartnerRow name={details.chats[2].messages[1].from} mes={details.chats[2].messages[1].message} tim={details.chats[2].messages[0].time} />
              {list.map(data=>(
                  <MyRow key={Math.random()*1000} mes={data} tim={time}/>
              ))}
              </ScrollView>
              </View>
              <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textinput}
                    placeholder='Type a message'
                    multiline={true}
                    value={note}
                    onChangeText={(text)=>setNote(text)}
                 />
                 <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:'30%',height:50,backgroundColor:'#075E54',borderRadius:20,marginHorizontal:5}}
                 onPress={addMessageInList}
                 >
                     <Text style={{color:'white',letterSpacing:2}}>Send</Text>
                 </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
   inputContainer:{
       flexDirection:'row',
       width:'100%',
       height:100,
       alignItems:'center',
       justifyContent:'center',
       marginHorizontal:5
   },
   textinput:{
       width:'60%',
       borderWidth:0.5,
       borderColor:'gray',
       borderRadius:20,
       height:50,
       paddingHorizontal:10
   }
})

export default ReactDeveloper
