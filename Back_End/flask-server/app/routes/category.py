#!/usr/bin/python3
""" object that handles all default RestFul API actions
for transaction_types """
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
from schemas.category_schema import CategoryCustom
from typing import List


category = APIRouter()


def create_default_category_budget(category):
    """Create a budget when a category is created"""
    if category.transaction_type_id == 1:
        from app.routes.budget import create_budget
        from schemas.budget_schema import BudgetCreate
        budget = BudgetCreate(category_id=category.id, value=0)
        create_budget(budget)


@category.post(
    '/categories',
    response_model=CategorySchema,
    tags=['categories'],
    status_code=201
)
def insert_category(category: CategoryBase):
    """Inserts one category"""
    category = category.dict()
    if category is None:
        HTTPException(status_code=400, detail="Not a JSON")
    user_id, transaction_type_id = \
        [category[key]
            for key in ['user_id', 'transaction_type_id']]
    user = storage.get(User, user_id)
    if not user:
        raise HTTPException(status_code=400, detail="User Not Found")
    transaction_type = storage.get(TransactionType, transaction_type_id)
    if transaction_type is None:
        raise HTTPException(
            status_code=400, detail="Transaction type Not Found")
    category = Category(**category)
    category.save()
    create_default_category_budget(category)
    return category


def get_categories_by_user(user_id: int):
    """Getting all categories of an specific user"""
    result = storage.session.query(
        Category,
        User,
        TransactionType
    )\
        .select_from(Category)\
        .join(User)\
        .join(TransactionType)\
        .filter(Category.user_id == user_id)\
        .all()
    return result


@category.get(
    '/user/{user_id}/categories',
    tags=['categories'],
    status_code=200,
    response_model=CategoryCustom
)
def custom_get_categories_by_user(user_id: int):
    """Gets all the categories form an specific user"""
    user = storage.get(User, user_id)
    if user is None:
        raise HTTPException(status_code=400, detail="User not found")
    dictionary = {
        'expenses': [],
        'incomes': []
    }
    categories = get_categories_by_user(user_id)
    for category, user, transactiontype in categories:
        print(category.to_dict())
        if category.transaction_type_id == 1:
            dictionary['expenses'].append(category)
        if category.transaction_type_id == 2:
            dictionary['incomes'].append(category)
    return dictionary


@category.get(
    '/categories',
    tags=['categories'],
    status_code=200,
    response_model=List[CategorySchema]
)
def get_all_categories():
    """Gets all the categories"""
    categories = storage.all(Category)
    if categories.__len__() == 0:
        raise HTTPException(status_code=404, detail="No Category items were found")
    return [value for value in categories.values()]


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
        return category
    raise HTTPException(status_code=404, detail="Category not found")


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
        raise HTTPException(status_code=404, detail="TransactionType Not found")

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
        raise HTTPException(status_code=404, detail="Category Not found")
    category.delete()
    storage.save()
    return JSONResponse({}, status_code=201)
