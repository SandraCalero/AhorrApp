import React from 'react'
import { Button } from "../../atoms/Button/Button";
import "./ButtonList.css"

function ButtonList(props){
    return (
    <ul className="ButtonList">
        {props.categoryList.map((category) => (
        <li><Button text={category} variant="btn btnCategory"/></li>
        ))}
    </ul>
  )
}

export { ButtonList }