import React from 'react';
import ReactLoading from 'react-loading';
import { TransactionCard } from '../../molecules/TransactionCard/TransactionCard';
import { ConfirmationModal } from '../../molecules/ConfirmationModal/ConfirmationModal';
import './TransactionHistory.css';
import { useTransactionHistory } from './useTransactionHistory';
import { FormModal } from '../FormModal/FormModal';

function TransactionHistory ({
  transactionList,
  variantFilter,
  categoriesList,
  updateTransactionList,
  onReloadData
}) {
  const {
    isLoading,
    incomeIcon,
    expenseIcon,
    transactionInfo,
    isConfirmationOpen,
    isFormModalOpen,
    categoryList,
    variantForm,
    itemList,
    clickEdit,
    YesButtonConfirmationModal,
    openConfirmationModal,
    closeConfirmationModal,
    closeFormModal
  } = useTransactionHistory({
    transactionList,
    categoriesList,
    variantFilter,
    updateTransactionList
  });

  if (isLoading) {
    return (
      <div className='TransactionHistory'>
        <ReactLoading
          type='bubbles'
          color='#357EDD'
          width='100%'
          height='100%'
        />
      </div>
    );
  }

  return (
    <div className='TransactionHistory'>
      <ul className='TransactionCardList'>
        {itemList.map((transactionItem) => {
          const variant =
            transactionItem.transaction_type_id === 1
              ? 'ExpenseCard'
              : 'IncomeCard';
          const iconCard =
            transactionItem.transaction_type_id === 1
              ? expenseIcon
              : incomeIcon;
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
                category={transactionItem.category_name}
                amount={transactionItem.value}
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
      <FormModal
        isFormModalOpen={isFormModalOpen}
        transactionInfo={transactionInfo}
        closeFormModal={closeFormModal}
        categoryList={categoryList}
        variant={variantForm}
        onReloadData={onReloadData}
      />
    </div>
  );
}

export { TransactionHistory };
