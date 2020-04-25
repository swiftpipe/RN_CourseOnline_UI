import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Dimensions, ImageBackground, ScrollView } from 'react-native'
import { Colors } from './colors'
const W = Dimensions.get("window").width
const data = [
    {
        id: '1',
        title: 'Marketing',
        num: 17,
        image: require('./assets/marketing.png')
    },
    {
        id: '2',
        title: 'UX Design',
        num: 25,
        image: require('./assets/uxdesign.png')
    }
    ,
    {
        id: '3',
        title: 'Photography',
        num: 13,
        image: require('./assets/photography.png')
    },
    {
        id: '4',
        title: 'Business',
        num: 20,
        image: require('./assets/business.png')
    }
]

const ListCourse = () => {
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Categories</Text>
                <TouchableOpacity>
                    <Text style={styles.more}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.containerList}>
                    <View>
                        { 
                            data.map((item, index) => {
                                if(index%2 ==0 ) {
                                    return<View style={[styles.item]}>
                                    <TouchableOpacity style={[styles.itemBtn]}>
                                        <ImageBackground style={styles.imageBtn} source={item.image}>
                                            <Text style={styles.itemTitle}>{item.title}</Text>
                                            <Text style={styles.itemDesc}>{item.num} Course</Text>
                                        </ImageBackground>
                    
                    
                                    </TouchableOpacity>
                                </View>
                                }
                                return null

                            })
                        }
                    </View>
                    <View>
                        { 
                            data.map((item, index) => {
                                if(index%2 ==1 ) {
                                    return<View style={[styles.item]}>
                                    <TouchableOpacity style={[styles.itemBtn,  { minHeight: 300 }]}>
                                        <ImageBackground style={styles.imageBtn} source={item.image}>
                                            <Text style={styles.itemTitle}>{item.title}</Text>
                                            <Text style={styles.itemDesc}>{item.num} Course</Text>
                                        </ImageBackground>
                    
                    
                                    </TouchableOpacity>
                                </View>
                                }
                                return null

                            })
                        }
                    </View>
                </View>
            </ScrollView>
         
        </View>
    )
}

export default ListCourse

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    more: {
        fontWeight: '500',
        color: Colors.blue
    },
    item: {
        // flex: 0.5,
        width: (W  - 20)/2,
      
        padding: 10,
    },
    itemBtn: {
        backgroundColor: 'gray',
        borderRadius: 20,
        minHeight: 250,
        overflow: 'hidden'
    },
    imageBtn: {
        flex: 1,
        borderRadius: 20,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    itemDesc: {
        color: Colors.gray,
        marginTop: 8
    },
    containerList: {
        flexDirection: 'row',
        
    }
})
