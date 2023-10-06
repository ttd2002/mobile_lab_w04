import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons'
import {useState} from 'react'


function Screen_2a() {
    var array = [{user: 'dai', pwd: '123'},{user: 'phu', pwd: '135'}]
    const [username,setUsername ] = useState('')
    const [pass,setPass ] = useState('')
    const onPressLogin =() =>{
        var Correct = false;
        array.forEach(element => {
            if(element.user === username && element.pwd === pass)
            {
                Correct = true;
            }
        });
        console.log(Correct);
    }
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.Logo}>LOGIN</Text>
            </View>
            <View style={styles.FirstMiddle}>
                <View style={styles.BoxInput}>
                    <Ionicon name="person" size={30}/>
                    <TextInput 
                    value={username}
                    onChangeText={setUsername}
                    style={styles.TextInput} 
                    placeholder="Email" />
                </View>
                <View style={styles.BoxInput}>
                    <Ionicon name="lock-closed" size={30}/>
                    <TextInput 
                    value={pass}
                    onChangeText={setPass}
                    style={styles.TextInput} 
                    placeholder="Password" />
                    <Ionicon name="eye" size={30} />
                </View>


            </View>

            <View style={styles.SecondMiddle}>
                <TouchableOpacity style={styles.btn} onPress={onPressLogin}>
                    <Text style={styles.btnTitle}>LOGIN</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.ThirdMiddle}>
                <TouchableOpacity>
                    <Text style={styles.textMidle}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    )
}
export default Screen_2a;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundImage: 'linear-gradient(#f8c801, #c49e01)',

    },
    Header: {

        alignItems: 'center',
    },
    Logo: {
        marginVertical: '50px',
        fontSize: '30px',
        fontWeight: '700',
    },
    FirstMiddle: {

        alignItems: 'center'
    },
    BoxInput: {
        marginVertical: '10px',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '10',
        borderRadius: '10px',
        borderWidth: 1,
        width: '90%',
        height: '55px',
        backgroundColor: '#ddbe3b',

    },
    TextInput: {
        marginLeft: '10px',
        width: '300px',
        height: '50px',
        backgroundColor: '#ddbe3b',
    },
    SecondMiddle: {

        alignItems: 'center'
    },
    
    textMidle: {
        marginVertical: '10px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: "black",
    },
    ThirdMiddle: {
        marginVertical: '60px',
        alignItems: 'center'
    },


    
    btn: {
        marginTop: '50px',
        marginBottom: '10px',
        backgroundColor: '#060000',
        width: '90%',
        padding: '10px',
        borderRadius: '10px',
    },
    btnTitle: {
        color: '#d8efde',
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'center'
    },
    
});