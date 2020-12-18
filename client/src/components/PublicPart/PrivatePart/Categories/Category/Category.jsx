import React from 'react';
import './Category.css'

const Category = (props) => {

    return (
        <div className="divCategory">
            <ul className="ulCategory">
            <button onClick={()=>props.func(props.value)} className="btnCategory">{props.value}</button>
            </ul>
        </div>
    );
};

export default Category;