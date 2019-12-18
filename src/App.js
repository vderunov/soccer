import React, { lazy, Suspense } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Redirect, Route, Switch } from 'react-router-dom';
import Team from './containers/Team/Team';
import RegistrationPlayer from './containers/RegistrationPlayer/RegistrationPlayer';
import Logout from './containers/Auth/Logout/Logout';

const MoreInfo = lazy(() => import('./containers/MoreInfo/MoreInfo'));

const FavoritePlayers = lazy(() =>
    import('./containers/FavoritePlayers/FavoritePlayers')
);

const Auth = lazy(() => import('./containers/Auth/Auth'));

function App() {
    let routes = (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route
                    path="/registrationPlayer"
                    exact
                    component={RegistrationPlayer}
                />
                <Route path="/auth" exact component={Auth} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/moreInfo" exact component={MoreInfo} />
                <Route
                    path="/favoritePlayers"
                    exact
                    component={FavoritePlayers}
                />
                <Route path="/" exact component={Team} />
                <Redirect to="/" />
            </Switch>
        </Suspense>
    );

    return (
        <div>
            <Layout>{routes}</Layout>
        </div>
    );
}

export default App;
