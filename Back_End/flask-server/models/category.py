#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from models import Base
from models.user import User
# Base = declarative_base()


class Category(Base):
    """ Class for Category inherited from Base
    """
    __tablename__ = 'categories'
    category_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(45), nullable=False)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    transaction_type_id = Column(Integer, ForeignKey(
        'transaction_types.transaction_type_id'), nullable=False)
    transactions = relationship("Transaction", "categories")
    