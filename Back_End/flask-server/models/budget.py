#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from datetime import datetime
from models import Base
# Base = declarative_base()


class Budget(Base):
    """ Class for State inherited from Base
    """
    __tablename__ = 'budgets'
    budget_id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(DateTime, default=datetime.now)
    value = Column(Integer, nullable=False, default=0)
    category_id = Column(String(45), ForeignKey(
        'category.category_id'), nullable=False)

