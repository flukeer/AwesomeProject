import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{ padding: 20 }}>

            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 20, paddingBottom: 10}}>Location</Text>
                <Text style={{ color: '#444444', paddingBottom: 15}}>218 Austen Moutntian, consectetur adipiscing,sed eiusmod tempor incididunt ut labore et dolore</Text>
                <Image style={{ flex: 0, resizeMode: "cover", aspectRatio: 15 / 4 ,alignSelf : 'center'}} source={require("../../assets/week3/map.jpg")} />
            </View>

        </View>
    );
}
