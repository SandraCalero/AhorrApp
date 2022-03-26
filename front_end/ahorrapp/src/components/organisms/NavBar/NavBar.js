import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { BudgetModal } from '../BudgetModal/BudgetModal';
import { useNavBar } from './useNavBar';
import './NavBar.css';

function NavBar ({ onReloadData }) {
  const {
    isLoading,
    budgetUser,
    budgetIcon,
    userIcon,
    isFormModalOpen,
    closeFormModal,
    onClickBudget
  } = useNavBar();

  return (
    <nav className='navBar'>
      <Button
        variant='btn navIcon menu'
        text='Mar/22 Budget'
        icon={budgetIcon}
        onClickButton={onClickBudget}
      />
      <BudgetModal
        isLoading={isLoading}
        budgetUser={budgetUser}
        onReloadData={onReloadData}
        isFormModalOpen={isFormModalOpen}
        closeFormModal={closeFormModal}
      />
      <Button variant='navIcon' icon={userIcon} />
    </nav>
  );
}

export { NavBar };
