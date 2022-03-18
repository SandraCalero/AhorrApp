import React from 'react';
import { TransactionCard } from '../TransactionCard/TransactionCard';
import { ConfirmationModal } from '../../molecules/ConfirmationModal/ConfirmationModal';
import './TransactionHistory.css';
import { useTransactionHistory } from './useTransactionHistory';

function TransactionHistory({ transactionList }) {
  const {
    incomeIcon,
    expenseIcon,
    isConfirmationOpen,
    clickEdit,
    YesButtonConfirmationModal,
    openConfirmationModal,
    closeConfirmationModal,
  } = useTransactionHistory();

  return (
    <div className="TransactionHistory">
      <ul className="TransactionCardList">
        {transactionList.map((transactionItem) => (
          <li key={transactionItem.id}>
            {transactionItem.transactionType === 0 && (
              <TransactionCard
                variant="ExpenseCard"
                icon={expenseIcon}
                openConfirmationModal={openConfirmationModal}
                clickEdit={clickEdit}
                description={transactionItem.description}
                category={transactionItem.category}
                amount={transactionItem.amount}
                date={transactionItem.date}
              />
            )}
            {transactionItem.transactionType === 1 && (
              <TransactionCard
                variant="IncomeCard"
                icon={incomeIcon}
                openConfirmationModal={openConfirmationModal}
                clickEdit={clickEdit}
                description={transactionItem.description}
                category={transactionItem.category}
                amount={transactionItem.amount}
                date={transactionItem.date}
              />
            )}
          </li>
        ))}
      </ul>
      <ConfirmationModal
        isConfirmationOpen={isConfirmationOpen}
        closeConfirmationModal={closeConfirmationModal}
        YesButtonConfirmationModal={YesButtonConfirmationModal}
      />
    </div>
  );
}

export { TransactionHistory };
