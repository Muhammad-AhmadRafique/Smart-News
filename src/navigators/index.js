import { createStackNavigator } from "@react-navigation/stack";
import NewsFeedScreen from '../screens/newsFeedScreen';
import DetailScreen from '../screens/detailScreen';


const Stack = createStackNavigator();

export default function NewsNavStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }} >
            <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
            <Stack.Screen name="Details" component={DetailScreen}
            />
        </Stack.Navigator>
    );
}
