import { View, Text, StyleSheet, Image, TextInput,Pressable } from "react-native";
import {AirbnbRating} from 'react-native-ratings'


function Screen_2b() {
    
    return (
       <View style = {styles.Container}>
            <View style = {styles.product_area}>
                <Image style = {styles.image} source={require('../images/product_image.png')}/>
                <Text style = {styles.decription }>USB Blutooth Music Receiver HJX-001- Biến loa thường thành loa blutooth</Text>
            </View>
            <View style = {styles.ratings}>
                <AirbnbRating
                reviews={['Tệ', 'Không hài lòng', 'hài lòng', 'Rất hài lòng', 'Cực kỳ hài lòng']}
                count={5}
                defaultRating={5}
                />
            </View>
            <View style = {styles.imageInput}>
                <Pressable style = {styles.imageButton}>
                    <Text style = {styles.imageText}>Thêm hình ảnh</Text>
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
    product_area:{
        flexDirection: 'row',
        width: '90%'
    },
    image: {
        width: '60px',
        height: '60px'
    },
    decription:{
        fontSize: '17px',
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    ratings:{
        width: '90%',
        marginVertical:'40px'
    },
    imageInput:{
        width: '90%',
        justifyContent: 'center'

    },
    imageButton:{
        borderWidth: '2px',
        borderColor: '#8a88f5',
    },
    imageText:{

    }
});