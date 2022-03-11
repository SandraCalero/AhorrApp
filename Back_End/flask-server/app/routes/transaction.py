#!/usr/bin/python3
""" object that handles all default RestFul API actions for transactions """
from fastapi import APIRouter
from models import storage
from models.transaction import Transaction

transaction = APIRouter()

# @transaction.get('/user/{user-id}/transactions/')
@transaction.get('/transaction')
def get_transactions():
    lst = []
    for instance in storage.session.query(Transaction).order_by(Transaction.date.desc()):
        lst.append(instance.date)

    storage.session.commit()
    storage.session.close()
    return lst
    # return storage.session.query(Transaction).order_by(Transaction.date.desc())
    # return "hello world transactions"