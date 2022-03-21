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

classes = {
    "Category": Category,
    "TransactionType": TransactionType,
    "Transaction": Transaction,
    "Budget": Budget,
    "User": User
}


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
        self.__engine = create_engine(
            'mysql+mysqldb://{}:{}@{}/{}'.format(HBNB_MYSQL_USER,
                                                 HBNB_MYSQL_PWD,
                                                 HBNB_MYSQL_HOST,
                                                 HBNB_MYSQL_DB)
        )

    def reload(self):
        """reloads data from the database"""
        from models.base_model import Base
        Base.metadata.create_all(self.__engine)
        sess_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(sess_factory)
        self.session = Session

    def all(self, cls=None):
        """query on the current database session"""
        new_dict = {}
        for clss in classes:
            if cls is None or cls is classes[clss] or cls is clss:
                objs = self.session.query(classes[clss]).all()
                for obj in objs:
                    key = "{}.{}".format(obj.__class__.__name__, obj.id)
                    new_dict[key] = obj
        return (new_dict)

    def new(self, obj):
        """add the object to the current database session"""
        self.session.add(obj)

    def save(self):
        """commit all changes of the current database session"""
        self.session.commit()

    def delete(self, obj=None):
        """delete from the current database session obj if not None"""
        if obj is not None:
            self.session.delete(obj)

    def close(self):
        """call remove() method on the private session attribute"""
        self.session.remove()

    def get(self, cls, id):
        """ retrieves one object """
        if id is not None and cls is not None\
                and cls.__name__ in classes and type(id) is int:
            return self.session.query(cls).filter(cls.id == id).first()
        return None

    def count(self, cls=None):
        """ number of objects in storage matching the given class. """
        return (self.all(cls).__len__())
