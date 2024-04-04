# map-service/Dockerfile
FROM node:14

COPY . /Map

WORKDIR /Map

ADD message.txt /message.txt

RUN apt-get update
RUN apt-get install git -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN apt-get install bash -y

EXPOSE 3001

CMD ["bash", "-c", "cat message.txt"]


