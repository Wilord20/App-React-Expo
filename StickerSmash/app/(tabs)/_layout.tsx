import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: "white",
        headerStyle: {
          backgroundColor: '#25292e'
        },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: '#25292e',
          borderTopWidth: 1,
        },
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Principal",
          tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "home-sharp" : "home-outline"} size={24} color={color} />,
          title: "Principal"
        }}
      />
      <Tabs.Screen name="about" options={{ headerTitle: "Acerca de",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={24} color={color} />,
        title: "Acerca de"
       }} />
    </Tabs>
  );
}
