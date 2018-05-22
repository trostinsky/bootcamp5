import React, {Fragment} from "react";
import PropTypes from 'prop-types';




const Nano = ({image, name}) => (
    <Fragment>
        <img src={image} className="nano-image" alt="NanoAvatar!"/>
        {name}
    </Fragment>
);
Nano.propTypes = {
    image: PropTypes.string
}
Nano.defaultProps = {
    image: "/noimg.png"
}
export default Nano;