import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Colors } from './colors'

const data = [{
    id: '1',
    title: 'Welcome to the course',
    time: '5:35'
},
{
    id: '2',
    title: 'Design Thinking - Intro',
    time: '19:04'
},
{
    id: '3',
    title: 'Design Thinking - Process',
    time: '12:48'
}, {
    id: '4',
    title: 'Customer Perspective',
    time: '37:54'
}

]

const GroupCourse = () => {
    return (
        <View style={styles.container}>
            <View style={{ padding: 10 }}>
                <Text style={styles.heading}>Course Content</Text>
                <ScrollView style={styles.list}>
                    {data.map(item => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.numHead}>{'0' + item.id}</Text>
                                <View style={styles.itemBody}>
                                    <Text style={styles.itemTime}>{item.time} mins</Text>
                                    <Text style={styles.itemTitle}>{item.title}</Text>
                                </View>
                                <View style={styles.itemPlayButton}>
                                    <Image style={{ width: 12, height: 12 }} source={require('./assets/play.png')} />
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bag}>
                    <Image source={require('./assets/shopping-bag.png')} />
                </View>
                <TouchableOpacity style={styles.btnBuy}>
                    <Text style={styles.titleBuy}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GroupCourse

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        paddingTop: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.1,
        shadowColor: '#000',
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        
    },
    list: {
        marginTop: 20,
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 20
    },
    numHead: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.gray
    },
    itemTime: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.gray
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.black
    },
    itemPlayButton: {
        backgroundColor: Colors.green,
        width: 40,
        aspectRatio: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        marginTop: 30,
        flexDirection: 'row',
        padding: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.1,
        shadowColor: '#000',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    bag: {
        // width: 40,
        // height: 30,
        padding: 8,
        paddingHorizontal: 20,
        borderRadius: 40,
        backgroundColor: Colors.pink
    },
    btnBuy: {
        backgroundColor: Colors.blue,
        flex: 1,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleBuy: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
        textAlign: 'center'
    },
    heading :{
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black
    }

})
