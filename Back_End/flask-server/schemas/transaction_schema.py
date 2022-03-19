#!/usr/bin/python3

"""Creates all clases to handle like schema validation into
transactions
"""

from typing import Optional, Dict
from pydantic import BaseModel
from datetime import date as date_type, datetime


class TransactionBase(BaseModel):
    """Validation transaction Base used to require transaction data"""
    description: str
    date: date_type
    value: float
    category_id: int


class TransactionCreate(TransactionBase):
    """Used to handle optional validations"""
    pass


class TransactionUpdate(TransactionBase):
    """Used to validate data in put operation"""
    description: Optional[str] = None
    date: Optional[date_type] = None
    value: Optional[float] = None
    category_id: Optional[int] = None


class TransactionCustom(BaseModel):
    """Used to validate data in custom get operation"""
    expenses: dict
    incomes: dict
    budget: dict


class TransactionWithCategory(TransactionBase):
    """Used to show all the transaction data including category name"""
    category_name: Optional[str] = None


class TransactionSchema(TransactionBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
