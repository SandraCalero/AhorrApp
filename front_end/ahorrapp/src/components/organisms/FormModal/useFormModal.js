import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { API } from '../../../config';

function useFormModal ({ isFormModalOpen, transactionInfo }) {
  const wrapperClass = classNames('glass', {
    show: isFormModalOpen
  });

  const editIcon = <FontAwesomeIcon icon={faEdit} />;

  const url = transactionInfo
    ? `${API}/transaction/${transactionInfo.id}`
    : '';

  return { wrapperClass, editIcon, url };
}

export { useFormModal };
