import React, { Component } from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Classes from './CreateComment.module.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions/index'

class CreateComment extends Component {
    state = {
        commentForm: {
            body: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'body'
                },
                value: ''
            },
        }
    };

    inputChangedHandler = (event, id) => {
        event.preventDefault();
        let updatedForm = { ...this.state.commentForm };
        let updatedFormElement = { ...updatedForm[id] };
        updatedFormElement.value = event.target.value;
        updatedForm[id] = updatedFormElement;
        this.setState({ commentForm: updatedForm });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const payload = {
            comment: {
                body: this.state.commentForm.body.value,
                user_id: this.props.user.id,
                post_id: this.props.post.id
            }
        }

        this.props.onCreateComment(payload);
    }


    getForm() {
        let inputElements = [];
        for (let key in this.state.commentForm) {
            inputElements.push({
                id: key,
                config: this.state.commentForm[key]
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
            <div className={Classes.CreateComment}>
                {this.getForm()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        user: state.signIn.user,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        onCreateComment: (data) => dispatch(actionCreators.createCommentInit(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);