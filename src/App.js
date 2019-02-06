import React from "react";
import { createNavigator, SwitchRouter, SceneView } from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";
import './Stylesheet.css'

import { initialize } from './Firebase';
import Login from './views/Login';
import Home from './views/Home';
import CreateEvent from './views/CreateEvent';
import Events from './views/Events';


class SidebarView extends React.Component {

    componentWillMount = async () => {
        await initialize();
    }

    // Right hand side section of the web app
    mainView = () => {
        const { descriptors, navigation } = this.props;
        const activeKey = navigation.state.routes[navigation.state.index].key;
        const descriptor = descriptors[activeKey];
        const logged = localStorage.getItem('loggedIn').includes('true');

        if (logged) {
            return (
                <SceneView component={descriptor.getComponent()} navigation={descriptor.navigation}/>
            );
        }
        else {
            return (
                <h1>You must log in with an Admin account to continue</h1>
            );
        }
    }

    render() {
        return (
            <div class='mainContainer'>
                <div class='almostWhiteBackground'>
                    <a href="/home"><img src="https://thehueyproject.files.wordpress.com/2019/02/cropped-logo-2.png?w=740&h=740" alt="Huey Logo" class = 'logoImage'></img></a>
                    <Link routeName="events"><span class="menuButton">My Events</span></Link>
                    <Link routeName="create"><span class="menuButton">Create Event</span></Link>
                    <span class='menuButtonDisabled'>View Shared Media</span>
                    <span class='menuButtonDisabled'>Account Settings</span>
                    <div class='loginButtonDiv'>
                        <Login/>
                    </div>
                </div>

                <div class='sceneBackground'>
                    <SceneView component={descriptor.getComponent()} navigation={descriptor.navigation}/>
                </div>
            </div>
        );
    }
}

Home.navigationOptions = {
    title: "Home"
};

CreateEvent.navigationOptions = {
    title: "Create Event"
};

Events.navigationOptions = {
    title: "Events"
};

const AppNavigator = createNavigator(
    SidebarView,
    SwitchRouter({
        home: Home,
        create: CreateEvent,
        events: Events
    }), {}
);

const App = createBrowserApp(AppNavigator);

export default App;