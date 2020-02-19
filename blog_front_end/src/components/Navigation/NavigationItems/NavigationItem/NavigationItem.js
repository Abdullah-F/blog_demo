import React from 'react';
import Classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props)=>(
    <li className={Classes.NavigationItem}>
        <NavLink to={props.link} exact
         activeClassName={Classes.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;