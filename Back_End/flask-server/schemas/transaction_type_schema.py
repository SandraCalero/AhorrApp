from typing import Optional
from pydantic import BaseModel


class Transaction_type_schema(BaseModel):
    type: str
