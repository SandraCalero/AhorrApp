#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from models.base_model import Base, BaseModel
from models.user import User
# Base = declarative_base()


class Category(Base, BaseModel):
    """ Class for Category inherited from Base
    """
    __tablename__ = 'categories'
    name = Column(String(45), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    transaction_type_id = Column(Integer, ForeignKey(
        'transaction_types.id'), nullable=False)
    transactions = relationship(
        "Transaction", backref="categories", cascade="all, delete, delete-orphan")
    budgets = relationship("Budget", backref="categories",
                           cascade="all, delete, delete-orphan")
