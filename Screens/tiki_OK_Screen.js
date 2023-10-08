import { View, Text, StyleSheet, Image, TextInput, Pressable } from "react-native";
import { useState } from "react";



function Screen_tiki() {
    let OriginalPriceProduct = 141.888
    const [pricePro, setPricePro] = useState(141.888)
    const [countPro, setCountPro] = useState(1)


    const onPressAdd = () => {
        setCountPro(countPro++)
    }
    const onPressRemove = () => {

        if (countPro > 1) {
            setCountPro(countPro--)
        }
    }

    return (
        <View style={styles.Container}>
            <View style={styles.product_area}>
                <Image style={styles.image} source={require('../images/book.png')} />
                <View style={styles.decriptionArea}>
                    <Text style={styles.decription}>Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style={styles.decription}>Cung cấp bởi Tiki trading</Text>
                    <Text style={styles.price}>{pricePro} đ</Text>
                    <Text style={styles.priceSale}>141.800 đ</Text>
                    <View style={styles.countArea}>
                        <Pressable style={styles.btn} onPress={() => {
                            if (countPro > 1) {
                                setCountPro(countPro - 1);
                                setPricePro(OriginalPriceProduct * (countPro - 1));
                            }

                        }
                        }>
                            <Text style={styles.btnText}>-</Text>
                        </Pressable>
                        <Text style={styles.count}>{countPro}</Text>
                        <Pressable style={styles.btn} onPress={() => {
                            setCountPro(countPro + 1);
                            setPricePro(OriginalPriceProduct * (countPro + 1));
                        }}>
                            <Text style={styles.btnText}>+</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
            <View style={styles.totalPriceArea}>
                <Text style={styles.totalPriceText}>Thành tiền: <Text style={styles.totalPrice}>{pricePro}</Text></Text>
            </View>

        </View>
    )
}
export default Screen_tiki;
const styles = StyleSheet.create({
    Container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },
    product_area: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around'
    },
    image: {
        width: '120px',
        height: '140px'
    },
    decriptionArea: {
        height: '100%',

    },
    decription: {
        fontSize: '13px',
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: '10px'
    },
    price: {
        color: 'red',
        fontSize: '25px',
        fontWeight: '500',
        marginLeft: 20,
    },
    priceSale: {
        color: '#808080',
        fontSize: '14px',
        fontWeight: '500',
        marginLeft: 23,
        textDecorationLine: 'line-through'
    },
    countArea: {
        flexDirection: 'row',
        marginLeft: 20,

    },
    btn: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c4c4c4',
        marginHorizontal: '15px'
    },
    count: {
        fontSize: '20px'
    },
    totalPriceArea: {
        marginVertical: '40px',
        width: '100%',
        alignItems: 'center'
    },
    totalPriceText: {
        fontSize: '30px',
        fontWeight: '400'
    },
    totalPrice: {
        fontSize: '30px',
        fontWeight: '600',
        color: 'red'
    }



});