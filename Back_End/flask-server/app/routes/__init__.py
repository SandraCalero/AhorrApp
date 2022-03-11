#!/usr/bin/python3
""" Blueprint for API """

from fastapi import APIRouter

app_router = APIRouter()

from app.routes.transaction import *
