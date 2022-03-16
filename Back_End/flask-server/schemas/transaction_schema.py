from typing import Optional
from pydantic import BaseModel
from datetime import date, datetime


class TransactionBase(BaseModel):
    description: str
    date: date
    value: float
    category_id: int


class TransactionCreate(TransactionBase):
    pass


class TransactionUpdate(TransactionCreate):
    description: Optional[str] = None
    date: Optional[date] = None
    value: Optional[float] = None
    category_id: Optional[int] = None


class TransactionSchema(TransactionBase):
    id: int
    created_at: datetime
    updated_at: datetime


    class Config:
        orm_mode = True
