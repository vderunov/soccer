import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import classes from './RegistrationPlayer.module.css';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import { checkValidity, updateObject } from '../../shared/utility';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-players';
import PropTypes from 'prop-types';

class RegistrationPlayer extends Component {
    state = {
        registrationForm: {
            name: {
                elementType: 'input',
                label: 'Name',
                value: '',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                valid: false,
                touched: false,
                validation: {
                    required: true
                },
                errorMessage: 'This field is required'
            },
            shoot: {
                elementType: 'input',
                label: 'Shoot',
                value: '',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Shoot',
                    max: '100',
                    min: '0'
                },
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    maxValue: 100,
                    minValue: 0
                },
                errorMessage: 'The value can be from 0 to 100'
            },
            pass: {
                elementType: 'input',
                label: 'Pass',
                value: '',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Pass',
                    max: '100',
                    min: '0'
                },
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    maxValue: 100,
                    minValue: 0
                },
                errorMessage: 'The value can be from 0 to 100'
            },
            defense: {
                elementType: 'input',
                label: 'Defense',
                value: '',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Defense',
                    max: '100',
                    min: '0'
                },
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    maxValue: 100,
                    minValue: 0
                },
                errorMessage: 'The value can be from 0 to 100'
            },
            physical: {
                elementType: 'input',
                label: 'Physical',
                value: '',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Physical',
                    max: '100',
                    min: '0'
                },
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    maxValue: 100,
                    minValue: 0
                },
                errorMessage: 'The value can be from 0 to 100'
            },
            position: {
                elementType: 'select',
                label: 'Position',
                value: 'halfback',
                elementConfig: {
                    options: [
                        { value: 'goalkeeper', displayValue: 'Goalkeeper' },
                        { value: 'defender', displayValue: 'Defender' },
                        { value: 'halfback', displayValue: 'Halfback' },
                        { value: 'attack', displayValue: 'Attack' },
                        { value: 'trainer', displayValue: 'Trainer' }
                    ]
                },
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            },
            info: {
                elementType: 'textarea',
                label: 'Info',
                value: '',
                valid: true,
                elementConfig: {
                    type: 'text',
                    placeholder: 'Info',
                    maxLength: '1000'
                }
            }
        },
        formIsValid: false
    };

    regPlayerHandler = event => {
        event.preventDefault();
        const formData = {};

        for (let formElementIdentifier in this.state.registrationForm) {
            formData[formElementIdentifier] = this.state.registrationForm[formElementIdentifier].value;
        }

        formData.userId = this.props.userId;
        this.props.onRegisterPlayer(formData);
        this.props.history.push('/');
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.registrationForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.registrationForm[inputIdentifier].validation),
            touched: true
        });
        const updatedRegistrationForm = updateObject(this.state.registrationForm, {
            [inputIdentifier]: updatedFormElement
        });
        let formIsValid = true;

        for (let inputIdentifier in updatedRegistrationForm) {
            formIsValid = updatedRegistrationForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            registrationForm: updatedRegistrationForm,
            formIsValid
        });
    };

    render() {
        const formElementsArray = [];

        for (let key in this.state.registrationForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registrationForm[key]
            });
        }

        let form = <Spinner />;
        if (!this.props.loading) {
            form = (
                <form onSubmit={this.regPlayerHandler}>
                    {formElementsArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            label={formElement.config.label}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            invalid={!formElement.config.valid}
                            value={formElement.config.value}
                            touched={formElement.config.touched}
                            errorMessage={formElement.config.errorMessage}
                            shouldValidate={formElement.config.validation}
                            changed={event => this.inputChangedHandler(event, formElement.id)}
                        />
                    ))}
                    <Button disabled={!this.state.formIsValid}>Register</Button>
                </form>
            );
        }
        return (
            <>
                <h1>Registration player</h1>
                <div className={classes.RegistrationPlayer}>{form}</div>;
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        loading: state.players.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegisterPlayer: formData => dispatch(actions.registerPlayer(formData))
    };
};

RegistrationPlayer.propTypes = {
    userId: PropTypes.string,
    loading: PropTypes.bool,
    onRegisterPlayer: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(RegistrationPlayer, axios));
