from fastapi import FastAPI
from models import storage

from app.routes import category, transaction, transaction_type, user, budget
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="AhorraApp API",
    description="Rutas estructuradas para consumir",
    version="0.0.1",
    open_api_tags=[{
        "name": "transaction_types",
        "description": "transaction types routes"
    }]
)

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(transaction)
app.include_router(transaction_type)
app.include_router(category)
app.include_router(user)
app.include_router(budget)
# app.add_middleware(DebugToolbarMiddleware)


@app.get('/')
async def index():
    """Defines index route"""
    return "<h1>Future landing page</h1>"

if __name__ == '__main__':
    """ Main Function """
