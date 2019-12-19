import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
            Team
        </NavigationItem>
        {props.isAuthenticated ? (
            <NavigationItem link="/favoritePlayers">
                Favorite players
            </NavigationItem>
        ) : null}
        {props.isAuthenticated ? (
            <NavigationItem link="/registrationPlayer">
                Registration player
            </NavigationItem>
        ) : null}
        {!props.isAuthenticated ? (
            <NavigationItem link="/auth">Authenticate</NavigationItem>
        ) : (
            <NavigationItem link="/logout">Logout</NavigationItem>
        )}
    </ul>
);

export default NavigationItems;
