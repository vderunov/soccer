import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ show, modalClosed, children }) => (
    <div>
        <Backdrop show={show} clicked={modalClosed} />
        <div
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
            className={classes.Modal}
        >
            {children}
        </div>
    </div>
);

export default React.memo(
    Modal,
    (prevProps, nextProps) => prevProps.show === nextProps.show && prevProps.children === nextProps.children
);
