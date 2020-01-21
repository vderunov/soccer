import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import PropTypes from 'prop-types';

const Logout = props => {
    const { onLogout } = props;

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

Logout.propTypes = {
    onLogout: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Logout);
