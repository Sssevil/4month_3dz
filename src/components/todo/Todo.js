import React from 'react';
import style from './todo.module.css'

function Todo({todo}) {
    return (
        <div className={style.box}>
            <h3> Todos </h3>
            <p>{todo}</p>
        </div>
    );
}

export default Todo;