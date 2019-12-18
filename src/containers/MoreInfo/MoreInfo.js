import React from 'react';
import { connect } from 'react-redux';

import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';

const MoreInfo = props => {
    return (
        <PlayerInfo
            player={props.player}
            clicked={() => {
                props.history.push('/');
            }}
        />
    );
};

const mapStateToProps = state => {
    return {
        player: state.initPlayers.moreInfoPlayer
    };
};

export default connect(mapStateToProps)(MoreInfo);
