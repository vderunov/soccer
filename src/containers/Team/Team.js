import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../../store/actions/index';
import PlayerCard from '../../components/UI/PlayerCard/PlayerCard';
import classes from './Team.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-players';
import PropTypes from 'prop-types';

export class Team extends Component {
    componentDidMount() {
        this.props.onFetchPlayers();
    }

    getIdClickedPlayerHandler = event => {
        const idPlayer = event.target.closest('[data-id]').dataset.id;
        const playerData = this.props.players.find(player => player.id === idPlayer);

        if (event.target.dataset.btn === 'moreInfo') {
            this.props.onAddMoreInfoPlayer(playerData);
            this.props.history.push('/moreInfo');
        }

        if (event.target.dataset.btn === 'editPlayer') {
            this.props.onEditPlayer(playerData);
            this.props.history.push('/editPlayer');
        }

        if (event.target.dataset.btn === 'favorites') {
            if (
                this.props.favoritePlayers.length === 0 ||
                !this.props.favoritePlayers.find(el => el.name.toLowerCase() === playerData.name.toLowerCase())
            ) {
                this.props.onAddFavoritePlayer(playerData, this.props.token);
            }
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
                        goToEditPlayer={this.getIdClickedPlayerHandler}
                        addToFavorites={this.addToFavorites}
                        addFavoritePlayer={this.getIdClickedPlayerHandler}
                        isAuth={this.props.isAuthenticated}
                    />
                );
            });
        }

        if (this.props.loadingPlayers || this.props.loading) {
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
        loading: state.favoritePlayers.loading,
        loadingPlayers: state.players.loading,
        token: state.auth.token,
        isAuthenticated: state.auth.token !== null,
        favoritePlayers: state.favoritePlayers.favoritePlayers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPlayers: () => dispatch(action.fetchPlayers()),
        onAddFavoritePlayer: (favoritePlayerData, token) =>
            dispatch(action.addFavoritePlayer(favoritePlayerData, token)),
        onAddMoreInfoPlayer: player => dispatch(action.addMoreInfoPlayer(player)),
        onEditPlayer: player => dispatch(action.editPlayer(player))
    };
};

Team.propTypes = {
    players: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    loadingPlayers: PropTypes.bool,
    token: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    favoritePlayers: PropTypes.array,
    onFetchPlayers: PropTypes.func,
    onAddFavoritePlayer: PropTypes.func,
    onAddMoreInfoPlayer: PropTypes.func,
    onEditPlayer: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Team, axios));
