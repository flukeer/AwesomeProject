import React from "react";
import { View, TextInput, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section3() {
    return (
        <View style={{ padding: 25 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row",  }}>
                <View style={{  backgroundColor: "#DD4E1B", width: 50,height: 50, borderRadius: 100 / 2,display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign: 'center' }}>
                     <Text style={{ color : "white"}}>9.5</Text>
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, color: "#DD4E1B"}}>Excellent</Text>
                    <Text style={{ color: "gray" }}>See 1,000 reviews</Text>
                </View>
            </View>

        </View>
    );
}