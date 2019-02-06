import React from "react";
import { createNavigator, SwitchRouter, SceneView } from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";
import './Stylesheet.css'

import Admin from './views/Admin';
import Login from './views/Login';

class SidebarView extends React.Component {
    render() {
        const { descriptors, navigation } = this.props;
        const activeKey = navigation.state.routes[navigation.state.index].key;
        const descriptor = descriptors[activeKey];
        return (
            <div class = 'mainContainer'>
                <div class = 'almostWhiteBackground'>
                    <img src="https://thehueyproject.files.wordpress.com/2019/02/cropped-logo-2.png?w=740&h=740" alt="Huey Logo" class = 'logoImage'></img>
                    <Link routeName="Admin"><a class = 'menuButton'>Protest Setup</a></Link>
                    <Link routeName="Admin"><a class = 'menuButton'>Generate QR Codes</a></Link>
                    <a class = 'menuButtonDisabled'>View Shared Media</a>
                    <a class = 'menuButtonDisabled'>Account Settings</a>
                    <Link routeName="Login"><a class = 'menuButtonLogin'>Login</a></Link>
                </div>
                <div class = 'mainContainer'>
                    <SceneView component={descriptor.getComponent()} navigation={descriptor.navigation}/>
                </div>
            </div>
        );
    }
}

const AppNavigator = createNavigator(
    SidebarView,
    SwitchRouter({
        Login,
        Admin,
    }), {}
);

const App = createBrowserApp(AppNavigator);

export default App;
