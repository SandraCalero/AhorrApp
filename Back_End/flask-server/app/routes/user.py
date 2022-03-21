#!/usr/bin/python3
""" object that handles all default RestFul API actions
for transaction_types """
from sqlalchemy import inspect
from fastapi.encoders import jsonable_encoder
from typing import List, Dict
from schemas.user_schema import UserSchema, UserCreate, UserBase, UserUpdate
from fastapi import APIRouter, status, HTTPException
from models import storage
from models.user import User
from app.routes.category import insert_category


user = APIRouter()


@user.get(
    '/user-email/{email}',
    tags=['users'],
    status_code=200,
    response_model=UserSchema
)
def get_user_by_email(email: str):
    """Get existing user by email"""
    if not email:
        raise HTTPException(status_code=404, detail="No email input")
    users = storage.all(User)
    if not users:
        return None
    for user in users.values():
        if email == user.email:
            return user

    raise HTTPException(
        status_code=400, detail=f"User with email {email} not found")


def create_default_user_categories(user_id: int):
    """Create the default categories for a new user"""
    expenses = ['Rent', 'Utilities', 'Grocery', 'Entertainment']
    incomes = ['Salary', 'Investments']
    [insert_category({'name': expense, 'transaction_type_id': 1,
                     'user_id': user_id}) for expense in expenses]
    [insert_category({'name': income, 'transaction_type_id': 2,
                     'user_id': user_id}) for income in incomes]
    return storage.get(User, user_id)


@user.post(
    '/user',
    tags=['users'],
    status_code=201,
    response_model=UserSchema
)
def create_user(user: UserCreate):
    """Create new user in database"""
    dictionary = user.dict()
    users = storage.all(User)
    if users:
        for user in users.values():
            if dictionary['email'] == user.email:
                return user
    new_user = User(**dictionary)
    new_user.save()
    user_id = new_user.id
    return create_default_user_categories(user_id)


@user.get(
    '/users',
    tags=['users'],
    status_code=200,
    response_model=List[UserSchema]
)
def get_all_users():
    """Get all the users"""
    users = storage.all(User)
    return [user for user in users.values()]


@user.get(
    '/user/{id}',
    tags=['users'],
    status_code=200,
    response_model=UserSchema
)
def get_user_by_id(id: int):
    """Get existing user by given id"""
    user = storage.get(User, id)
    if not user:
        raise HTTPException(status_code=400, detail="User not found")
    print(type(user))
    return user


@user.put('/user/{id}',
          tags=['users'],
          status_code=201, response_model=UserSchema)
def update_user(id: int, update_info: UserUpdate):
    """Update a user"""
    dictionary = update_info.dict()
    if dictionary is None:
        raise HTTPException(status_code=400, detail="Not a JSON")
    user = storage.get(User, id)
    if user is None:
        raise HTTPException(status_code=404, detail="Not found")
    [setattr(user, key, value)
     for key, value in dictionary.items() if key not in [
        'id', 'created_at', 'updated_at'] and value is not None]
    storage.save()
    return user


@user.delete('/user/{id}', status_code=status.HTTP_200_OK, tags=['users'])
def delete_user(id: int):
    """Delete a user"""
    user = storage.get(User, id)
    if user is None:
        raise HTTPException(status_code=404, detail="Not found")
    user.delete()
    storage.save()
    return {}
