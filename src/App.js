import React from "react";
import { createNavigator, SwitchRouter, SceneView } from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";

import { initialize } from './Firebase';
import Admin from './views/Admin';
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
            <div style={{ display: "flex", height: "100%", justifyContent: "stretch" }}>
                <div style={{width: 300, backgroundColor: "#efefef", borderRight: "1px solid #99b"}}>
                    <h1>Navigation</h1>
                    <Link routeName="Login">Login</Link>
                    <Link routeName="Admin">Admin</Link>
                </div>
                <div>
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
