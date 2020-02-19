import React, { Component } from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Classes from './SignUp.module.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions/index'
import {Redirect} from 'react-router'

class SignUp extends Component {
    state = {
        signUpFrom: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email'
                },
                value: '',
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
            },
            password_confirmation: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password confirmation'
                },
                value: ''
            },
            avatar: {
                elementType: 'input',
                elementConfig: {
                    type: 'file',
                },
                value: '',
                files: {},
            }
        }
    };

    inputChangedHandler = (event,
        id) => {
        event.preventDefault();
        let updatedForm = { ...this.state.signUpFrom };
        let updatedFormElement = { ...updatedForm[id] };
        if(event.target.type === 'file'){
            updatedFormElement.files = event.target.files;
        }
        
        updatedFormElement.value = event.target.value;
        updatedForm[id] = updatedFormElement;
        this.setState({ signUpFrom: updatedForm });
    }

    submintHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('user[name]', this.state.signUpFrom.name.value)
        formData.append('user[email]', this.state.signUpFrom.email.value)
        formData.append('user[password]', this.state.signUpFrom.password.value)
        formData.append('user[password_confirmation]', this.state.signUpFrom.password_confirmation.value)
        formData.append('user[avatar]', this.state.signUpFrom.avatar.files[0])
/*        const data = {
            user: {
                name: this.state.signUpFrom.name.value,
                email: this.state.signUpFrom.email.value,
                password: this.state.signUpFrom.password.value,
                password_confirmation: this.state.signUpFrom.password_confirmation.value,
                avatar: this.state.signUpFrom.avatar.files[0],
            }
        }*/
        console.log('[from sumit handler]',formData)

        this.props.onSignUp(formData)
    }


    getForm() {
        let inputElements = [];
        for (let key in this.state.signUpFrom) {
            inputElements.push({
                id: key,
                config: this.state.signUpFrom[key]
            });
        }
        inputElements = inputElements.map((element) => {
            return <Input changed={(event) => this.inputChangedHandler(event, element.id)} elementType={element.config.elementType}
                elementConfig={element.config.elementConfig}
                value={element.config.value} key={element.id} label={element.id} />
        });
        let form = (
            <form >
                {inputElements}
                <Button buttonType='Success' clicked={this.submintHandler}>Submit</Button>
            </form>
        );

        if (this.props.loading) {
            form = <Spinner />;
        }

        if(this.props.data !== null){
            this.props.clearSignUpInfo();
            form = <Redirect to='signin/'/>;
        }
        return form;
    }

    render() {
        return (
            <div className={Classes.SignUp}>
                {this.getForm()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.signUp.errors,
        data: state.signUp.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignUp: (data) => dispatch(actionCreators.signUp(data)),
        clearSignUpInfo: ()=> dispatch(actionCreators.clearSignUpData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);