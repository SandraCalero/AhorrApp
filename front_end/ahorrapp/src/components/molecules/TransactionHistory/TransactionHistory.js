import React from 'react';
import ReactLoading from 'react-loading';
import { TransactionCard } from '../TransactionCard/TransactionCard';
import { ConfirmationModal } from '../../molecules/ConfirmationModal/ConfirmationModal';
import './TransactionHistory.css';
import { useTransactionHistory } from './useTransactionHistory';
import { FormModal } from '../../organisms/FormModal/FormModal';

function TransactionHistory({ transactionList, updateTransactionList }) {
  const {
    isLoading,
    incomeIcon,
    expenseIcon,
    isConfirmationOpen,
    isFormModalOpen,
    clickEdit,
    YesButtonConfirmationModal,
    openConfirmationModal,
    closeConfirmationModal,
  } = useTransactionHistory({ updateTransactionList });

  if (isLoading) {
    return (
      <div className="TransactionHistory">
        <ReactLoading
          type="bubbles"
          color="#357EDD"
          width={'100%'}
          height={'100%'}
        />
      </div>
    );
  }

  return (
    <div className="TransactionHistory">
      <ul className="TransactionCardList">
        {transactionList.map((transactionItem) => {
          const variant =
            transactionItem.transactionType === 0
              ? 'ExpenseCard'
              : 'IncomeCard';
          const iconCard =
            transactionItem.transactionType === 0 ? expenseIcon : incomeIcon;
          return (
            <li key={transactionItem.id}>
              <TransactionCard
                variant={variant}
                icon={iconCard}
                openConfirmationModal={() => {
                  openConfirmationModal(transactionItem.id);
                }}
                clickEdit={() => {
                  clickEdit(transactionItem);
                }}
                description={transactionItem.description}
                category={transactionItem.category}
                amount={transactionItem.amount}
                date={transactionItem.date}
              />
            </li>
          );
        })}
      </ul>
      <ConfirmationModal
        isConfirmationOpen={isConfirmationOpen}
        closeConfirmationModal={closeConfirmationModal}
        YesButtonConfirmationModal={YesButtonConfirmationModal}
      />
      <FormModal isFormModalOpen={isFormModalOpen} />
    </div>
  );
}

export { TransactionHistory };
