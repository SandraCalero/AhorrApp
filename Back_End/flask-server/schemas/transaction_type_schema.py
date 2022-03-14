from typing import Optional
from pydantic import BaseModel


class Transaction_type_schema_in(BaseModel):
    type: str


class Transaction_type_schema_out(BaseModel):
    type: str
    transaction_type_id: int

    class Config:
        orm_mode = True
