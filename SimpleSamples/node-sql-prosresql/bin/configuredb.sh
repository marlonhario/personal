#!/bin/bash

database = "monstersdb"

echo "Configuration database: $database"

dropdb -U postgres monstersdb
createdb -U postgres monstersdb

psql -U postgres monstersdb < ./bin/sql/monsters.sql

echo "$database configured"