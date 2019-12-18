import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../../store/actions/index';
import PlayerCard from '../../components/UI/PlayerCard/PlayerCard';
import classes from './Team.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class Team extends Component {
    componentDidMount() {
        this.props.onFetchPlayers();
    }

    // shouldComponentUpdate(nextProps) {
    //     return nextProps.players !== this.props.players;
    // }

    getIdClickedPlayerHandler = event => {
        const idPlayer = event.target.closest('[data-id]').dataset.id;
        const favoritePlayerData = this.props.players.find(
            player => player.id === idPlayer
        );

        if (event.target.dataset.btn === 'moreInfo') {
            this.props.onAddMoreInfoPlayer(favoritePlayerData);
            this.props.history.push('/moreInfo');
        }

        if (event.target.dataset.btn === 'favorites') {
            this.props.onAddFavoritePlayer(
                favoritePlayerData,
                this.props.token
            );
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
                    />
                );
            });
        }

        if (this.props.loading) {
            players = <Spinner />;
        }

        return (
            <div className={classes.Team}>
                <h1>Team</h1>
                {players}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players.players,
        loading: state.players.loading,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPlayers: () => dispatch(action.fetchPlayers()),
        onAddFavoritePlayer: (favoritePlayerData, token) =>
            dispatch(action.addFavoritePlayer(favoritePlayerData, token)),
        onAddMoreInfoPlayer: player =>
            dispatch(action.addMoreInfoPlayer(player))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
