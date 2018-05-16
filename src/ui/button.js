import React from "react";
import PropTypes from "prop-types";

const Button = ({type, children, ...props}) => {
    return <button className={type} {...props}>
        {children.toUpperCase()}
        </button>
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
};
Button.defaultProps = {
    type: "default-button"
};

class ButtonAlternative extends React.Component{
    static propTypes = {
        type: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired
    }
    static defaultProps = {
        type: "default-button"
    }
    render(){
        const {type, children, ...props} = this.props;
        return (
            <button className={type} {...props}>
                {children.toUpperCase()}
            </button>
        )

    }
}



export default Button;