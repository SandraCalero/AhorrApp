#!/usr/bin/python3
""" object that handles all default RestFul API actions for transaction_types """
from fastapi import APIRouter, Response, status, HTTPException
from fastapi.responses import JSONResponse
from pprint import pprint
from models import storage
from models.user import User
from schemas.user_schema import UserSchema
from typing import List, Dict
from fastapi.encoders import jsonable_encoder

user = APIRouter()


@user.get(
    '/user/{id}', 
    tags = ['users'], 
    status_code=200, 
    response_model=UserSchema
    )
def get_user(id: int):
    user = storage.get(User, id)
    print(id)
    if not user:
        raise HTTPException(status_code=400, detail="User not found")
    return user