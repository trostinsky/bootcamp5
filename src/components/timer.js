import React, {Component} from 'react';
import Button from './Button';
import './timer.css';

class Timer extends Component {
    state = {
        time: 60,
        isStarted: false,
        progressBar: 100,
    };

    timerId = null;

    timerValues

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

    startHandler = () => {
        if (this.timerId !== null) {
            return;
        }
        this.setState({
            progressBar: 100,
            time: 60,
        });
        this.timerId = setInterval(() => {
            if (this.state.time === 0) {
                this.stopHandler();
                return;
            }
            this.setState((prevState) => {
                return {
                    time: prevState.time - 1,
                    progressBar: prevState.progressBar - (prevState.progressBar/prevState.time)
                }

            });
        }, 10);
        this.setState({
            isStarted: true,
        })
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
                <Button isStarted={this.state.isStarted}
                        startHandler={this.startHandler}
                        stopHandler={this.stopHandler}
                />
                <div className='progressBar' style={{width: this.state.progressBar + '%'}}></div>
            </div>

        )
    }
}

export default Timer