import React from "react";
import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator,
	createSwitchNavigator
} from "react-navigation";

import signUp from "./components/signUp";
import login from "./components/login";
import Home from "./components/Home";
import wishlist from "./components/wishlist";
import healthreport from "./components/healthreport";
import healthydiet from "./components/healthydiet";

const stackNavigator = createStackNavigator({
	signUp: signUp
});

const tabs = createBottomTabNavigator({
	login: login,
	signUp: stackNavigator
});

const all = createSwitchNavigator({
	login: login,
	signUp: signUp,
	Main: tabs,
	Home: Home,
	wishlist: wishlist,
	healthreport: healthreport,
	healthydiet: healthydiet
});
const App = createAppContainer(all);
export default App;
