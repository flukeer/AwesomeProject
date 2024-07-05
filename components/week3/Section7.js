import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20 }}>Room Type</Text>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, aspectRatio: 5/4, borderRadius: 25 }} source={require("../../assets/week3/room-8.jpg")} />
                <View style={{ flexDirection: "column", alignItems: "flex-start", marginRight: 350 ,paddingLeft: 20}}>
                    <Text style={{ fontSize: 20, paddingBottom: 30  }}>Standard Twin Roon</Text>
                    <Text style={{ fontSize: 20, color: "#D8722B" }}>$399.99</Text>
                    <Text style={{ color: "#2B9A9E" }}>Hurry Up! This is your last room</Text>
                </View>
            </View>

        </View>
    );
}
