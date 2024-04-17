import React from 'react';
import style from './desc.module.css'
function Description({info}) {
    return (
        <div className={style.inner}>
            <h3>Description</h3>
            <p>{info.title}</p>
            <p>{info.description}</p>
        </div>
    );
}

export default Description;