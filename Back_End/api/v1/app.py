#!/usr/bin/python3
"""Starting point"""

from flask import Flask

app = Flask(__name__)


@app.route('/', strict_slashes=False)
def index_route():
    """This is only a test index route"""
    return "This is a super basic flask app"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)
