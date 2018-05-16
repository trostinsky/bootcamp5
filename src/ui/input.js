import React from "react";
import PropTypes from "prop-types";

const Input = ({value, placeholder, ...props}) => {
    return <input {...props} className={`input`}
                  value={value}
                  placeholder={placeholder}
    />
}
Input.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};
export default Input;