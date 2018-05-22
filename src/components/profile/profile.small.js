import React from "react";
import PropTypes from 'prop-types';

const Small = ({image}) => ( // { image: "..." }
    <img src={image} className="small-image" alt="SmallAvatar!" />
);
Small.propTypes = {
    image: PropTypes.string
}
Small.defaultProps = {
    image: "/noimg.png"
}
export default Small;