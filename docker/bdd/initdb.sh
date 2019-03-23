#!/bin/sh

psql -U postgres -c "CREATE USER ${CHECKLIST_USER-appuser} WITH ENCRYPTED PASSWORD '${CHECKLIST_PASSWORD-appuser}'"