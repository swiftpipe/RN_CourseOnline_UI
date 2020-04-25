import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Colors } from './colors'
import ListCourse from './ListCourse'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.icon} source={require('./assets/menu.png')} />
                <Image source={require('./assets/avatar.png')} />
            </View>
            <View>
                <Text style={styles.heading}>Hey Alex, </Text>
                <Text style={styles.description}>Find a course you want to learn</Text>


                <View style={styles.searchContainer}>
                    <Image style={styles.icon} source={require('./assets/search.png')} />
                    <TextInput style={styles.input} placeholder="Search for anything" />
                </View>
            </View>
            <ListCourse />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    header: {
       justifyContent: 'space-between',
       flexDirection: 'row'
    },
    container: {
        padding: 10,
        flex:1,
        backgroundColor: '#fff'
    },
    heading: {
        fontSize: 20,
        fontWeight: '500'
    },
    description: {
        fontSize: 15,
        marginVertical: 10
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 12,
        paddingHorizontal: 16,

        backgroundColor: Colors.sliver,
        borderRadius: 20
    },
    input: {
        marginLeft: 10
    },
    icon: {
        width: 20,
        height: 20
    }
})
