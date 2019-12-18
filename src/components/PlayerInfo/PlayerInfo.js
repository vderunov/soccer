import React from 'react';

import classes from './PlayerInfo.module.css';
import Button from '../UI/Button/Button';

const PlayerInfo = props => {
    return (
        <div className={classes.PlayerInfo}>
            <h1>{props.player.name}</h1>
            <p>{props.player.info}</p>
            <Button clicked={props.clicked}>Return to the main page</Button>
        </div>
    );
};

export default PlayerInfo;
