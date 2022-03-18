from typing import Optional, List
from pydantic import BaseModel
from schemas.category_schema import CategorySchema


class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: str


class UserCreate(UserBase):
    h_password: str
class UserUpdate(UserBase):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    email: Optional[str] = None


class UserSchema(UserBase):
    categories: Optional[List[CategorySchema]] = []

    class Config:
        orm_mode = True
