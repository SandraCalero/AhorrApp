FROM docker.io/python:3.9.7 AS base


WORKDIR /code

COPY ./requirements.txt ./requirements.txt

RUN pip install -r requirements.txt

FROM base AS prod

COPY ./app ./app
COPY ./model ./model
COPY saveapp.py saveapp.py

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "saveapp:app"]

