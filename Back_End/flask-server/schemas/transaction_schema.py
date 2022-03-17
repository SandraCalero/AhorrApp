from typing import Optional
from pydantic import BaseModel
from datetime import date


class TransactionSchema(BaseModel):
    description: str
    date: date
    value: float

    class Config:
        orm_mode = True

