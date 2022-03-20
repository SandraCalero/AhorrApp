#!/usr/bin/python3
""" object that handles all default RestFul API actions
for transaction_types """
from fastapi import APIRouter, status, HTTPException
from models import storage
from models.user import User
from schemas.user_schema import UserSchema, UserCreate, UserBase, UserUpdate
from typing import List, Dict
from fastapi.encoders import jsonable_encoder
from sqlalchemy import inspect


user = APIRouter()


def object_as_dict(obj):
    """Transforms an sqlalchemy object into a dictionary"""
    return {c.key: getattr(obj, c.key)
            for c in inspect(obj).mapper.column_attrs}


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
    return new_user


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
