import React from 'react';
import Description from "../../components/description/Description";
import style from './main.module.css'
const someObject = {
    title: "Title",
    description: "description"
}
function MainPage(props) {
    return (
        <div className={style.container}>
            <h2>Main Page</h2>
            <Description info={someObject}/>
        </div>
    );
}

export default MainPage;