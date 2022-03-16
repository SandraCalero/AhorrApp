from fastapi import FastAPI
from models import storage

from app.routes import transaction

app = FastAPI()

app.include_router(transaction)
# app.add_middleware(DebugToolbarMiddleware)
print("esto aqui.")


@app.get('/')
async def index():
    return "Testing All datasfsf."

if __name__ == '__main__':
    """ Main Function """
