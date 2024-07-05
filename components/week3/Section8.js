import React from 'react';
import { Button, Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ flex: 1, borderTopWidth: 1,borderBlockColor: "gray", paddingLeft: 10, paddingRight: 10, marginTop: 20, marginBottom: 15, borderTopWidth: 1,paddingTop: 10}}>
            {/* View ก้อนที่ 1 */}
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column", alignItems: "flex-start", marginRight:550 ,paddingLeft: 20}}>
                    <Text style={{ fontSize: 20  }}>Price</Text>
                    <Text style={{ fontSize: 20, color: "#D8722B" }}>$399.99</Text>
                    <Text style={{ fontSize: 15,color: "#000000",paddingBottom: 10 }}>AVG/Night</Text>
                </View>
            <View style={{ backgroundColor :'#DA622A',marginTop: 7, marginBottom: 6, padding : 10, borderWidth : 1, borderColor : '#DA622A',borderRadius : 15,}}>
                <Button title="Book Now" color="white" />
            </View>
                
            </View>

        </View>
    );
}