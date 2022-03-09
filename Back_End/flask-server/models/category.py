#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey
Base = declarative_base()


class Category(Base):
    """ Class for Category inherited from Base
    """
    __tablename__ = 'category'
    category_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(String(45), ForeignKey('user.user_id'), nullable=False)
    transaction_type_id = Column(String(45), ForeignKey(
        'transaction_type.transaction_type_id'), nullable=False)
    name = Column(String(45), nullable=False)
