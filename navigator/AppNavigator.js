import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import Java from '../screens/Java';
import Python from '../screens/Python';
import ReactDeveloper from '../screens/ReactDeveloper';

export default function AppNavigator() {
    const details={
        "user" : "Ram",
        "chats" : [
            {
                "topic" :"Java Developer Johnson Pvt Ltd.",
                "image":require('../resources/java.png'),
                "messages":[
                    {
                        "to" : "Ghanshayam",
                         "message" : "Please send me the latest documents ASAP",
                         "from" : "Ram",
                          "time" : "05/06/2021T13.30.00"
                    },
                    {
                        "to" : "Ram",
                        "message" : "I have sent yesterday.",
                        "from" : "Ghanshayam",
                        "time" : "05/06/2021T15.30.00"
                    },
                    {
                        "to" : "Ghanshayam",
                        "message" : "Ok, I will check.",
                        "from" : "Ram",
                        "time" : "05/06/2021T17.45.00"
                    },
                ]
            },
            {
                "topic" : "Python Developer Bata Pvt Ltd.",
                "image":require('../resources/python.png'),
                "messages":[
                    {
                        "to" : "Ghanshayam",
                        "message" : "Please send me the resume tommorrow",
                        "from" : "Ram",
                        "time" : "05/06/2021T14.00.00"
                    },
                    {
                        "to" : "Ram",
                        "message" : "Ok, I will do that.",
                        "from" : "Ghanshayam",
                        "time" : "05/06/2021T14.10.00"
                    }
                ]
            },
            {
                "topic" : "React Developer Swar Yantra Technologies",
                "image":require('../resources/swarYantra.jpg'),
                "messages":[
                    {
                        "to" : "Ghanshayam",
                        "message" : "I have sent the files, please check.",
                        "from" : "Ram",
                        "time" : "05/06/2021T14.00.00"
                    },
                    {
                        "to" : "Ram",
                        "message" : "I have received.",
                        "from" : "Ghanshayam",
                        "time" : "05/06/2021T14.10.00"
                    }
                ]
            }
        ]
    }
    const ChatScreen=()=>(
        <MainScreen details={details}/>
        )
    const MessagesJava=()=>(
        <Java details={details} />
    )
    const MessagesPython=()=>(
        <Python details={details} />
    )
    const MessagesReact=()=>(
        <ReactDeveloper details={details} />
    )
    const Stack=createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Chats' component={ChatScreen} options={{headerTintColor:'white',title:'WhatsApp',headerStyle: { backgroundColor: '#075E54' }}}/>
                <Stack.Screen name='Messages1'  component={MessagesJava} options={{title:details.chats[0].topic,headerTitleAlign:'center',headerTintColor:'white',headerStyle: { backgroundColor: '#075E54' }}} />
                <Stack.Screen name='Messages2'  component={MessagesPython} options={{title:details.chats[1].topic,headerTitleAlign:'center',headerTintColor:'white',headerStyle: { backgroundColor: '#075E54' }}} />
                <Stack.Screen name='Messages3'  component={MessagesReact} options={{title:details.chats[2].topic,headerTitleAlign:'center',headerTintColor:'white',headerStyle: { backgroundColor: '#075E54' }}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
