import React from 'react';

import classes from './Button.module.css';

const Button = props => (
    <button disabled={props.disabled} onClick={props.clicked} className={classes.Button} data-btn={props.data}>
        {props.children}
    </button>
);

export default Button;
