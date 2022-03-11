#!/usr/bin/python3
"""
Contains the class DBStorage
"""

from os import getenv
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.ext.declarative import declarative_base

from models.user import User
from models.transaction_type import TransactionType
from models.category import Category
from models.transaction import Transaction
from models.budget import Budget


class DBStorage:
    """interacts with the MySQL database"""
    __engine = None
    session = None

    def __init__(self):
        """Instantiate a DBStorage object"""
        HBNB_MYSQL_USER = getenv('HBNB_MYSQL_USER')
        HBNB_MYSQL_PWD = getenv('HBNB_MYSQL_PWD')
        HBNB_MYSQL_HOST = getenv('HBNB_MYSQL_HOST')
        HBNB_MYSQL_DB = getenv('HBNB_MYSQL_DB')
        self.__engine = create_engine('mysql+mysqldb://{}:{}@{}/{}'.format(HBNB_MYSQL_USER,
                                                                           HBNB_MYSQL_PWD,
                                                                           HBNB_MYSQL_HOST,
                                                                           HBNB_MYSQL_DB))

    def reload(self):
        """reloads data from the database"""
        from models import Base
        Base.metadata.create_all(self.__engine)
        sess_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(sess_factory)
        self.session = Session
