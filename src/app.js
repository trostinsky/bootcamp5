import React, {Fragment, Component} from 'react';
import Post from './components/post';
import PostList from './components/postsList'
import Timer from './components/timer';
import Profile from './components/profile/profile';
import Nano from './components/profile/profile.nano';
import RenderIf from "./common/renderIf";
import Manager from './components/profile/manager';

class App extends Component {

    state = {
        showTimer: false,
        image: '/panda1.jpg',
    }

    onChangeImage = () => {
        this.setState({
            image: '/cat1.jpeg',
        })
    }

    onDelete = () => {
        this.setState({
            image: void 0,
        })
    }

    onDefaultImage = () => {
        this.setState({
            image: "/panda1.jpg"
        })
    }

    switchTimer = () => {
        this.setState((prevState) => {
            return {
                showTimer: !prevState.showTimer
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div><Nano image={this.state.image}/> Username</div>
                <Timer time="5" onTimeOut={this.switchTimer}/>
                <button onClick={this.switchTimer}>Переключить таймер</button>
                <RenderIf condition={this.state.showTimer}>
                    <Timer time="6000" step="2" autoStart/>
                </RenderIf>
                <Timer time='0' reverse={false} autoStart/>
                <Manager image={this.state.image}
                         onChangeImage={this.onChangeImage}
                         onDelete={this.onDelete}
                         onDefaultImage={this.onDefaultImage}
                />
            </Fragment>
        );
    }
}

export default App;