from typing import Optional
from pydantic import BaseModel
from datetime import datetime


class Transaction_type_schema_in(BaseModel):
    type: str


class Transaction_type_schema_out(Transaction_type_schema_in):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
