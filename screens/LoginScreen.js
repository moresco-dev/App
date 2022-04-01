import React, { useState } from 'react'
import Layout from '../components/Layout'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'
import { getUser } from '../api'


const LoginScreen = ({ navigation, route }) => {

    const [user, setUser] = useState({
        userId: "",
        password: "",
        token:""
    })

    const handleChange = (name, value) => setUser({ ...user, [name]: value })


    handlePressGo = async () => {
        try {
            const data = await getUser(user)
            if (data) {
                navigation.navigate("HomeScreen")
            }
            else {
                console.log("wrong user or password")
            }

        }
        catch (error) {
            console.log("wrong user or password")
        }
    }

    return (

        <Layout>
            <View style={styles.container}>
                <Text style={styles.itemTitle}>Welcome to my first application</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Set a Username"
                    placeholderTextColor='#546574'
                    onChangeText={text => handleChange('userId', text)}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry= {true}
                    placeholder="Set the Password"
                    placeholderTextColor='#546574'
                    onChangeText={text => handleChange('password', text)}
                />
                <TouchableOpacity style={styles.goButton}>
                    <Text style={styles.textButton} onPress={() => {
                        handlePressGo()
                    }}>Go</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </Layout>


    )
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 35,
        color: '#ffffff',
        padding: 4,
        textAlign: 'center',
        borderRadius: 5
    },
    inputPassword: {
        width: "90%",
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 35,
        color: '#ffffff',
        padding: 4,
        textAlign: 'center',
        borderRadius: 5
        
    },
    container: {
        width: "100%",
        height: 300,
        //alignSelf: 'flex-start',
        alignItems: "center",

    },
    itemTitle: {
        color: "#ffffff", marginBottom: 7,
        fontSize: 18
    },
    textButton: {
        color: '#ffffff',
        textAlign: 'center',
    },
    goButton: {
        padding: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "#5D8BF4",
        width: '90%',
        textAlign: 'center',
    }

})
export default LoginScreen