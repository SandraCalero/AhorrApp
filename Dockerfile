# Pulling low weight image from docker hub
FROM python:3.8-alpine

# COPY The requirements.txt from inside Back end dir to a dir called exact the same inside the container
COPY ./Back_End/requirements.txt /Back_End/requirements.txt

# Setting up The dir created before as work dir of the container 
WORKDIR /Back_End

# Running installation of libraries inside the container
RUN pip install -r requirements.txt

# Copy of all the back end folder into the container
COPY ./Back_End /Back_End

# Setting up the PORT that will be listening
ENV PORT 5000
EXPOSE $PORT

# configure the container to run in an executed manner
ENTRYPOINT [ "python3" ]

CMD ["./api/v1/app.py" ]