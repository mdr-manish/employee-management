import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Feather,
  Entypo,
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient colors={["#7f7fd5", "#e9e4f0"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              padding: 12,
              justifyContent: "space-between",
            }}
          >
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Employee Management System
            </Text>
            <Entypo name="lock" size={24} color="black" />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Pressable
              style={styles.pressableItem}
              onPress={() => router.push("/(home)/employees")}
            >
              <View style={styles.viewStyle}>
                <Ionicons name="ios-people-sharp" size={24} color="black" />
              </View>
              <Text style={styles.textStyle}>Employee List</Text>
            </Pressable>
            <Pressable style={styles.pressableItem}>
              <View style={styles.viewStyle}>
                <Ionicons name="ios-people-sharp" size={24} color="black" />
              </View>
              <Text style={styles.textStyle}>Mark Attendance</Text>
            </Pressable>
          </View>
          {/* // TODO: one line list */}
          <View style={styles.oneLineContainer}>
            {/* // TODO: Attendance Report*/}
            <Pressable style={styles.oneLinePressableStyle}>
              <View style={styles.oneLineViewStyle}>
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text style={styles.oneLineTextStyle}>Attendance Report</Text>
              <View style={styles.oneLineIconStyle}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>

            {/* // TODO: Summary Report*/}
            <Pressable style={styles.oneLinePressableStyle}>
              <View style={styles.oneLineViewStyle}>
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text style={styles.oneLineTextStyle}>Summary Report</Text>
              <View style={styles.oneLineIconStyle}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>

            {/* // TODO: All generate Reports*/}
            <Pressable style={styles.oneLinePressableStyle}>
              <View style={styles.oneLineViewStyle}>
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text style={styles.oneLineTextStyle}>All Generate Reports</Text>
              <View style={styles.oneLineIconStyle}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>

            {/* // TODO: Overtime Employees*/}
            <Pressable style={styles.oneLinePressableStyle}>
              <View style={styles.oneLineViewStyle}>
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text style={styles.oneLineTextStyle}>Overtime Employees</Text>
              <View style={styles.oneLineIconStyle}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>

          {/* // TODO: Button*/}
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "#f79d00",
                ...styles.bottomViewContainer,
              }}
            >
              <View style={styles.bottomViewStyle}>
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={styles.bottomTextStyle}>Attendance Criteria</Text>
            </View>

            <View
              style={{
                backgroundColor: "#83A2FF",
                ...styles.bottomViewContainer,
              }}
            >
              <View style={styles.bottomViewStyle}>
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={styles.bottomTextStyle}>Increased Workflow </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "#F7EFE5",
                ...styles.bottomViewContainer,
              }}
            >
              <View style={styles.bottomViewStyle}>
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={styles.bottomTextStyle}>Cost Saving</Text>
            </View>

            <View
              style={{
                backgroundColor: "#DE8F5F",
                ...styles.bottomViewContainer,
              }}
            >
              <View style={styles.bottomViewStyle}>
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={styles.bottomTextStyle}>Employee Performance </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  pressableItem: {
    backgroundColor: "#D3cce3",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  viewStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    marginTop: 7,
    fontWeight: "600",
  },
  oneLineContainer: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  oneLinePressableStyle: {
    backgroundColor: "#B4BDFF",
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  oneLineViewStyle: {
    padding: 7,
    width: 45,
    height: 45,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  oneLineTextStyle: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  oneLineIconStyle: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomViewContainer: {
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bottomViewStyle: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTextStyle: {
    marginTop: 7,
  },
});
