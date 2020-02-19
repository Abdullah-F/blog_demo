import React from 'react'
import Classes from './tags.module.css'
import Tag from './Tag/tag'
const tags = (props)=> {
    return (
        <div className={Classes.Tags}>
            {
                props.tags.map( tag => {
                    return <Tag tag= { tag } key={tag.id}/>
                })
            }
        </div>
    )
}

export default tags;