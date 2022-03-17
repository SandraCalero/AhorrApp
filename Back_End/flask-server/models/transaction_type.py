#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from models.base_model import Base, BaseModel


class TransactionType(BaseModel, Base):
    """ Class for Transaction inherited from Base
    """
    __tablename__ = 'transaction_types'
    type = Column(String(45), nullable=False)
    categories = relationship("Category", backref="transaction_types")
