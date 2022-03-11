#!/usr/bin/python3
"""
initialize the models package
"""

from sqlalchemy.ext.declarative import declarative_base

# Declare Base for SQL Alchemy table creation
Base = declarative_base()
from models.engine.db import DBStorage

# creates instance for DBStorage that allows communication with DB through this instance
storage = DBStorage()

# Starts an SQL session and creates the tables in DB
storage.reload()
print("hice reload")
