# Pulling low weight image from docker hub
FROM python:3.8-alpine

# Setting up The dir created before as work dir of the container 
WORKDIR /Back_End

# COPY The requirements.txt from inside Back end dir to a dir called exact the same inside the container
COPY ./requirements.txt .

# Running installation of libraries inside the container
RUN pip install -r requirements.txt
