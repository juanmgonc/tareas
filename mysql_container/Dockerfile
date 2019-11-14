FROM mysql:latest

MAINTAINER me

ENV MYSQL_DATABASE=acamica \
    MYSQL_ROOT_PASSWORD=12345678

ADD script.sql /docker-entrypoint-initdb.d


EXPOSE 3306