#!/usr/bin/python3
""" object that handles all default RestFul API actions for transactions """
from fastapi import APIRouter
from typing import Optional
from models import storage
from models.category import Category
from models.transaction import Transaction
from datetime import date
transaction = APIRouter()


@transaction.get('/user/{user_id}/transaction')
def get_transactions(
    user_id: int,
    initial_date: Optional[date] = None,
    final_date: Optional[date] = None
    ):
    # create an end point for get categories
    # get categories from query filtered by the user_id
    categories = storage.session.query(
        Category).filter(Category.user_id == user_id).all()
    # create a dictionary with category id : category name
    categories_ids = {
        category.category_id: category.name for category in categories}

    # list of transactions(dictionary representation) of corresponding user_id (those that are in the category_id dict)
    transactions = [transaction for transaction in storage.session.query(Transaction).
    filter(Transaction.date.between(initial_date, final_date)).
    order_by(Transaction.date.desc())
        if transaction.category_id in categories_ids]

    storage.session.commit()
    storage.session.close()
    return transactions
