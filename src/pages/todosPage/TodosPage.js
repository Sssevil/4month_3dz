import React from 'react';
import Todo from "../../components/todo/Todo";
import style from './todos.module.css'

const array = ["todo 1", "todo 2", "todo 3"]
function TodosPage(props) {
    return (
        <div className={style.container}>
            <h2>Todos Page</h2>
            <div className={style.box_todo}>
                {
                    array.map((arr,index) => <Todo key={index} todo={arr}/>)
                }
            </div>
        </div>
    );
}

export default TodosPage;