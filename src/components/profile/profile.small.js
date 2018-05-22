import React, {Fragment} from "react";
import PropTypes from 'prop-types';

const Small = ({image, name}) => ( // { image: "..." }
    <Fragment>
        <img src={image} className="small-image" alt="SmallAvatar!" />
        {name}
    </Fragment>
);
Small.propTypes = {
    image: PropTypes.string
}
Small.defaultProps = {
    image: "/noimg.png"
}
export default Small;