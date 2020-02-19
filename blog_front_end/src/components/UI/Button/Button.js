import React from 'react';
import Classes from './Button.module.css';
const button =(props)=>{
  const buttonType = props.buttonType === 'Success' ? Classes.Success: Classes.Danger;
  return <button className={[Classes.Button, buttonType].join(' ')}
  onClick={props.clicked}>{props.children}</button>
};

export default button;