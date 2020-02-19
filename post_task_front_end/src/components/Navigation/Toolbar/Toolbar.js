import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Classes from './Toolbar.module.css'
const layout = (props) =>{

    return (
        <header className={Classes.Toolbar}>
            <nav>
               <NavigationItems isSignedIn={props.isSignedIn}></NavigationItems> 
            </nav>
        </header>
    )
}

export default layout;