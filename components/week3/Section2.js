import React from "react";
import {  View, TextInput ,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
  return (
    <View style={{  backgroundColor :'#E5E7E9',marginTop : -75 , padding : 10, borderWidth : 1, borderColor : 'gray',borderRadius : 15,}}>
      {/* View ก้อนที่ 1 */}
      <View >
        <Text style={{ fontSize : 25,textAlign :'center',color :'#0F0E0E' }}>Hiltan San Francisco</Text>
      </View>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection : "row", justifyContent : "center", marginTop : 10  }}>
                <View style={{ flexDirection : "row" }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
    </View>
    <View >
        <Text style={{ fontSize : 15,textAlign :'center' }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
      </View>
    </View>
  );
}