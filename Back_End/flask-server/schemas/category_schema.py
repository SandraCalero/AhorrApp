#!/usr/bin/python3
"""Schema for Category"""

from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime
from schemas.transaction_schema import TransactionSchema


class ItemCreate(BaseModel):
    """Creatinf schema Create just in case something aditional is needed"""
    name: str
    transaction_type_id: int


class CategoryBase(ItemCreate):
    """Creting Schema Base model to handle requested data"""
    user_id: int
    transaction_type_id: int


class CategorySchema(CategoryBase):
    """Full Category schema"""
    id: int
    created_at: datetime
    updated_at: datetime
    transactions: Optional[List[TransactionSchema]] = []

    class Config:
        """Activating ORM mode"""
        orm_mode = True
