#!/usr/bin/python3
""" object that handles all default RestFul API actions for transaction_types """
from fastapi import APIRouter, Response, status, HTTPException
from fastapi.responses import JSONResponse
from pprint import pprint
from models import storage
from models.user import User
from schemas.user_schema import UserSchema, UserCreate
from typing import List, Dict
from fastapi.encoders import jsonable_encoder

user = APIRouter()


@user.get('/user/{id}', tags=['users'], status_code=200, response_model=UserSchema)
def get_user_by_id(id: int):
    user = storage.get(User, id)
    if not user:
        raise HTTPException(status_code=400, detail="User not found")
    return user

@user.get('/user-email/{email}', tags=['users'], status_code=200)
def get_user_by_email(email: str):
    if not email:
        raise HTTPException(status_code=400, detail="No email input")
    users = storage.all(User)
    print(users)
    if not users:
        raise HTTPException(status_code=400, detail="User not found")
    for user in users.values():
        if email == user.email:
            return user

    raise HTTPException(status_code=400, detail=f"User with email {email} not found")

# @user.post('/user', tags=['users'], status_code=201, response_model=UserSchema)
# def create_user(user: UserCreate):
#     db_user = get_user_by_email(user.email)
#     if db_user:
#         raise HTTPException(status_code=400, detail=" Email already registered")
#     new_user = 