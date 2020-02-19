import React, { Component } from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Classes from './UpdatePost.module.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions/index'

class UpdatePost extends Component {
    state = {
        postForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'title'
                },
                value: this.props.post.title
            },
            body: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'body'
                },
                value: this.props.post.body
            },
            tags: {
                elementType: 'multiselect',
                elementConfig: {
                    selected: this.props.post.tags,
                    options: this.props.tags,
                    onSelectedChanged: (selected) => this.multiSelectHandler(selected)
                },
                value: this.props.post.tags
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
                id: this.props.post.id,
                title: this.state.postForm.title.value,
                body: this.state.postForm.body.value,
                user_id: this.props.user.id
            },
            tags: this.state.postForm.tags.value
        }

        this.props.onPostUpdate(payload);
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
            <div className={Classes.UpdatePost}>
                {this.getForm()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.signIn.user,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onPostUpdate: (data) => dispatch(actionCreators.updatePostInit(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);