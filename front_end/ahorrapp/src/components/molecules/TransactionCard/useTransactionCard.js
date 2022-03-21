import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCurrency } from "../../../utils/formaters/useCurrency";
import { useDate } from "../../../utils/formaters/useDate";

const useTransactionCard = ({ amount, date }) => {
  const { formatCurrency } = useCurrency();
  const { dateToString } = useDate();

  const amountFormatted = formatCurrency(amount);
  const dateToShow = dateToString(date);

  const editButton = <FontAwesomeIcon icon={faEdit} />;
  const deleteButton = <FontAwesomeIcon icon={faTrash} />;

  return { editButton, deleteButton, amountFormatted, dateToShow };
};

export { useTransactionCard };
