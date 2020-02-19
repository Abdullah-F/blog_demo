import React, { Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Classes from './NavigationItems.module.css'
import Aux from '../../../hoc/Aux/Aux';
class NavigationItems extends Component {
    onSignedInLinks() {
        return (
            <Aux>
                <NavigationItem link="/signout">sign out</NavigationItem>
            </Aux>
        );
    }

    onSignedOutLinks(){
        return (
            <Aux>
                <NavigationItem link="/signup">sign up</NavigationItem>
            </Aux>
        );
    }

    links(){
        return this.props.isSignedIn? this.onSignedInLinks(): this.onSignedOutLinks();
    }

    render() {
        return (
            <ul className={Classes.NavigationItems}>
                {this.links()}
            </ul>
        );
    }
}

export default NavigationItems;