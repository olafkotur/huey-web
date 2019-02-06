import React from "react";
import { createNavigator, SwitchRouter, SceneView } from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";
import './Stylesheet.css'

import { initialize } from './Firebase';
import CreateEvent from './views/CreateEvent';
import Login from './views/Login';

class SidebarView extends React.Component {

    componentDidMount = () => {
        initialize();
    }

    render() {
        const { descriptors, navigation } = this.props;
        const activeKey = navigation.state.routes[navigation.state.index].key;
        const descriptor = descriptors[activeKey];
        return (
            <div class='mainContainer'>
                <div class='almostWhiteBackground'>
                    <img src="https://thehueyproject.files.wordpress.com/2019/02/cropped-logo-2.png?w=740&h=740" alt="Huey Logo" class = 'logoImage'></img>
                    <Link routeName="Admin"><span class="menuButton">Protest Setup</span></Link>
                    <Link routeName="Admin"><span class="menuButton">Generate QR Codes</span></Link>
                    <span class='menuButtonDisabled'>View Shared Media</span>
                    <span class='menuButtonDisabled'>Account Settings</span>
                    <div class='loginDiv'>
                        <Login/>
                    </div>
                    <div class='loginButtonDiv'>
                        <Link routeName="Login"><span class='menuButtonLogin'>Login</span></Link>
                    </div>
                </div>
                <div class='mainContainer'>
                    <SceneView component={descriptor.getComponent()} navigation={descriptor.navigation}/>
                </div>
            </div>
        );
    }
}

const AppNavigator = createNavigator(
    SidebarView,
    SwitchRouter({
        create: CreateEvent,
    }), {}
);

const App = createBrowserApp(AppNavigator);

export default App;