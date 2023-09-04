import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";

function ExempleComponent() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello world</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" translucent={false} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarItemStyle: {
              width: "auto",
            },
            tabBarContentContainerStyle: {
              width: "auto",
              paddingHorizontal: 20,
            },
            tabBarIndicatorContainerStyle: {
              marginHorizontal: 20,
            },
            tabBarScrollEnabled: true,
          }}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <Tab.Screen
              name={`Example tab #${n}`}
              key={n}
              component={ExempleComponent}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
