#!/usr/bin/python3
""" object that handles all default RestFul API actions for transactions """
from fastapi import APIRouter, Response, status, HTTPException
from fastapi.responses import JSONResponse
from typing import Optional, List
from models import storage
from models.category import Category
from models.transaction import Transaction
from models.user import User
from datetime import date
from schemas.transaction_schema import TransactionCreate, TransactionSchema, TransactionUpdate
from schemas.category_schema import CategorySchema
from app.routes.category import get_all_categories, get_one_category, get_categories_by_user
from app.routes.user import get_user_by_id
import json

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


@transaction.get('/transaction/{id}',
                 tags=['transactions'],
                 status_code=200,
                 response_model=TransactionSchema)
def get_transaction(id: int):
    """Get transactions by transaction id"""
    transaction = storage.get(Transaction, id)
    if not transaction:
        raise HTTPException(status_code=404, detail="Transaction not found")
    return transaction


@transaction.get('/user/{user_id}/all-transactions',
                 tags=['transactions'],
                 status_code=201,
                 response_model=List[TransactionSchema])
def get_all_transactions_by_user(
    user_id: int,
    i_date: Optional[date] = "1900-01-01",
    f_date: Optional[date] = "2099-12-31"
):
    """Get all transactions of user given user_id orderd by most recent to
    oldest"""
    if i_date >= f_date:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="f_date cannot be before or same as i_date")

    user = get_user_by_id(user_id)
    categories = user.categories

    categories_ids = {category.id: category.name for category in categories}

    all_transactions = storage.session.query(Transaction).filter(
        Transaction.date.between(i_date, f_date)).order_by(Transaction.date.desc())

    transactions = [
        transaction for transaction in all_transactions
        if transaction.category_id in categories_ids
    ]
    storage.session.close()

    return transactions


@transaction.put('/transaction/{id}',
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


@transaction.delete('/transaction/{id}',
                    tags=['transactions'],
                    status_code=status.HTTP_200_OK)
def delete_transaction(id: int):
    """Delete a transaction by its id"""
    transaction = get_transaction(id)
    transaction.delete()
    storage.save()
    return {}
