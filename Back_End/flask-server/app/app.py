from fastapi import FastAPI
from models import storage

from app.routes import transaction, transaction_type

app = FastAPI(
    title="AhorraApp API",
    description="Rutas estructuradas para consumir",
    version="0.0.1",
    open_api_tags=[{
        "name": "transaction_types",
        "description": "transaction types routes"
    }]
)

app.include_router(transaction)
app.include_router(transaction_type)
# app.add_middleware(DebugToolbarMiddleware)
print("esto aqui.")


@app.get('/')
async def index():
    return "Testing All datasfsf."

if __name__ == '__main__':
    """ Main Function """
