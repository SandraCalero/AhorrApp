#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from models import Base

# Base = declarative_base()


class User(Base):
    """ Class for State inherited from Base
    """
    __tablename__ = 'users'
    user_id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String(45), nullable=False)
    last_name = Column(String(45), nullable=False)
    email = Column(String(45), nullable=False)
    categories = relationship("Category", backref="users")
