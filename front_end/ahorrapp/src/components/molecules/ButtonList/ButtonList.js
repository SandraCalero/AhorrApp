import React from "react";
import { Button } from "../../atoms/Button/Button";
import "./ButtonList.css";

function ButtonList(props) {
  return (
    <ul className="ButtonList">
      {props.categoryList.map((category, index) => (
        <li key={index}>
          <Button
            text={category}
            variant="btn btnCategory"
            type="button"
            onClickButton={() => {
              props.onClickCategory && props.onClickCategory(category);
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export { ButtonList };
