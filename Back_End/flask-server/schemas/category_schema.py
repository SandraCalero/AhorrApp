from typing import Optional
from pydantic import BaseModel

class CategoryBase(BaseModel):
    name:str

class ItemCreate(CategoryBase):
    pass

class CategorySchema(CategoryBase):
    user_id: int
    transaction_type_id: int

    class Config:
        orm_mode = True