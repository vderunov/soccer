import React, { Component } from 'react';

import { connect } from 'react-redux';
import PlayerCard from '../../components/UI/PlayerCard/PlayerCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './FavoritePlayers.module.css';
import * as action from '../../store/actions/index';
import PropTypes from 'prop-types';

class FavoritePlayers extends Component {
    componentDidMount() {
        this.props.onFetchFavoritePlayer(this.props.token, this.props.userId);
    }

    goToEditPlayer = () => {
        this.props.history.push('/editPlayer');
    };

    getIdClickedPlayerHandler = event => {
        const idPlayer = event.target.closest('[data-id]').dataset.id;
        const playerData = this.props.favoritePlayers.find(player => player.id === idPlayer);

        if (event.target.dataset.btn === 'moreInfo') {
            this.props.onAddMoreInfoPlayer(playerData);
            this.props.history.push('/moreInfo');
        }

        if (event.target.dataset.btn === 'removePlayerFromFavorite') {
            this.props.onDeleteFavoritePlayer(playerData);
        }
    };

    render() {
        let players = null;
        if (this.props.favoritePlayers) {
            players = this.props.favoritePlayers.map(player => {
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
                        goToEditPlayer={this.goToEditPlayer}
                        isAuth={this.props.isAuthenticated}
                        removePlayerFromFavorite={this.getIdClickedPlayerHandler}
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
        favoritePlayers: state.favoritePlayers.favoritePlayers,
        loading: state.favoritePlayers.loading,
        token: state.auth.token,
        isAuthenticated: state.auth.token !== null,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchFavoritePlayer: (token, userId) => dispatch(action.fetchFavoritePlayer(token, userId)),
        onDeleteFavoritePlayer: player => dispatch(action.deleteFavoritePlayer(player)),
        onAddMoreInfoPlayer: player => dispatch(action.addMoreInfoPlayer(player))
    };
};

FavoritePlayers.propTypes = {
    favoritePlayers: PropTypes.array,
    loading: PropTypes.bool,
    token: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    userId: PropTypes.string,
    onFetchFavoritePlayer: PropTypes.func,
    onDeleteFavoritePlayer: PropTypes.func,
    onAddMoreInfoPlayer: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePlayers);
