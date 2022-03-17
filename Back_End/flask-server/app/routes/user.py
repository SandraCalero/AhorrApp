#!/usr/bin/python3
""" object that handles all default RestFul API actions for transaction_types """
from fastapi import APIRouter, status, HTTPException
from models import storage
from models.user import User
from schemas.user_schema import UserSchema, UserCreate, UserBase, UserUpdate
from typing import List, Dict
from fastapi.encoders import jsonable_encoder

user = APIRouter()


@user.get('/user/{id}', tags=['users'], status_code=200, response_model=UserSchema)
def get_user_by_id(id: int):
    """Get existing user by given id"""
    user = storage.get(User, id)
    if not user:
        raise HTTPException(status_code=400, detail="User not found")
    print(type(user))
    return user


@user.get('/user-email/{email}', tags=['users'], status_code=200)
def get_user_by_email(email: str):
    """Get existing user by email"""
    if not email:
        raise HTTPException(status_code=400, detail="No email input")
    users = storage.all(User)
    print(users)
    if not users:
        return None
    for user in users.values():
        if email == user.email:
            print("email found")
            print(type(user))
            return user

    raise HTTPException(
        status_code=400, detail=f"User with email {email} not found")


@user.post('/user', tags=['users'], status_code=201, response_model=UserSchema)
def create_user(user: UserCreate):
    """Create new user in database"""
    dictionary = user.dict()
    print(dictionary)
    db_user = get_user_by_email(user.email)
    if db_user:
        raise HTTPException(
            status_code=400, detail=" Email already registered")
    print(f"db_user is: {db_user}")
    new_user = User(**dictionary)
    new_user.save()
    print(new_user.id)
    return new_user


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

    [setattr(user, key, value) for key, value in dictionary.items() if key not in [
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
