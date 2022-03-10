from app.app import *

if __name__ == '__main__':
    """ Main Function """
    host = '0.0.0.0'
    port = '5000'
    uvicorn.run("app.app:app", host=host, port=port)