import { View, Text, StyleSheet, Image, TextInput, Pressable, CheckBox } from "react-native";
import { useState } from "react";

const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
function Screen_2c() {
    const [password, setPassword] = useState('')
    const [lengthPass, setLengthPass] = useState(6)
    const [isLowcase, setIsLowcase] = useState(true)
    const [isupcase, setIsupcase] = useState(false)
    const [isNum, setIsNum] = useState(true)
    const [issplSym, setsplSym] = useState(false)

    const generatePassword = () =>{
        let pass = '';
        if(lengthPass === 0){
            pass = '';
        }
        if(lengthPass > 20){
            alert('invalid length of password')
        }
        else{
            if(!isLowcase && !isupcase && !isNum && !issplSym){
                alert('pick 1 option, please!')
            }
            else{
                for(let i = 0; i < lengthPass; i++){
                    console.log(getLetterRandom());
                    pass += getLetterRandom();
                }
            }
            
        }
        
        setPassword(pass);
    }
    const getLetterRandom = () =>{
        const chars = [];
        if(isLowcase){
            chars.push(lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)]);
        }
        if(isupcase){
            chars.push(upperCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)]);
        }
        if(isNum){
            chars.push(numbers[Math.floor(Math.random()*numbers.length)]);
        }
        if(issplSym){
            chars.push(special[Math.floor(Math.random()*special.length)]);
        }
        
        
        if (chars.length === 0) return;
        return chars[Math.floor(Math.random() * chars.length)];
    }

    return (
        <View style={styles.ContainerOutside}>
            <View style={styles.ContainerInside}>
                <View style={styles.logoTextArea}>
                    <Text style={styles.logoText}>PASSORD</Text>
                    <Text style={styles.logoText}>GENERATOR</Text>
                </View>
                <View style={styles.GeneratePass}>
                    <TextInput style={styles.InputGen} value={password}/>
                </View>

                <View style={styles.LengthArea}>
                    <Text style={styles.text}>Password length</Text>
                    <TextInput value={lengthPass} onChangeText={setLengthPass} style={styles.InputLength} />
                </View>
                <View style={styles.optionArea}>
                    <View style={styles.option}>
                        <Text style={styles.text}>Include lower case letters</Text>
                        <CheckBox style={styles.checkboxStyle} value={isLowcase} onValueChange={setIsLowcase} />
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.text}>Include upcase letters</Text>
                        <CheckBox style={styles.checkboxStyle} value={isupcase} onValueChange={setIsupcase} />
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.text}>Include number</Text>
                        <CheckBox style={styles.checkboxStyle} value={isNum} onValueChange={setIsNum} />
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.text}>Include special symbol</Text>
                        <CheckBox style={styles.checkboxStyle} value={issplSym} onValueChange={setsplSym} />
                    </View>
                </View>
                <View style={styles.btnArea}>
                    <Pressable style={styles.btn} onPress={generatePassword}>
                        <Text style={styles.btnText}>Generate Password</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
export default Screen_2c;
const styles = StyleSheet.create({
    ContainerOutside: {
        flex: 1,
        backgroundImage: 'linear-gradient(#6161a9, #667799)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContainerInside: {
        backgroundColor: '#23235b',
        justifyContent: 'center',
        alignItems: 'center',
        height: '94%',
        width: '94%',
        borderRadius: 15,
        borderWidth: 5,
        borderColor: '#0d99ff'
    },
    logoTextArea: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '30px'
    },
    logoText: {
        fontSize: '35px',
        fontWeight: '700',
        color: 'white',
    },
    GeneratePass: {
        backgroundColor: '#151537',
        width: '95%',
        height: '60px',
        borderWidth: 5,
        borderColor: '#667799',

    },
    InputGen: {
        fontSize: '40px',
        color: 'white',
        textAlign: 'center'

    },
    LengthArea: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '30px',
    },
    text: {
        color: 'white',
        fontSize: '20px',
        fontWeight: '500'
    },
    InputLength: {
        width: '50%',
        backgroundColor: 'white',
        height: '40px',
        fontSize: '20px',
        fontWeight: '500',
        textAlign: 'center'
    },
    optionArea: {
        width: '90%',

    },
    checkboxStyle: {
        width: '25px',
        height: '25px'
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '15px'
    },
    btnArea: {
        width: '90%',
        backgroundColor: 'red'
    },
    btn: {
        padding: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B3B98',
        borderWidth: 5,
        borderColor: '#667799',
    },
    btnText: {
        fontSize: '25px',
        fontWeight: '500',
        color: 'white'
    }
});