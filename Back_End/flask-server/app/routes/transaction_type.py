#!/usr/bin/python3
""" object that handles all default RestFul API actions
for transaction_types """
from fastapi import APIRouter, Response, status, HTTPException
from fastapi.responses import JSONResponse
from pprint import pprint
from models import storage
from models.transaction_type import TransactionType
from schemas.transaction_type_schema import Transaction_type_schema_out
from schemas.transaction_type_schema import Transaction_type_schema_in
from typing import List
from fastapi.encoders import jsonable_encoder

transaction_type = APIRouter()


@transaction_type.post(
    '/transaction_types',
    response_model=Transaction_type_schema_out,
    tags=['transaction types'],
    status_code=201
)
def insert_transaction_type(transaction_type: Transaction_type_schema_in):
    """Inserts one transaction type"""
    dictionary = transaction_type.dict()
    if dictionary is None:
        HTTPException(status_code=400, detail="Not a JSON")
    if dictionary.get('type') is None:
        HTTPException(status_code=400, detail="Missing type")
    transaction_type = TransactionType(**dictionary)
    transaction_type.save()
    return JSONResponse(transaction_type.to_dict(), status_code=201)


@transaction_type.get(
    '/transaction_types',
    response_model=List[Transaction_type_schema_out],
    tags=['transaction types'],
    status_code=200
)
def get_all_transaction_types():
    """Gests all transaction_types"""
    transaction_types = storage.all(TransactionType)
    if transaction_types.__len__() == 0:
        raise HTTPException(status_code=404, detail="Not items were found")
    return JSONResponse([value.to_dict()
                         for value in transaction_types.values()])


@transaction_type.get(
    '/transaction_type/{id}',
    response_model=Transaction_type_schema_out,
    tags=['transaction types'],
    status_code=200
)
def get_one_transaction_type(id: int):
    """Gets one transaction type by id"""
    from models.transaction_type import TransactionType

    transaction_type = storage.get(TransactionType, id)
    if transaction_type:
        return JSONResponse(transaction_type.to_dict())
    raise HTTPException(status_code=404, detail="Item not found")


@transaction_type.put(
    '/transaction_type/{id}',
    response_model=Transaction_type_schema_out,
    tags=['transaction types'],
    status_code=201
)
def update_transaction_type(
    id: int,
    transaction_type: Transaction_type_schema_in
):
    """Updates a transaction type"""
    dictionary = transaction_type.dict()
    if dictionary is None:
        raise HTTPException(status_code=400, detail="Not a JSON")
    transaction_type = storage.get(TransactionType, id)
    if transaction_type is None:
        raise HTTPException(status_code=404, detail="Not found")

    [setattr(transaction_type, key, value) for key, value in dictionary.items()
        if key not in ['id', 'created_at', 'updated_at']]
    transaction_type.save()
    storage.save()
    return JSONResponse(transaction_type.to_dict(), status_code=201)


@transaction_type.delete(
    '/transaction_type/{id}',
    status_code=status.HTTP_204_NO_CONTENT,
    tags=['transaction types']
)
def delete_transaction_type(id: int):
    """Deletes a transaction type"""
    transaction_type = storage.get(TransactionType, id)
    if transaction_type is None:
        raise HTTPException(status_code=404, detail="Not found")
    transaction_type.delete()
    storage.save()
    return JSONResponse({}, status_code=201)
