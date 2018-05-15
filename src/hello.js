import React from "react";

// example setState inside
let state = { a: 1};
const setState = (newState, callback = () => {}) => {
    const oldState = state;
    setTimeout(() => {
        state = {
            ...oldState,
            ...newState
        }
        callback();
        // this.render();
    }, 100);
};
setState({ b: 2});

export const Hello = (props) => {
    return <table>
        <tbody>
        <tr>
            <td>Name:</td>
            <td>{props.name}</td>
        </tr>
        <tr>
            <td>Skills:</td>
            <td>{props.skill}</td>
        </tr>
        </tbody>
    </table>
}


export default class HelloClassState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            skill: this.props.skill
        }
        setTimeout(() => {
            this.setState({
                skill: "Javascript"
            });
        }, 5000);
    }
    render(){
        const {data, skill, ...props} = this.props;
        return <Hello skill={this.state.skill} {...props} />
        // <Hello name="Vlad" skill="Javascript"/>

    }
}

export class HelloClassProps extends React.Component{
    constructor(props){
        super(props);

        // super выполняет следующую строку:
        this.props = props;
    }
    render(){
        const {data, skill, ...props} = this.props;
        const halfSkill = skill.split("/")[0];
        return <Hello skill={halfSkill} {...props} />
        // <Hello name="Vlad" skill="Javascript"/>

    }
}


const data = {
    name: "Vlad",
    skill: "Javascript"
}