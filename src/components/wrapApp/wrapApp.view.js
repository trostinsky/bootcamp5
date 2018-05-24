import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";

export const Button = ({children, onClick, ...props}) => {
    return (
        <button className="wrap-app__button"
                onClick={onClick}
                {...props}
        >
            {children}
        </button>
    )
};

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
}

const ListItem = ({checked, children}) => {
    return (
        <li className={`wrap-app__list-item
                        ${checked ? 'wrap-app__list-item--checked' : ''}
        `}>
            <input type="checkbox"
                   checked={checked}/>
            {children}
        </li>
    )
}

export const List = ({title, items}) => {
    return (
        <div className="wrap-app__list">
            <h3>{title}</h3>
            <ul>
                {items && items.map((item, index) => (
                    <ListItem checked={item.checked}>
                        {item.title}
                    </ListItem>
                ))}
            </ul>
        </div>
    )
}

class AddForm extends Component {
    state = {
        value: ''
    }

    changeValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    clickHandler = () => {
        this.props.onAdd(this.state.value);
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div className="wrap-app__form-wrapper">
                <input className="wrap-app__input"
                       onChange={this.changeValue}
                       value={this.state.value}/>
                <Button onClick={this.clickHandler}>Add</Button>
            </div>
        )
    }
}

export {AddForm};