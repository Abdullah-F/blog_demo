import React, { Component } from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Classes from './CreatePost.module.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions/index'
class CreatePost extends Component {
    state = {
        postForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'title'
                },
                value: ''
            },
            body: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'body'
                },
                value: ''
            },
            tags: {
                elementType: 'multiselect',
                elementConfig: {
                    selected: [],
                    options: [],
                    onSelectedChanged: (selected) => this.multiSelectHandler(selected)
                },
                value: []
            }
        }
    };

    componentDidMount() {
        const options = this.props.tags.map(tag => {
            return {
                label: tag.name, value: tag.id
            }
        });
        let updatedForm = { ...this.state.postForm };
        let updatedFormElement = { ...updatedForm['tags'] };
        updatedFormElement.elementConfig.options = options;
        updatedForm['tags'] = updatedFormElement;
        this.setState({ postForm: updatedForm });
    }

    multiSelectHandler = (selected) => {
        let updatedForm = { ...this.state.postForm };
        let updatedFormElement = { ...updatedForm['tags'] };
        updatedFormElement.value = selected;
        updatedFormElement.elementConfig.selected = selected;
        updatedForm['tags'] = updatedFormElement;
        this.setState({ postForm: updatedForm });
    }

    inputChangedHandler = (event, id) => {
        event.preventDefault();
        let updatedForm = { ...this.state.postForm };
        let updatedFormElement = { ...updatedForm[id] };
        updatedFormElement.value = event.target.value;
        updatedForm[id] = updatedFormElement;
        this.setState({ postForm: updatedForm });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const payload = {
            post: {
                title: this.state.postForm.title.value,
                body: this.state.postForm.body.value,
                user_id: this.props.user.id
            },
            tags: this.state.postForm.tags.value
        }

        this.props.onPostCreate(payload);
    }


    getForm() {
        let inputElements = [];
        for (let key in this.state.postForm) {
            inputElements.push({
                id: key,
                config: this.state.postForm[key]
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
            <div className={Classes.CreatePost}>
                {this.getForm()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.signIn.user,
        token: state.signIn.token,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onPostCreate: (data) => dispatch(actionCreators.createPostInit(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);