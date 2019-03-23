#!/usr/bin/env bash

set -e

POSTGRES_USER=${POSTGRES_USER:-$(cat /run/secrets/bi_db_user)}
POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-$(cat /run/secrets/bi_db_password)}
POSTGRES_DB=${POSTGRES_DB:-$(cat /run/secrets/bi_db_name)}

echo ""
echo "connecting to database: "
until psql -q postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@tsn-bi-db:5432/${POSTGRES_DB} -c '\l'; do
  echo "waiting for database setup ..."
  sleep 1
done
echo "database is ready."
echo ""

exec /entrypoint.sh $@