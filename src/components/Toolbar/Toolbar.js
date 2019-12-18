import React from 'react';

import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';
import classes from './Toolbar.module.css';

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <Logo />
        <nav>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default Toolbar;
