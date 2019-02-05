import React from "react";
import { createNavigator, SwitchRouter, SceneView } from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";
window.__DEV__ = true;

function Login() {
    return (
        <div>
            <h2>Login Screen</h2>
        </div>
    );
}
Login.path = "";
Login.navigationOptions = {
    title: "Login",
    linkName: "Login Page"
};

function Admin() {
    return (
        <div>
            <h2>Home Screen</h2>
        </div>
    );
}
Admin.path = "";
Admin.navigationOptions = {
    title: "Admin",
    linkName: "Admin Page"
};

const Profile = ({ navigation }) => (
    <div>
        <h2>{navigation.getParam("name")}'s Profile</h2>
        <Link routeName="Home">Go Home</Link>
    </div>
);
Profile.path = "person/:name";
Profile.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name"),
    linkName: "Profile Page"
});

class SidebarView extends React.Component {
    render() {
        const { descriptors, navigation } = this.props;
        const activeKey = navigation.state.routes[navigation.state.index].key;
        const descriptor = descriptors[activeKey];
        return (
            <div style={{ display: "flex", height: "100%", justifyContent: "stretch" }}>
                <div style={{width: 300, backgroundColor: "#efefef", borderRight: "1px solid #99b"}}>
                    <h1>Navigation</h1>
                    <Link routeName="Login">Login</Link>
                    <br/><br/>
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
