import React, {Component} from "react";
import Ball from './Ball.js'
import "./Ball.css"


export default class Game extends Component{
    state={
        balls: [
            {
                x: 5,
                y: 5,
                r: 1
            },
            {
                x: 195,
                y: 5,
                r: 1
            },
            {
                x: 100,
                y: 100,
                r: 1,
                controlled: true,
            },
            {
                x: 195,
                y: 195,
                r: 1
            },
            {
                x: 5,
                y: 195,
                r: 1
            }
        ]

    };

    get myBallIndex(){
        return this.state.balls.findIndex((ball) => ball.controlled);
    }

    componentDidMount(){
        window.addEventListener('keydown', this.handlePress);
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handlePress);
    }

    moveLeft = () => {
        this.setState((prevState) => {
            const {balls} = prevState;
            if(balls[this.myBallIndex].x <= balls[this.myBallIndex].r * 10 / 2) {
                return false;
            }
            return {
                balls: [...balls.slice(0, this.myBallIndex),
                    {
                        ...balls[this.myBallIndex],
                        x: balls[this.myBallIndex].x - 5
                    },
                    ...balls.slice(this.myBallIndex + 1)]
            }
        })
    }

    handlePress = (event) => {
        event.preventDefault();
        switch(event.keyCode){
            case 37:
                this.moveLeft();

        }
    };


    render(){
        const {balls}= this.state

        return (
            <div className='container' >
                {balls.map((ball, index)=> <Ball key={index}{...ball}/>)}
            </div>




        )
    }
}