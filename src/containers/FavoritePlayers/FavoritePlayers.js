import React, { Component } from 'react';

import { connect } from 'react-redux';
import PlayerCard from '../../components/UI/PlayerCard/PlayerCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from '../Team/Team.module.css';
import * as action from '../../store/actions/index';

class FavoritePlayers extends Component {
    componentDidMount() {
        this.props.onFetchFavoritePlayer(this.props.token);
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
                    />
                );
            });
        }

        if (this.props.loading) {
            players = <Spinner />;
        }
        return (
            <div>
                <h1>FavoritePlayers</h1>
                <div className={classes.Team}>{players}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        favoritePlayers: state.favoritePlayers.players,
        loading: state.favoritePlayers.loading,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchFavoritePlayer: token =>
            dispatch(action.fetchFavoritePlayer(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePlayers);
