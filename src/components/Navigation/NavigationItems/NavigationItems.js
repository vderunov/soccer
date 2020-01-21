import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = ({ isAuthenticated }) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
            Team
        </NavigationItem>
        {isAuthenticated ? <NavigationItem link="/favoritePlayers">Favorite players</NavigationItem> : null}
        {isAuthenticated ? <NavigationItem link="/registrationPlayer">Registration player</NavigationItem> : null}
        {!isAuthenticated ? (
            <NavigationItem link="/auth">Authenticate</NavigationItem>
        ) : (
            <NavigationItem link="/logout">Logout</NavigationItem>
        )}
    </ul>
);

export default NavigationItems;
