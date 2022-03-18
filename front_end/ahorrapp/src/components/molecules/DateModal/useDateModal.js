import classNames from "classnames";

function useDateModal({ isOpenCalendar }) {
  const wrapperClass = classNames("glass", {
    show: isOpenCalendar,
  });
  return { wrapperClass };
}

export { useDateModal };
