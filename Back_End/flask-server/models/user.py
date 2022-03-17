#!/usr/bin/python3
"""contains the class definition of a State
    and an instance Base = declarative_base():
"""
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from models.base_model import Base, BaseModel


class User(BaseModel, Base):
    """ Class for State inherited from Base
    """
    __tablename__ = 'users'
    first_name = Column(String(45), nullable=False)
    last_name = Column(String(45), nullable=False)
    email = Column(String(45), unique=True, nullable=False)
    h_password = Column(String(45), nullable=False)
    categories = relationship(
        "Category", backref="users", cascade="all, delete, delete-orphan")
