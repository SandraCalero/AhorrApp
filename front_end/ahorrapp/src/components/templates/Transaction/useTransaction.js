import { useState } from "react";

function useTransaction() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const openForm = () => {
    setIsOpenForm(true);
  };
  return {
    isOpenForm,
    openForm,
  };
}

export { useTransaction };
