import React, { Component } from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Classes from './SignIn.module.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions/index'

class SignIn extends Component {
    state = {
        signInForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: ''
            }
        }
    };

    inputChangedHandler = (event,id) => {
        event.preventDefault();
        let updatedForm = { ...this.state.signInForm };
        let updatedFormElement = { ...updatedForm[id] };
        updatedFormElement.value = event.target.value;
        updatedForm[id] = updatedFormElement;
        this.setState({ signInForm: updatedForm });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const data = {
                email: this.state.signInForm.email.value,
                password: this.state.signInForm.password.value,
        }
        this.props.onSignIn(data)
    }


    getForm() {
        let inputElements = [];
        for (let key in this.state.signInForm) {
            inputElements.push({
                id: key,
                config: this.state.signInForm[key]
            });
        }
        inputElements = inputElements.map((element) => {
            return <Input changed={(event) => this.inputChangedHandler(event, element.id)} elementType={element.config.elementType}
                elementConfig={element.config.elementConfig}
                value={element.config.value} key={element.id} label={element.id}/>
        });
        let form = (
            <form >
                {inputElements}
                <Button buttonType='Success' clicked={this.submitHandler}>Submit</Button>
            </form>
        );

        if (this.props.loading) {
            form = <Spinner />;
        }

        return form;
    }

    render() {
        return (
            <div className={Classes.SignIn}>
                {this.getForm()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.signIn.errors,
        user: state.signIn.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: (data) => dispatch(actionCreators.signIn(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);