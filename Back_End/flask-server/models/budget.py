#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, DECIMAL
from datetime import datetime
from models import Base
# Base = declarative_base()


class Budget(Base):
    """ Class for State inherited from Base
    """
    __tablename__ = 'budgets'
    budget_id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(DateTime, default=datetime.now, nullable=False)
    value = Column(DECIMAL(15,2), nullable=False, default=0.00)
    category_id = Column(Integer, ForeignKey(
        'categories.category_id'), nullable=False)

