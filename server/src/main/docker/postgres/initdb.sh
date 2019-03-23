#!/bin/sh

psql -U postgres -c "CREATE USER ${CHECKLIST_USER-devuser} WITH ENCRYPTED PASSWORD '${CHECKLIST_PASSWORD-devuser}'"