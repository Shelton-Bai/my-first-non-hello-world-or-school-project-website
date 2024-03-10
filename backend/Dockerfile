FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=shabloink
ENV MYSQL_DATABASE=shabingus
ENV MYSQL_AUTHENTICATION_PLUGIN=mysql_native_password

EXPOSE 3306

COPY init.sql /docker-entrypoint-initdb.d/