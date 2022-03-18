#!/usr/bin/python3
""" object that handles all default RestFul API actions for transactions """
from fastapi import APIRouter, Response, status, HTTPException
from fastapi.responses import JSONResponse
from typing import Optional
from models import storage
from models.category import Category
from models.transaction import Transaction
from models.user import User
from datetime import date
from schemas.transaction_schema import TransactionSchema
from app.routes.category import get_all_categories
import json

transaction = APIRouter()


@transaction.get('/user/{user_id}/all-transactions')
def get_transactions(
    user_id: int,
    i_date: Optional[date] = "1900-01-01",
    f_date: Optional[date] = "2099-12-31"
):
    # create an end point for get categories
    # get categories from query filtered by the user_id
    categories = get_all_categories(user_id)
    print(type(categories[0]), categories[0].name)
    # create a dictionary with category id : category name
    # print(type(categories[0]['created_at']))
    # categories_ids = {
    #     category.category_id: category.name for category in categories}

    # ***********START TEST ************

    # get_all_categories = storage.session.query(
    #     User).join(Category).first()
    # print(type(get_all_categories.categories))

    # ***********END TEST ************

    # list of transactions(dictionary representation) of corresponding user_id (those that are in the category_id dict)
    # transactions = [transaction for transaction in storage.session.query(Transaction).
    #                 filter(Transaction.date.between(i_date, f_date)).
    #                 order_by(Transaction.date.desc())
    #                 if transaction.category_id in categories_ids]
    # storage.session.close()
    return categories


@transaction.post('/transaction/', response_model=TransactionSchema, status_code=201)
def insert(transaction: TransactionSchema):
    """Inserts one transaction"""
    dictionary = transaction.dict()
    if dictionary is None:
        HTTPException(status_code=400, detail="Not a JSON")

    # new_transaction = {"type": transaction.type}
    # storage.session.add(TransactionType(**new_transaction_type))


# @transaction.get('/user/{user_id}/categories')
# def get_all_categories(user_id: int):
#     user = storage.get('User', user_id)
#     print(f"value is {user}")
#     if not user:
#         print("user is none")
#         raise HTTPException(status_code=400, detail="User not found")

#     user_categories = user.categories

#     return [category for category in user_categories]
