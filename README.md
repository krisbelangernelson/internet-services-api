# internet-services-api

This is a Node/Express API to be used in conjunction with the front-end https://github.com/krisbelangernelson/internet-provider-ui. See that repo for more details.

## PostgreSQL

- Install PostgreSQL 15
- Setup your new user and db with `pgAdmin`, or with the `psql` shell

### psql shell method

- open a `psql` shell commant prompt (press enter for everything except the password)
- create a new user.
```
CREATE ROLE username WITH LOGIN PASSWORD 'password';
ALTER ROLE username CREATEDB;
GRANT Postgres TO username;
```
- logout with `\q`
- login to psql with the new user
- create a new db:

`CREATE DATABASE new_bd;`

- create the tables (in `src/db`)

## env

Copy the `.env-sample` as `.env` and put int he appropriate values.