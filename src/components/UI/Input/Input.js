import React from 'react';

import classes from './Input.module.css';

const Input = props => {
    let inputElement;
    let validationError = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.touched) {
        inputClasses.push(classes.Invalid);
        validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
    }

    switch (props.elementType) {
        case 'input':
            inputElement = (
                <input
                    className={inputClasses.join(' ')}
                    value={props.value}
                    {...props.elementConfig}
                    onChange={props.changed}
                />
            );
            break;
        case 'textarea':
            inputElement = (
                <textarea className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.changed} />
            );
            break;
        case 'select':
            inputElement = (
                <select className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = (
                <input className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.changed} />
            );
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default Input;
