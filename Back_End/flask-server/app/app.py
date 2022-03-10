from flask import Flask
import os
from sqlalchemy import create_engine
from sqlalchemy.sql import text
from sqlalchemy.exc import SQLAlchemyError
import models
from models import Base
from models.user import User
from models.transaction_type import TransactionType
# from models.category import Category
# from models.transactions import Transactions
from sqlalchemy.orm import sessionmaker
from fastapi import FastAPI
# from debug_toolbar.middleware import DebugToolbarMiddleware
import uvicorn

app = FastAPI(debug=True)
# app.add_middleware(DebugToolbarMiddleware)

HBNB_MYSQL_USER = os.getenv('HBNB_MYSQL_USER')
HBNB_MYSQL_PWD = os.getenv('HBNB_MYSQL_PWD')
HBNB_MYSQL_HOST = os.getenv('HBNB_MYSQL_HOST')
HBNB_MYSQL_DB = os.getenv('HBNB_MYSQL_DB')
HBNB_ENV = os.getenv('HBNB_ENV')

engine = create_engine(
    f'mysql+mysqldb://{HBNB_MYSQL_USER}:{HBNB_MYSQL_PWD}@{HBNB_MYSQL_HOST}/{HBNB_MYSQL_DB}')

try:
    engine.connect()
    print("success")
except SQLAlchemyError as err:
    print("error", err.__cause__)  # this will give what kind of error

Session = sessionmaker(bind=engine)
session = Session()
Base.metadata.create_all(engine)

# @app.get('/')
# async def index():

#     lst = []
#     for instance in session.query(Transactions).order_by(Transactions.date.desc()):
#         lst.append(instance.date)

#     session.commit()
#     session.close()
#     return session.query(Transactions).order_by(Transactions.date.desc())


if __name__ == '__main__':
    """ Main Function """
    host = '0.0.0.0'
    port = '5000'
    uvicorn.run(app, host=host, port=port)

