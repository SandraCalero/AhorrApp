from typing import Optional
from pydantic import BaseModel
from datetime import date as date_type, datetime


class TransactionBase(BaseModel):
    description: str
    date: date_type
    value: float
    category_id: int


class TransactionCreate(TransactionBase):
    pass


class TransactionUpdate(TransactionBase):
    description: Optional[str] = None
    date: Optional[date_type] = None
    value: Optional[float] = None
    category_id: Optional[int] = None


class TransactionSchema(TransactionBase):
    id: int
    created_at: datetime
    updated_at: datetime


    class Config:
        orm_mode = True
