import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ImageEditor, Image } from 'react-native'
import { Colors } from './colors'
import GroupCourse from './GroupCourse'

const Detail = () => {
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.background} source={require('./assets/uxdesign.png')} >
                <View style={styles.header}>

                    <Image style={styles.icon} source={require('./assets/arrow-left.png')} />
                    <Image style={styles.icon} source={require('./assets/more-vertical.png')} />
                </View>
                <View style={styles.innerContainer}>
                    <ImageBackground style={styles.rect} source={require('./assets/rect.png')}>

                        {/* <Image style={styles.imgRect} source={require('./assets/rect.png')} /> */}
                        <Text>BESTSELLER</Text>
                    </ImageBackground>
                    <View>
                        <Text style={styles.heading}>Design Thinking</Text>
                        <View style={styles.wrapperBody}>
                            <View style={styles.iconText}>
                                <Image style={styles.icon} source={require('./assets/people.png')} />
                                <Text>18k</Text>
                            </View>
                            <View style={styles.iconText}>
                                <Image style={styles.icon} source={require('./assets/star.png')} />
                                <Text>8k</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.wrapperBody, {  alignItems: 'flex-end' }]}>
                        <Text style={styles.money1}>$50</Text>
                        <Text style={styles.money2}>$70</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.bottom}>
                <GroupCourse />
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 400,

    },
    container:
    {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    icon: {
        width: 20,
        height: 20
    },
    rect: {
        // position: 'relative',
        width: 100,
        height: 23,
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginEnd: 20
    },
    wrapperBody: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    innerContainer: {
        padding: 20,
        marginTop: 20
    },
    money1: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    money2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.gray,
        marginStart: 20
    },
    bottom: {
        position: 'absolute',
        width: '100%',
        bottom: 0
    }
})
