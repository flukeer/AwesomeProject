import React from "react";
import { View, TextInput, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section4() {
    return (
        <View style={{ paddingLeft : 10  }}>
        {/* View ก้อนที่ 3 */}
        <View style={{  padding : 10}}>
            <Text style={{ fontSize : 20, paddingBottom: 5 }}>Hotel Description</Text>
            <Text style={{ color : '#444444' }}>218 Austen Moutntian, consectetur adipiscing,sed eiusmod tempor incididunt ut labore et dolore</Text>
        </View>
    </View>  
    );
}