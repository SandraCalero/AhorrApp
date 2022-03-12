#!/usr/bin/python3
""" object that handles all default RestFul API actions for transaction types """
from fastapi import APIRouter
from models import storage
from models.transaction_type import TransactionType
from schemas.transaction_type_schema import Transaction_type_schema

transaction_type = APIRouter()

# @transaction.get('/user/{user-id}/transactions/')


@transaction_type.post('/transaction_types')
def insert(transaction_type: Transaction_type_schema):
    """Inserts one transaction type"""
    new_transaction_type = {"type": transaction_type.type}
    storage.session.add(TransactionType(**new_transaction_type))
    storage.session.commit()


@transaction_type.get('/transaction_types')
def get_all():
    """Gests all transaction types"""
    transaction_types_list = []
    for instance in storage.session.query(TransactionType):
        transaction_types_list.append(instance.__dict__.copy())
    return transaction_types_list


@transaction_type.get('/transaction_type/{id}')
def get_one(id: str):
    """Gets one transaction type by id"""
    transaction_type_obj = storage.session.query(TransactionType).filter(
        TransactionType.transaction_type_id == id).first()
    if transaction_type_obj is None:
        return {}
    return transaction_type_obj.__dict__


@transaction_type.put('/transaction_type/{id}')
def update(id: str, transaction_type: Transaction_type_schema):
    """Updates a transaction type"""
    transaction_type_obj = storage.session.query(TransactionType).filter(
        TransactionType.transaction_type_id == id).first()

    return "updating"


@transaction_type.delete('/transaction_type/{id}')
def delete(id: str):
    """Deletes a transaction type"""
    return "deleting"
