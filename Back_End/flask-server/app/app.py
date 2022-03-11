from flask import Flask
from fastapi import FastAPI
# from debug_toolbar.middleware import DebugToolbarMiddleware
import uvicorn

app = FastAPI(debug=True)
# app.add_middleware(DebugToolbarMiddleware)


@app.get('/')
async def index():
    return "Hello Sebastian joder"

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
