"""
This script runs the python_webapp_flask application using a development server.
"""

from os import environ
from python_webapp_flask import app
app.debug = True

if __name__ == '__main__':
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', '1111'))
    except ValueError:
        PORT = 1111
    app.run(HOST, PORT)
