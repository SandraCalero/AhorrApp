#!/usr/bin/python3
""" module of budget Schemas """

from typing import Optional, List
from pydantic import BaseModel
from schemas.category_schema import CategorySchema
from datetime import datetime


class BudgetBase(BaseModel):
    """Validation budget base used to require budget data"""
    value = float
    category_id: int


class BudgetCreate(BudgetBase):
    """Data validation for create budget"""
    pass


class BudgetSchema(BudgetBase):
    """Data validation for Budget return schema"""
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
