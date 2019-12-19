import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../../store/actions/index';
import PlayerCard from '../../components/UI/PlayerCard/PlayerCard';
import classes from './Team.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-players';

class Team extends Component {
    componentDidMount() {
        this.props.onFetchPlayers();
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.players !== this.props.players;
    // }

    getIdClickedPlayerHandler = event => {
        const idPlayer = event.target.closest('[data-id]').dataset.id;
        const favoritePlayerData = this.props.players.find(player => player.id === idPlayer);

        if (event.target.dataset.btn === 'moreInfo') {
            this.props.onAddMoreInfoPlayer(favoritePlayerData);
            this.props.history.push('/moreInfo');
        }

        if (event.target.dataset.btn === 'favorites') {
            this.props.onAddFavoritePlayer(favoritePlayerData, this.props.token);
        }
    };

    render() {
        let players = null;
        if (this.props.players) {
            players = this.props.players.map(player => {
                return (
                    <PlayerCard
                        key={player.id}
                        id={player.id}
                        name={player.name}
                        shoot={player.shoot}
                        pass={player.pass}
                        defense={player.defense}
                        physical={player.physical}
                        position={player.position}
                        goToMoreInfo={this.getIdClickedPlayerHandler}
                        addToFavorites={this.addToFavorites}
                        addFavoritePlayer={this.getIdClickedPlayerHandler}
                        isAuth={this.props.isAuthenticated}
                    />
                );
            });
        }

        if (this.props.loading) {
            players = <Spinner />;
        }

        return (
            <>
                <h1>Team</h1>
                <div className={classes.Team}>{players}</div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players.players,
        loading: state.players.loading,
        token: state.auth.token,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPlayers: () => dispatch(action.fetchPlayers()),
        onAddFavoritePlayer: (favoritePlayerData, token) =>
            dispatch(action.addFavoritePlayer(favoritePlayerData, token)),
        onAddMoreInfoPlayer: player => dispatch(action.addMoreInfoPlayer(player))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Team, axios));
