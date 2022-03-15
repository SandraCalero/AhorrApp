#!/usr/bin/python3
""" object that handles all default RestFul API actions for transaction_types """
from fastapi import APIRouter, Response, status, HTTPException
from fastapi.responses import JSONResponse
from pprint import pprint
from models import storage
from models.user import User
from schemas.category_schema import CategorySchema
from typing import List
from fastapi.encoders import jsonable_encoder

category = APIRouter()


@category.get('/category', tags = ['categories'], status_code=200, response_model=List[CategorySchema])
def get_categories():
    return "hello world"

@category.get('/user/{user_id}/categories', tags = ['categories'], status_code=200, response_model=List[CategorySchema])
def get_categories(user_id: int):
    user = storage.get(User, user_id)
    if user is None:
        raise HTTPException(status_code=400, detail="User not found")

    user_categories = user.categories

    return [category for category in user_categories]