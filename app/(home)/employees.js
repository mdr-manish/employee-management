import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons ,AntDesign} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const employees = () => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http:192.168.2.178:8000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);
  console.log(employees);
  return (
    <View style={styles.container}>
        <View style={styles.viewStyle}>
            <Ionicons style={{marginLeft: 10}} name="arrow-back" size={24} color='black' />
            <AntDesign name="search1" size={24} color='black' />
            <TextInput placeholder="Search" />
            {employees.length > 0 && (
              <View>
                <Pressable>
                  <AntDesign name="pluscircle" size={24} color='#007b1' />
                </Pressable>
              </View>
            )}
        </View>
    </View>
  )
}

export default employees

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        backgroundColor: 'white'
    },
    viewStyle :{
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: 'white',
    },
    pressableStyle : {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 7,
        gap : 10,
        backgroundColor: 'white',
        borderRadius: 3,
        height: 40, 
        flex: 1
    }
})