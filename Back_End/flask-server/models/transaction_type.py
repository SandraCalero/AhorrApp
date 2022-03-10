#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from models import Base



class TransactionType(Base):
    """ Class for Transaction inherited from Base
    """
    __tablename__ = 'transaction_type'
    transaction_type_id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(String(45), nullable=False)
