import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => (
    <div>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
            className={classes.Modal}
        >
            {props.children}
        </div>
    </div>
);

export default React.memo(
    Modal,
    (prevProps, nextProps) => prevProps.show === nextProps.show && prevProps.children === nextProps.children
);
