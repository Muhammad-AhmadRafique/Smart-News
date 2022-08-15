// import { createStackNavigator } from "@react-navigation/stack";
import NewsFeedScreen from '../screens/newsFeedScreen';
import DetailScreen from '../screens/detailScreen';
import SearchNewsFeedScreen from "../screens/searchNewsFeedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";


// const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function NewsNavStack() {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "HeadLines") {
                        iconName = focused ? "ios-home-sharp" : "ios-home-outline";
                    } else if (route.name === "Feeds") {
                        iconName = focused ? "ios-search" : "search-outline";
                    }

                    return <Ionicons name={iconName} size={30} color={color} />;
                },
                tabBarShowLabel: false,
                tabBarLabelStyle: "30px",
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen
                name="HeadLines"
                component={NewsFeedScreen}
                tabBarIcon
                options={{
                    style: { justifyContent: "center", alignItems: "Center" },
                }}
            />
            <Tab.Screen name="Feeds" component={SearchNewsFeedScreen} />
        </Tab.Navigator>
    );
}
