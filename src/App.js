import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Redirect, Route, Switch } from 'react-router-dom';
import Team from './containers/Team/Team';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const RegistrationPlayer = lazy(() => import('./containers/RegistrationPlayer/RegistrationPlayer'));
const MoreInfo = lazy(() => import('./containers/MoreInfo/MoreInfo'));
const FavoritePlayers = lazy(() => import('./containers/FavoritePlayers/FavoritePlayers'));
const Auth = lazy(() => import('./containers/Auth/Auth'));
const EditPlayer = lazy(() => import('./containers/EditPlayer/EditPlayer'));

const App = props => {
    const { onTryAutoSignup } = props;

    useEffect(() => {
        onTryAutoSignup();
    }, [onTryAutoSignup]);

    let routes = (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/moreInfo" exact component={MoreInfo} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/" exact component={Team} />
                <Redirect to="/" />
            </Switch>
        </Suspense>
    );

    if (props.isAuthenticated) {
        routes = (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/registrationPlayer" exact component={RegistrationPlayer} />
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/moreInfo" exact component={MoreInfo} />
                    <Route path="/editPlayer" exact component={EditPlayer} />
                    <Route path="/favoritePlayers" exact component={FavoritePlayers} />
                    <Route path="/" exact component={Team} />
                    <Redirect to="/" />
                </Switch>
            </Suspense>
        );
    }

    return (
        <div>
            <Layout>{routes}</Layout>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
