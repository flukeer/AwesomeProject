import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";

export default function Section5() {
  return (
    <View style={{  padding : 10, borderWidth : 1, }}>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="Wifi" name="wifi" size={30} color="#1C7999" />
        <MyIcon title="Cofee" name="sort" size={30} color="#1C7999" />
        <MyIcon title="Bath" name="bath" size={30} color="#1C7999" />
        <MyIcon title="Car" name="car" size={30} color="#1C7999" />
        <MyIcon title="Pet" name= "th" size={30} color="#1C7999" />
      </View>
    </View>
  );
}
