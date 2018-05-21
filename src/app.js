import React, {Fragment, Component} from 'react';
import Post from './components/post';
import PostList from './components/postsList'
import Timer from './components/timer';
import RenderIf from "./common/renderIf";

class App extends Component{

    state = {
        showTimer: false
    }

    switchTimer = () => {
        this.setState((prevState) => {
            return {
                showTimer: !prevState.showTimer
            }
        })
    }
    render(){
        return (
            <Fragment>
                <Timer />
                <button onClick={this.switchTimer}>Переключить таймер</button>
                <RenderIf condition={this.state.showTimer}>
                    <Timer time="6000" step="5" autoStart/>
                </RenderIf>
            </Fragment>
        );
    }
}
export default App;