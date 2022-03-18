import React from 'react';
import { useAllTransactions } from '../../templates/AllTransactions/useAllTransactions';
import { TransactionCard } from '../TransactionCard/TransactionCard';
import { ConfirmationModal } from '../../molecules/ConfirmationModal/ConfirmationModal';
import './TransactionHistory.css';

function TransactionHistory({ setIsLoading }) {
  const {
    incomeIcon,
    expenseIcon,
    transactionList,
    isConfirmationOpen,
    YesButtonConfirmationModal,
    closeConfirmationModal,
    openConfirmationModal,
  } = useAllTransactions();

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
