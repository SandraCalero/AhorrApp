#!/usr/bin/python3
""" object that handles all default RestFul API actions for transactions """
from fastapi import APIRouter
from typing import Optional
from models import storage
from models.category import Category
from models.transaction import Transaction
from models.user import User
from datetime import date
from schemas.transaction_schema import TransactionSchema
transaction = APIRouter()


@transaction.get('/user/{user_id}/all-transactions')
def get_transactions(
    user_id: int,
    i_date: Optional[date] = "1900-01-01",
    f_date: Optional[date] = "2099-12-31"
    ):
    # create an end point for get categories
    # get categories from query filtered by the user_id
    categories = storage.session.query(
        Category).filter(Category.user_id == user_id).all()
    # create a dictionary with category id : category name
    categories_ids = {
        category.category_id: category.name for category in categories}

    # ***********START TEST ************
    # get_categories = storage.session.query(
    #     User).join(Category).first()
    # print(type(get_categories.categories))


    # ***********END TEST ************

    # list of transactions(dictionary representation) of corresponding user_id (those that are in the category_id dict)
    transactions = [transaction for transaction in storage.session.query(Transaction).
    filter(Transaction.date.between(i_date, f_date)).
    order_by(Transaction.date.desc())
        if transaction.category_id in categories_ids]
    storage.session.commit()
    storage.session.close()
    return transactions

@transaction.post('/user/{user_id}/transaction')
def insert(transaction: TransactionSchema):
    """Inserts one transaction"""
    new_transaction = {"type": transaction.type}
    storage.session.add(TransactionType(**new_transaction_type))