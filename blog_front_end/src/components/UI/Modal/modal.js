import React, { Component } from 'react';
import Classes from './modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import BackDrop from '../Backdrop/backdrop';
class Modal extends Component{ 

    shouldComponentUpdate(nextProps, newState){
        let shouldUpdate = false;
        shouldUpdate = nextProps.children !== this.props.children;
        shouldUpdate = shouldUpdate || (nextProps.show !== this.props.show);
        return shouldUpdate;
    }
    render(){
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={Classes.Modal}
                style={{
                    transform: this.props.show? 'translateY(0)':'translateY(-100vh)',
                    opacity: this.props.show? '1':'0'
                }}
                >
                {this.props.children}
                </div>
            </Aux>
        )
    }
}
export default Modal;