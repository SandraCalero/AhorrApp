from typing import Optional
from pydantic import BaseModel
from schemas.category_schema import CategorySchema


class UserSchema(BaseModel):

    first_name: str
    last_name: str
    email: str
    categories: list[CategorySchema] = []

    class Config:
        orm_mode = True