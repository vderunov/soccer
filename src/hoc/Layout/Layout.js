import React from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Toolbar/Toolbar';

const Layout = props => (
    <Aux>
        <Toolbar isAuth={props.isAuthenticated} />
        <main>{props.children}</main>
    </Aux>
);

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);
