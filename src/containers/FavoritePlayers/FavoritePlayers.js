import React, { Component } from 'react';

import { connect } from 'react-redux';
import PlayerCard from '../../components/UI/PlayerCard/PlayerCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './FavoritePlayers.module.css';
import * as action from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-players';

class FavoritePlayers extends Component {
    componentDidMount() {
        this.props.onFetchFavoritePlayer(this.props.token, this.props.userId);
    }

    goToMoreInfoHandler = () => {
        this.props.history.push('/moreInfo');
    };

    render() {
        let players = null;
        if (this.props.favoritePlayers) {
            players = this.props.favoritePlayers.map(player => {
                return (
                    <PlayerCard
                        key={player.id}
                        name={player.name}
                        shoot={player.shoot}
                        pass={player.pass}
                        defense={player.defense}
                        physical={player.physical}
                        position={player.position}
                        goToMoreInfo={this.goToMoreInfoHandler}
                        isAuth={this.props.isAuthenticated}
                    />
                );
            });
        }

        if (this.props.loading) {
            players = <Spinner />;
        }
        return (
            <div>
                <h1>Favorite Players</h1>
                <div className={classes.FavoritePlayer}>{players}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        favoritePlayers: state.favoritePlayers.players,
        loading: state.favoritePlayers.loading,
        token: state.auth.token,
        isAuthenticated: state.auth.token !== null,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchFavoritePlayer: (token, userId) => dispatch(action.fetchFavoritePlayer(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(FavoritePlayers, axios));
