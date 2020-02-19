import React from 'react';
import Classes from './backdrop.module.css';
const backDrop = (props)=>{
    let attatchedClasses = [Classes.BackDrop];
    if(props.attatchedClasses){
       attatchedClasses = [Classes.BackDrop, props.attatchedClasses];
     }
    return (
        props.show? <div className={attatchedClasses.join(' ')}
         onClick={props.clicked}></div>:null
    );
}

export default backDrop;