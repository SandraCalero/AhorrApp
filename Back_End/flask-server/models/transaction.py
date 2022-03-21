#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy import Column, Integer, String, ForeignKey,\
    DateTime, Float, DECIMAL, Date
from datetime import date
from models.base_model import Base, BaseModel

# Base = declarative_base()


class Transaction(BaseModel, Base):
    """ Class for Category inherited from Base
    """
    __tablename__ = 'transactions'
    description = Column(String(60), nullable=False)
    date = Column(Date, default=date.today(), nullable=False)
    value = Column(DECIMAL(15, 2), nullable=False, default=0.0)
    category_id = Column(Integer, ForeignKey(
        'categories.id'), nullable=False)
