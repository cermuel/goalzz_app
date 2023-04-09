import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Matches from "./screens/matches";
import Teams from "./screens/teams";
import Team from "./screens/teams/team";
import Match from "./screens/matches/match";
import News from "./screens/news";
import LeagueNews from "./screens/news/leaguenews";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import useDark from "./hooks/useDark";
import Settings from "./screens/settings";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const defaultDrawerOptions = {
    headerShown: false,
  };
  const defaultOptions = ({ navigation, home }: any) => ({
    headerTintColor: isDark ? "#eee" : "#111",

    headerStyle: {
      backgroundColor: isDark ? "#111" : "#eee",
    },

    headerRight: () => {
      return (
        <View className="px-4">
          <FontAwesome
            name="navicon"
            onPress={() => navigation.toggleDrawer()}
            size={24}
            className="text-pry-color"
            color="#246BFD"
          />
        </View>
      );
    },
  });

  //Screen Stacks
  const TeamStack = () => {
    return (
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name="Teams" component={Teams} />
        <Stack.Screen name="Team" component={Team} />
      </Stack.Navigator>
    );
  };
  const MatchStack = () => {
    return (
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name="Matches" component={Matches} />
        <Stack.Screen name="Match" component={Match} />
      </Stack.Navigator>
    );
  };
  const NewsStack = () => {
    return (
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name="Teams" component={News} />
        <Stack.Screen name="LeagueNews" component={LeagueNews} />
      </Stack.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Matches"
          component={MatchStack}
          options={defaultDrawerOptions}
        />
        <Stack.Screen
          name="Teams"
          component={TeamStack}
          options={defaultDrawerOptions}
        />
        <Stack.Screen
          name="News"
          component={NewsStack}
          options={defaultDrawerOptions}
        />
      </Stack.Navigator>
    );
  };

  const { isDark } = useDark();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={defaultDrawerOptions}>
        <Drawer.Screen name="Home" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
