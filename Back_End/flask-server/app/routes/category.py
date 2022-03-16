#!/usr/bin/python3
""" object that handles all default RestFul API actions for transaction_types """
from fastapi import APIRouter, Response, status, HTTPException
from fastapi.responses import JSONResponse
from pprint import pprint
from models import storage
from models.user import User
from models.category import Category
from models.transaction_type import TransactionType
from schemas.category_schema import ItemCreate
from schemas.category_schema import CategoryBase
from schemas.category_schema import CategorySchema
from typing import List
from fastapi.encoders import jsonable_encoder
from operator import attrgetter

category = APIRouter()


@category.post(
    '/categories',
    response_model=CategorySchema,
    tags=['categories'],
    status_code=201
)
def insert_category(category: CategoryBase):
    """Inserts one category"""
    dictionary = category.dict()
    if dictionary is None:
        HTTPException(status_code=400, detail="Not a JSON")

    # extract values from dictionary and assignment to variables
    print(dictionary)

    user_id, transaction_type_id  = [dictionary[key] for key in ['user_id', 'transaction_type_id']]

    print(f"user id: {user_id}")
    user = storage.get(User, user_id)
    pprint(user)
    if not user:
        print("inside exeption")
        raise HTTPException(status_code=400, detail="User Not Found")

    transaction_type = storage.get(TransactionType, transaction_type_id)
    if transaction_type is None:
        raise HTTPException(
            status_code=400, detail="Transaction type Not Found")
    category = Category(**dictionary)
    category.save()
    return category


@category.get('/user/{user_id}/categories', tags=['categories'], status_code=200, response_model=List[CategorySchema])
def get_categories_by_user(user_id: int):
    """Gets all the categories form an specific user"""
    user = storage.get(User, user_id)
    if user is None:
        raise HTTPException(status_code=400, detail="User not found")
    user_categories = user.categories
    return [category for category in user_categories]


@category.get('/categories', tags=['categories'], status_code=200, response_model=List[CategorySchema])
def get_all_categories():
    """Gets all the categories"""
    categories = storage.all(Category)
    if categories.__len__() == 0:
        raise HTTPException(status_code=404, detail="Not items were found")
    return JSONResponse([value.to_dict() for value in categories.values()])


@category.get(
    '/category/{id}',
    response_model=CategorySchema,
    tags=['categories'],
    status_code=200
)
def get_one_category(id: int):
    """Gets one category by id"""
    category = storage.get(Category, id)
    if category:
        return JSONResponse(category.to_dict())
    raise HTTPException(status_code=404, detail="Item not found")


@category.put(
    '/category/{id}',
    response_model=CategorySchema,
    tags=['categories'],
    status_code=201
)
def update_category(
    id: int,
    category: ItemCreate
):
    """Updates a transaction type"""
    dictionary = category.dict()
    if dictionary is None:
        raise HTTPException(status_code=400, detail="Not a JSON")
    category = storage.get(TransactionType, id)
    if category is None:
        raise HTTPException(status_code=404, detail="Not found")

    [setattr(category, key, value) for key, value in dictionary.items()
        if key not in ['id', 'created_at', 'updated_at']]
    category.save()
    storage.save()
    return JSONResponse(category.to_dict(), status_code=201)


@category.delete(
    '/category/{id}',
    status_code=status.HTTP_204_NO_CONTENT,
    tags=['categories']
)
def delete_category(id: int):
    """Deletes a transaction type"""
    category = storage.get(Category, id)
    if category is None:
        raise HTTPException(status_code=404, detail="Not found")
    category.delete()
    storage.save()
    return JSONResponse({}, status_code=201)
