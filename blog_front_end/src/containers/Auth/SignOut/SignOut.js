import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
class SignOut extends Component{
    
    componentDidMount(){
        this.props.onSignOut();
    }

    render(){
        return <Redirect to='/signin'/>;
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onSignOut: () => dispatch(actionCreators.signOut()),
    };
}

export default connect(null, mapDispatchToProps)(SignOut);