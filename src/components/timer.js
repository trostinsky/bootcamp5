import React, {Component} from 'react';
import Button from './Button';
import RenderIf from "../common/renderIf";
import './timer.css';

class Timer extends Component {
    state = {
        time: 60,
        isStarted: false,
        progressBar: 100,
    };

    get timerValues() {
        let min = Math.floor(this.state.time / 60);
        let sec = this.state.time % 60;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        return {
            minutes: min,
            seconds: sec
        }
    }

    timerTick = () => {
        if (this.state.time <= 0) {
            this.stopHandler();
            return;
        }
        this.setState((prevState) => {
            return {
                time: prevState.time - 1,
                progressBar: prevState.progressBar - (prevState.progressBar/prevState.time)
            }

        });
    }

    initialState = () => {
        this.setState({
            progressBar: 100,
            isStarted: true,
            time: 60
        });
    }

    startHandler = () => {
        if (this.timerId) {
            return;
        }
        this.initialState();
        this.timerId = setInterval(this.timerTick, 10);
    };

    stopHandler = () => {
        clearInterval(this.timerId);
        this.timerId = null;
        this.setState({
            isStarted: false,
        })
    };
    resetHandler = () => {
        this.setState({
            time: 0
        })
    };

    render() {
        return (
            <div>
                <h3>{this.timerValues.minutes}:{this.timerValues.seconds}</h3>
                <RenderIf condition={this.state.isStarted}>
                    <button onClick={this.stopHandler}>Stop</button>
                </RenderIf>
                <RenderIf condition={!this.state.isStarted}>
                    <button onClick={this.startHandler}>Start</button>
                </RenderIf>
                <div className='progressBar' style={{width: this.state.progressBar + '%'}}></div>
            </div>

        )
    }
}

export default Timer