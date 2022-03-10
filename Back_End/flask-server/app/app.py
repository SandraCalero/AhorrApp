from flask import Flask
import os
from sqlalchemy import create_engine
from sqlalchemy.sql import text
from models.user import Base, User
from models.category import Category
from models.transactions import Transactions
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)


HBNB_MYSQL_USER = os.getenv('HBNB_MYSQL_USER')
HBNB_MYSQL_PWD = os.getenv('HBNB_MYSQL_PWD')
HBNB_MYSQL_HOST = os.getenv('HBNB_MYSQL_HOST')
HBNB_MYSQL_DB = os.getenv('HBNB_MYSQL_DB')
HBNB_ENV = os.getenv('HBNB_ENV')

engine = create_engine(
    f'mysql+mysqldb://{HBNB_MYSQL_USER}:{HBNB_MYSQL_PWD}@{HBNB_MYSQL_HOST}/{HBNB_MYSQL_DB}')


@app.route('/')
def index():
    Session = sessionmaker(bind=engine)
    session = Session()
    Base.metadata.create_all(engine)

    lst = []
    for instance in session.query(Transactions).order_by(Transactions.value):
        # print(f"{instance.id}: {instance.name}")
        lst.append(instance.name)

    session.commit()
    session.close()
    return str(lst)


if __name__ == '__main__':
    """ Main Function """
    host = '0.0.0.0'
    port = '5000'
    app.run(host=host, port=port, threaded=True)

