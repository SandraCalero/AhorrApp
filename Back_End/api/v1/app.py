#!/usr/bin/python3
"""Starting point"""

from flask import Flask

app = Flask(__name__)


@app.route('/', strict_slashes=False)
def index_route():
    """This is only a test index route"""
    return "This is a super basic flask app."


@app.route('/api/', strict_slashes=False)
def users():
    """This is only a test api index route"""
    return "This is a test route :)"


if __name__ == '__main__':
    app.run(port=5000)
