import React from 'react';

import classes from './Button.module.css';

const Button = ({ disabled, clicked, data, children }) => (
    <button disabled={disabled} onClick={clicked} className={classes.Button} data-btn={data}>
        {children}
    </button>
);

export default Button;
