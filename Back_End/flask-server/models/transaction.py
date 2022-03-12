#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float, DECIMAL
from datetime import datetime
from models.base_model import Base

# Base = declarative_base()


class Transaction(Base):
    """ Class for Category inherited from Base
    """
    __tablename__ = 'transactions'
    transaction_id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(String(60), nullable=False)
    date = Column(DateTime, default=datetime.now(), nullable=False)
    value = Column(DECIMAL(15, 2), nullable=False, default=0.0)
    category_id = Column(Integer, ForeignKey(
        'categories.category_id'), nullable=False)
