import React, {Fragment, Component} from 'react';
import PostList from './components/postsList'
import Timer from './components/timer';
import Profile from './components/profile/profile';
import Nano from './components/profile/profile.nano';
import RenderIf from "./common/renderIf";
import Manager from './components/profile/manager';
import withImage from './components/profile/withImage';
import Game from "./components/game";
import WrapApp from "./components/wrapApp/wrapApp.controller";
import {BrowserRouter, Route, Redirect, Link, NavLink, Switch} from "react-router-dom";

const PrivateRoute = (props) => {
    const isAuth = localStorage.getItem("auth");
    if(isAuth){
        return <Route {...props} />
    } else {
        return <Redirect to="/noauth/" />
    }
}

const NanoProfile = withImage(Nano);

const PostsPage = (props) => {
    return (
        <Fragment>
            <h2>Author: {props.match.params.name}</h2>
            <h3>Article ID: {props.match.params.id}</h3>
            <PostList/> {/* React.createComponent(PostList, {name: "Vlad"})*/}
        </Fragment>
    )
}
const TimerPage = () => (
    <Fragment>
        <Timer time="5"/>
        <Timer time="6000" step="2" autoStart/>
        <Timer time='0' reverse={false} autoStart/>
    </Fragment>
);
const ProfilePage = () => (
    <Fragment>
        <div><NanoProfile/> Username</div>
        <Manager/>
    </Fragment>
);

const NotFound = () => <h1>This page not found</h1>;
const NotAuth = () => <h1>This page only for authorized users</h1>;
const Menu = () => (
    <nav>
        <p>
            <NavLink to="/articles/">Posts</NavLink>
        </p>
        <p>
            <NavLink to="/timer/">Timers</NavLink>
        </p>
        <p>
            <NavLink to="/profile/">Profile</NavLink>
        </p>
        <p>
            <Link to="/whoisthiswhatthefuck/">Not Found</Link>
        </p>
    </nav>
);
const logIn = () => {
    localStorage.setItem("auth", true);
};
const logOut = () => {
    localStorage.removeItem("auth");
};
const App = () => (
    <WrapApp />
);

export default App;

// Примерно так работает реакт роутер
switch (window.location.pathname) {
    case "/test/": {
        // render component Test
    }
    case "/state/": {
        // render component State
    }
    default: {
        // render 404 error
    }
}