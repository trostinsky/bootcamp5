import React from 'react';
import "./Ball.css"
import PropTypes from 'prop-types';

const Ball = ({x, y, r, controlled}) => {

    return (

        <div className={`Ball ${controlled ? 'active' : ''}`} style={{left: x + 'px', top: y + 'px', width: (r * 10) + 'px', height: (r * 10) + 'px'}}>

        </div>

    )
};

Ball.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    r: PropTypes.number

}

Ball.defaultProps = {
    x: 0,
    y: 0,
    r: 1
}

export default Ball;