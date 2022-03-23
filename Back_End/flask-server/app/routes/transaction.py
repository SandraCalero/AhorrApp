#!/usr/bin/python3
""" object that handles all default RestFul API actions for transactions """
from fastapi import APIRouter, status, HTTPException
from models import storage
from datetime import date
from schemas.transaction_schema import TransactionCreate,\
    TransactionSchema, TransactionUpdate, TransactionCustom,\
    TransactionWithCategory
from schemas.category_schema import CategorySchema
from app.routes.category import get_one_category
from app.routes.user import get_user_by_id
from models.transaction import Transaction
from models.category import Category
from models.transaction_type import TransactionType
from typing import List, Optional
from pprint import pprint
from app.routes.budget import get_budgets_by_user

transaction = APIRouter()


@transaction.post(
    '/transactions',
    tags=['transactions'],
    status_code=201,
    response_model=TransactionSchema
)
def create_transaction(transaction: TransactionCreate):
    """Creates new transaction in database"""
    dictionary = transaction.dict()
    get_one_category(dictionary['category_id'])
    new_transaction = Transaction(**dictionary)
    new_transaction.save()
    return new_transaction


@transaction.get(
    '/transaction/{id}',
    tags=['transactions'],
    status_code=200,
    response_model=TransactionSchema
)
def get_transaction(id: int):
    """Get transactions by transaction id"""
    transaction = storage.get(Transaction, id)
    if not transaction:
        raise HTTPException(status_code=404, detail="Transaction not found")
    return transaction


def get_data_by_date(i_date, f_date, user_id):
    """Function that valdiate the incoming dates to handle the flow"""
    if type(i_date) is str or type(f_date) is str:
        results = storage.session.query(
            Transaction,
            Category,
            TransactionType
        )\
            .select_from(Transaction)\
            .join(Category)\
            .join(TransactionType)\
            .filter(Category.user_id == user_id)\
            .all()
    else:
        if i_date >= f_date:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="f_date cannot be before or same as i_date"
            )
        results = storage.session.query(
            Transaction,
            Category,
            TransactionType
        )\
            .select_from(Transaction)\
            .join(Category)\
            .join(TransactionType)\
            .filter(Category.user_id == user_id)\
            .filter(Transaction.date.between(i_date, f_date))\
            .all()
    return results


@transaction.get(
    '/user/{user_id}/transactions',
    tags=['transactions'],
    status_code=200,
    response_model=TransactionCustom
)
def custom_get_all_transactions_by_user(
    user_id: int,
    i_date: Optional[date] = "1900-01-01",
    f_date: Optional[date] = "2099-12-31"
):
    """Getting all transactions of an user with a custome build"""
    get_user_by_id(user_id)
    results = get_data_by_date(i_date, f_date, user_id)
    dictionary = {
        'expenses': {'categories': {}, 'totalExpenses': 0},
        'incomes': {'categories': {}, 'totalIncomes': 0},
        'budget': {'categories': {}},
        'totalBalance': 0
    }

    #assign budget dictionary with budgets of current user
    budgets = get_budgets_by_user(user_id)
    dictionary['budget']['categories'] = budgets

    for transaction, category, transactiontype in results:
        # print("inside results")
        # print(category.name, category.budgets[0].value)
        # [print(category.name, budget.value) for budget in category.budgets]

        if transactiontype.id == 1:
            dictionary['expenses']['totalExpenses'] =\
                dictionary['expenses']['totalExpenses'] + transaction.value
            if category.name not in dictionary['expenses']['categories']:
                dictionary['expenses']['categories'].update(
                    {category.name: transaction.value})
            else:
                dictionary['expenses']['categories'][category.name] =\
                    dictionary['expenses']['categories'][category.name] + \
                    transaction.value
            # if category.name not in dictionary['budget']['categories']:
            #     for budget in budgets:
            #         if budget.category_id == category.id:
            #             break
            #     dictionary['budget']['categories'].update(
                # {category.name: budget.value})
        if transactiontype.id == 2:
            dictionary['incomes']['totalIncomes'] =\
                dictionary['incomes']['totalIncomes'] + transaction.value
            if category.name not in dictionary['incomes']['categories']:
                dictionary['incomes']['categories'].update(
                    {category.name: transaction.value})
            else:
                dictionary['incomes']['categories'][category.name] =\
                    dictionary['incomes']['categories'][category.name] + \
                    transaction.value
    dictionary['totalBalance'] = dictionary['incomes']['totalIncomes'] -\
        dictionary['expenses']['totalExpenses']
    storage.session.close()
    pprint(dictionary)
    return dictionary


@ transaction.get(
    '/user/{user_id}/all-transactions',
    tags=['transactions'],
    status_code=201,
    response_model=List[TransactionWithCategory]
)
def get_all_transactions_by_user(
    user_id: int,
    i_date: Optional[date] = "1900-01-01",
    f_date: Optional[date] = "2099-12-31"
):
    """Get all transactions of user given user_id ordered by most recent to
    oldest"""
    if i_date >= f_date:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="f_date cannot be before or same as i_date")

    get_user_by_id(user_id)
    all_transactions = storage.session.query(Transaction, Category)\
        .join(Category)\
        .filter(Transaction.date.between(i_date, f_date))\
        .filter(Category.user_id == user_id)\
        .order_by(Transaction.date.desc())\
        .all()
    transactions = []
    for transaction, category in all_transactions:
        row = {
            'id': transaction.id,
            'created_at': transaction.created_at,
            'updated_at': transaction.updated_at,
            'description': transaction.description,
            'date': transaction.date,
            'value': transaction.value,
            'category_id': transaction.category_id,
            'category_name': category.name,
            'transaction_type_id': category.transaction_type_id
        }
        transactions.append(row)
    storage.session.close()
    return transactions


@ transaction.put('/transaction/{id}',
                  tags=['transactions'],
                  status_code=200,
                  response_model=TransactionSchema)
def update_trasaction(
        id: int,
        transaction_data: TransactionUpdate):
    """Update a transaction"""
    dictionary = transaction_data.dict(exclude_unset=True)
    print(dictionary)
    if dictionary is None:
        raise HTTPException(status_code=400, detail="Not a JSON")
    transaction = storage.get(Transaction, id)
    if transaction is None:
        raise HTTPException(status_code=404, detail="Transaction not found")
    [
        setattr(transaction, key, value) for key, value in dictionary.items()
    ]
    transaction.save()
    return transaction


@ transaction.delete('/transaction/{id}',
                     tags=['transactions'],
                     status_code=status.HTTP_200_OK)
def delete_transaction(id: int):
    """Delete a transaction by its id"""
    transaction = get_transaction(id)
    category = get_one_category(transaction.category_id)
    transaction.delete()
    storage.save()
    return get_all_transactions_by_user(category.user_id)
