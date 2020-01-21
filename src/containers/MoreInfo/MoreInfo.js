import React from 'react';
import { connect } from 'react-redux';

import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';
import PropTypes from 'prop-types';

const MoreInfo = props => (
    <PlayerInfo
        player={props.player}
        clicked={() => {
            props.history.push('/');
        }}
    />
);

const mapStateToProps = state => {
    return {
        player: state.players.moreInfoPlayer
    };
};

MoreInfo.propTypes = {
    player: PropTypes.object
};

export default connect(mapStateToProps)(MoreInfo);
