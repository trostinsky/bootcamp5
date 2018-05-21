import React, {Component} from 'react';
import PropTypes from "prop-types";
import Button from './Button';
import RenderIf from "../common/renderIf";
import './timer.css';

class Timer extends Component {
    static propTypes = {
        time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        autoStart: PropTypes.bool
    }

    static defaultProps = {
        time: 60,
        step: 1,
        autoStart: false
    }

    state = {
        time: this.props.time,
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
        console.log(`${this.state.time} - tick`);
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
        if(this.state.time <= 0) {
            this.initialState();
        }
        this.toggleIsStarted(true);
        this.timerId = setInterval(this.timerTick, 100);
    };

    toggleIsStarted = (bool) => {
        this.setState({
            isStarted: bool,
        })
    }

    stopHandler = () => {
        clearInterval(this.timerId);
        this.timerId = null;
        this.toggleIsStarted(false);
    };
    resetHandler = () => {
        this.setState({
            time: 0
        })
    };

    componentDidMount(){
        if(this.props.autoStart){
            this.startHandler();
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.time % this.props.step === 0;
    }

    componentWillUnmount(){
        this.stopHandler();
    }

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

export default Timer;























