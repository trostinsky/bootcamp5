import React from "react";
import PropTypes from 'prop-types';

const Nano = ({image}) => (
    <img src={image} className="nano-image" alt="NanoAvatar!" />
);
Nano.propTypes = {
    image: PropTypes.string
}
Nano.defaultProps = {
    image: "/noimg.png"
}
export default Nano;