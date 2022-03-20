#!/usr/bin/python3

"""Defining schema for user in FAST API validations"""
from typing import Optional, List
from pydantic import BaseModel
from schemas.category_schema import CategorySchema
from datetime import datetime


class UserBase(BaseModel):
    """Validation user Base used to require user data"""
    first_name: str
    last_name: str
    email: str


class UserCreate(UserBase):
    """Used to handle optional validations"""
    h_password: str


class UserUpdate(UserBase):
    """Used to validate data in put operation"""
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    email: Optional[str] = None


class UserSchema(UserBase):
    """Default schema for validation"""
    id: int
    created_at: datetime
    updated_at: datetime
    categories: Optional[List[CategorySchema]] = []

    class Config:
        """Merging the functionality of the ORM with FASTAPI"""
        orm_mode = True
