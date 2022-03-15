from typing import Optional
from pydantic import BaseModel
from schemas.category_schema import CategorySchema

class UserBase(BaseModel):
    first_name = str
    last_name = str
    email: str

class UserCreate(UserBase):
    password: str
class UserSchema(UserBase):
    categories: list[CategorySchema] = []

    class Config:
        orm_mode = True