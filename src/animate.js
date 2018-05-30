import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';

const Ball = (props) => {
    return (
        <div className='ball' style={{
            transform: `translate(${props.movingX}px, ${props.movingY}px)`
        }}/>
    );
};

Ball.propTypes = {
    movingX: PropTypes.number,
    movingY: PropTypes.number
};
Ball.defaultProps = {
    movingX: 0,
    movingY: 0
};

class Cradle extends Component {
    state = {
        balls: [{
            movingX: 0,
            movingY: 0
        }, {
            movingX: 0,
            movingY: 0
        }, {
            movingX: 50,
            movingY: -50
        }]
    }

    animateLeftBottom = () => {
        return new Promise((resolve, reject) => {
            const animation = () => {
                this.setState((prevState) => {
                    const dx = 50 / 60;
                    const {balls} = prevState;
                    const copyBalls = [...balls];
                    copyBalls[0].movingX = balls[0].movingX + dx;
                    copyBalls[0].movingY = balls[0].movingY + dx;
                    if (copyBalls[0].movingX >= 0) {
                        copyBalls[0].movingX = 0;
                    }
                    if (copyBalls[0].movingY >= 50) {
                        copyBalls[0].movingY = 0;
                    }
                    if (copyBalls[0].movingX >= 0 &&
                        copyBalls[0].movingY >= 0) {
                        clearInterval(this[animationName]);
                        resolve();
                    } else {
                        requestAnimationFrame(animation)
                    }
                    return {
                        balls: copyBalls
                    }
                })
            };
            const animationName = Symbol("Left-Bottom");
            this[animationName] = requestAnimationFrame(animation);
        })
    }

    animateLeftTop = () => {
        return new Promise((resolve, reject) => {
            const animation = () => {
                this.setState((prevState) => {
                    const dx = 50 / 60;
                    const {balls} = prevState;
                    const copyBalls = [...balls];
                    copyBalls[0].movingX = balls[0].movingX - dx;
                    copyBalls[0].movingY = balls[0].movingY - dx;
                    if (copyBalls[0].movingX <= -50) {
                        copyBalls[0].movingX = -50;
                    }
                    if (copyBalls[0].movingY <= -50) {
                        copyBalls[0].movingY = -50;
                    }
                    if (copyBalls[0].movingX <= -50 &&
                        copyBalls[0].movingY <= -50) {
                        clearInterval(this[animationName]);
                        resolve();
                    } else {
                        requestAnimationFrame(animation);
                    }
                    return {
                        balls: copyBalls
                    }
                })
            };
            const animationName = Symbol("Left-Top");
            this[animationName] = requestAnimationFrame(animation);
        })
    }

    componentDidMount() {
        this.animateLeftTop()
            .then(() => {
                return this.animateLeftBottom()
            })
            .then(() => {
                console.log("Animation is over!");
            })
    }

    render() {
        return (
            <div className="ball-wrapper">
                {this.state.balls.map((ball) => (
                    <Ball movingX={ball.movingX} movingY={ball.movingY}/>
                ))}

            </div>

        )
    }
}


export default Cradle;