import os
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from models import Base
from models.user import User
from models.transaction_type import TransactionType
from models.category import Category
from models.transaction import Transaction
from models.budget import Budget

# Import Enviormental variables
HBNB_MYSQL_USER = os.getenv('HBNB_MYSQL_USER')
HBNB_MYSQL_PWD = os.getenv('HBNB_MYSQL_PWD')
HBNB_MYSQL_HOST = os.getenv('HBNB_MYSQL_HOST')
HBNB_MYSQL_DB = os.getenv('HBNB_MYSQL_DB')

# Create Engine
engine = create_engine(
    'mysql+mysqldb://{}:{}@{}/{}').format(
    HBNB_MYSQL_USER,
    HBNB_MYSQL_PWD,
    HBNB_MYSQL_HOST,
    HBNB_MYSQL_DB
)

# Start Session
Session = sessionmaker(bind=engine)
session = Session()

Base.metadata.drop_all(engine)
