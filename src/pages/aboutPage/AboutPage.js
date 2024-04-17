import React from 'react';
import Description from "../../components/description/Description";
import style from './about.module.css'

const someObject = {
    title: "Title 2",
    description: "description 2"
}
function AboutPage(props) {

    return (
        <div className={style.container}>
            <h2>About Page</h2>
            <Description info={someObject}/>
        </div>
    );
}

export default AboutPage;