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

    changeControlled = ({x, y, r}) => {
        this.setState((prevState) => {
            const {balls} = prevState;
            // if(balls[this.myBallIndex].x <= balls[this.myBallIndex].r * 10 / 2) {
            //     return false;
            // }
            return {
                balls: [...balls.slice(0, this.myBallIndex),
                    {
                        ...balls[this.myBallIndex],
                        x,
                        y,
                        r
                    },
                    ...balls.slice(this.myBallIndex + 1)]
            }
        })
    }

    moveHandler = ({clientX, clientY}) => {
        this.debounce = setTimeout(() => {
            this.debounce = null;
        }, 200);
        if(!this.debounce){
            return false
        }
        this.changeControlled({
            x: clientX,
            y: clientY
        })
    }


    render(){
        const {balls}= this.state

        return (
            <div className='container' onMouseMove={this.moveHandler}>
                {balls.map((ball, index)=> <Ball key={index}{...ball}/>)}
            </div>




        )
    }
}