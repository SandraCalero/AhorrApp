#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, DECIMAL, Date
from datetime import date
from models.base_model import Base, BaseModel
# Base = declarative_base()


class Budget(Base, BaseModel):
    """ Class for State inherited from Base
    """
    __tablename__ = 'budgets'
    value = Column(DECIMAL(15, 2), nullable=False, default=0.00)
    category_id = Column(Integer, ForeignKey(
        'categories.id'), nullable=False)
