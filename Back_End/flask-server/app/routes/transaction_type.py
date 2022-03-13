#!/usr/bin/python3
""" object that handles all default RestFul API actions for transaction_types """
from fastapi import APIRouter, Response, status, HTTPException
from starlette.status import HTTP_204_NO_CONTENT
from models import storage
from models.transaction_type import TransactionType
from schemas.transaction_type_schema import Transaction_type_schema_out
from schemas.transaction_type_schema import Transaction_type_schema_in
from typing import List
from fastapi.encoders import jsonable_encoder

transaction_type = APIRouter()


@transaction_type.post('/transaction_types',
                       tags=['transaction_types'], status_code=201)
def insert(transaction_type: Transaction_type_schema_in):
    """Inserts one transaction type"""
    new_transaction_type = {"type": transaction_type.type}
    inserted_row = TransactionType(**new_transaction_type)
    storage.session.add(inserted_row)
    storage.session.commit()
    storage.session.flush()
    return {
        "data": inserted_row,
        "response": "Inserted Successfully"
    }


@transaction_type.get('/transaction_types', response_model=List[Transaction_type_schema_out],
                      tags=['transaction_types'], status_code=200)
def get_all():
    """Gests all transaction_types"""
    print(
        f'Respuesta: {storage.session.query(TransactionType).__dict__}')

    transaction_types_list = []
    for instance in storage.session.query(TransactionType):
        transaction_types_list.append(instance.__dict__.copy())
    return transaction_types_list


@transaction_type.get('/transaction_type/{id}', response_model=Transaction_type_schema_out,
                      tags=['transaction_types'], status_code=200)
def get_one(id: int):
    """Gets one transaction type by id"""
    transaction_type_obj = storage.session.query(TransactionType).filter(
        TransactionType.transaction_type_id == id).first()
    if transaction_type_obj is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return transaction_type_obj.__dict__


@transaction_type.put('/transaction_type/{id}', tags=['transaction_types'], status_code=201)
async def update(id: int, transaction_type: Transaction_type_schema_in):
    """Updates a transaction type"""
    dictionary_to_update = {TransactionType.type: transaction_type.type}
    transaction_type_obj = storage.session.query(TransactionType).filter(
        TransactionType.transaction_type_id == id).update(dictionary_to_update)
    # transaction_type_obj.type = transaction_type.type
    if transaction_type_obj == 0:
        raise HTTPException(status_code=404, detail="Item not found")
    updated_row = storage.session.query(TransactionType).filter(
        TransactionType.transaction_type_id == id).first()
    return {
        "data": updated_row.__dict__,
        "response": "Updated Successfully"
    }


@transaction_type.delete('/transaction_type/{id}', status_code=status.HTTP_204_NO_CONTENT, tags=['transaction_types'])
def delete(id: int):
    """Deletes a transaction type"""
    transaction_type_obj = storage.session.query(TransactionType).filter(
        TransactionType.transaction_type_id == id).first()
    if transaction_type_obj is None:
        raise HTTPException(status_code=404, detail="Item not found")
    storage.session.delete(transaction_type_obj)
    storage.session.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
