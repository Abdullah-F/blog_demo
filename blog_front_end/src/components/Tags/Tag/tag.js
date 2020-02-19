import React from 'react'
import Classes from './tag.module.css'
const tag = (props)=> <span className={Classes.Tag}>{props.tag.name}</span>

export default tag;