import React from 'react';
import Proptypes from 'prop-types';

const Button = ({isStarted, startHandler, stopHandler}) => {

        const start = <button onClick={startHandler}>Start</button>;
        const stop = <button onClick={stopHandler}>Stop</button>;
        return isStarted ? stop : start
}

Button.propTypes = {
    startHandler:Proptypes.func.isRequired,
    stopHandler:Proptypes.func.isRequired,
    isStarted:Proptypes.bool.isRequired,
}

export default Button;