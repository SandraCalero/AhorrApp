from app.app import *

if __name__ == '__main__':
    """ Main Function """
    host = '0.0.0.0'
    port = '5000'
    app.run(host=host, port=port, threaded=True)
