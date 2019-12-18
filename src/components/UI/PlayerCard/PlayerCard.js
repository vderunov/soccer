import React from 'react';

import Button from '../Button/Button';
import classes from './PlayCard.module.css';
import { withRouter } from 'react-router-dom';

const PlayerCard = props => {
    return (
        <div className={classes.PlayerCard} data-id={props.id}>
            <h3>{props.name}</h3>
            <p>Skills:</p>
            <ul>
                <li>Shoot: {props.shoot}</li>
                <li>Pass: {props.pass}</li>
                <li>Defense: {props.defense}</li>
                <li>Physical: {props.physical}</li>
                <li>Position: {props.position}</li>
            </ul>
            <Button clicked={props.goToMoreInfo} data="moreInfo">
                More info
            </Button>
            <Button clicked={props.addFavoritePlayer} data="favorites">
                Add to favorites
            </Button>
            <Button clicked={() => {}}>Edit</Button>
        </div>
    );
};

export default withRouter(PlayerCard);
