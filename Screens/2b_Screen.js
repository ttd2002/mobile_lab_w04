import { View, Text, StyleSheet, Image, TextInput, Pressable } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons'



function Screen_2b() {

    return (
        <View style={styles.Container}>
            <View style={styles.product_area}>
                <Image style={styles.image} source={require('../images/product_image.png')} />
                <Text style={styles.decription}>USB Blutooth Music Receiver HJX-001- Biến loa thường thành loa blutooth</Text>
            </View>
            <View style={styles.ratings}>
                
            </View>
            <View style={styles.imageInput}>
                <Pressable style={styles.imageButton}>
                    <Ionicon name="camera" size={35} />
                    <Text style={styles.imageText}>Thêm hình ảnh</Text>
                </Pressable>
            </View>
            <View style={styles.commentArea}>
                <TextInput
                    style={styles.textComment}
                    multiline = {true}
                    placeholderTextColor='#c4c4c4'
                    placeholder='Hãy chia sẻ những điều bạn thích về sản phẩm' />
            </View>
            <View style={styles.btnArea}>
                <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>Gửi</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Screen_2b;
const styles = StyleSheet.create({
    Container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },
    product_area: {
        flexDirection: 'row',
        width: '90%'
    },
    image: {
        width: '60px',
        height: '60px'
    },
    decription: {
        fontSize: '17px',
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    ratings: {
        width: '90%',
        marginVertical: '40px'
    },
    imageInput: {
        width: '80%',
    },
    imageButton: {
        borderRadius: 5,
        padding: '20px',
        borderWidth: '2px',
        borderColor: '#8a88f5',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageText: {
        marginHorizontal: 10,
        fontSize: '20px',
        fontWeight: '500'
    },
    commentArea: {
        marginVertical: '15px',
        width: '80%',
        height: '35%'
    },

    textComment: {
        borderRadius: 5,
        height: '100%',
        fontSize: '20px',
        fontWeight: '400',
        paddingVertical: 4,
        
    },
    btnArea: {
        width: '78%',
    },
    btn: {
        padding: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d5db6',
        borderRadius: 5,
    },
    btnText:{
        fontSize: '20px',
        fontWeight: '500',
        color: 'white'
    }
});