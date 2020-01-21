import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import classes from './EditPlayer.module.css';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import { checkValidity, updateObject } from '../../shared/utility';
import Spinner from '../../components/UI/Spinner/Spinner';
import PropTypes from 'prop-types';

class EditPlayer extends Component {
    state = {
        registrationForm: {
            name: {
                elementType: 'input',
                label: 'Name',
                value: this.props.editPlayer.name,
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
                value: this.props.editPlayer.shoot,
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
                value: this.props.editPlayer.pass,
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
                value: this.props.editPlayer.defense,
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
                value: this.props.editPlayer.physical,
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
                value: this.props.editPlayer.info,
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

    editPlayerHandler = event => {
        event.preventDefault();
        const formData = {};

        for (let formElementIdentifier in this.state.registrationForm) {
            formData[formElementIdentifier] = this.state.registrationForm[formElementIdentifier].value;
        }

        formData.userId = this.props.userId;
        formData.id = this.props.editPlayer.id;
        this.props.onInitEditPlayer(formData);
    };

    onDeletePlayerHandler = () => {
        this.props.onDeletePlayer(this.props.editPlayer);
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
                <>
                    <form onSubmit={this.editPlayerHandler}>
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
                        <Button disabled={!this.state.formIsValid}>Edit</Button>
                    </form>
                    <Button clicked={this.onDeletePlayerHandler}>Delete</Button>
                    <Button clicked={() => this.props.history.push('/')}>Back</Button>
                </>
            );
        }
        return (
            <>
                <h1>Edit player: {this.props.editPlayer.name}</h1>
                <div className={classes.EditPlayer}>{form}</div>;
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players.players,
        userId: state.auth.userId,
        editPlayer: state.editPlayer.editPlayer,
        loading: state.editPlayer.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlayer: formData => dispatch(actions.deletePlayer(formData)),
        onInitEditPlayer: formData => dispatch(actions.initEditPlayer(formData))
    };
};

EditPlayer.propTypes = {
    players: PropTypes.array,
    userId: PropTypes.string,
    editPlayer: PropTypes.object,
    loading: PropTypes.bool,
    onDeletePlayer: PropTypes.func,
    onInitEditPlayer: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayer);
