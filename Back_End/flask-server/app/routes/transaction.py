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
from schemas.transaction_schema import TransactionCreate, TransactionSchema, TransactionBase
from app.routes.category import get_all_categories, get_one_category
import json

transaction = APIRouter()


@transaction.post(
    '/transactions',
    tags=['transactions'],
    status_code=201,
    # response_model=TransactionSchema
)
def create_transaction(transaction: TransactionCreate):
    """Creates new transaction in database"""
    dictionary = transaction.dict()
    print(dictionary)
    get_one_category(dictionary['category_id'])
    new_transaction = Transaction(**dictionary)
    new_transaction.save()
    return new_transaction
