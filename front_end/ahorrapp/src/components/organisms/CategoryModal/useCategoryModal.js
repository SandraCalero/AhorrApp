import React from "react";
import classNames from "classnames";

function useCategoryModal({ isOpen }) {
  const wrapperClass = classNames("glass", {
    show: isOpen,
  });
  return { wrapperClass };
}

export default useCategoryModal;
