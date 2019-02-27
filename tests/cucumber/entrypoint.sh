#!/bin/sh

set -e
echo "Demarrage"

echo "curl"
while ! curl -sSL "http://selenium-hub:4444/wd/hub/status" 2>&1 \
        | jq -r '.value.ready' 2>&1 | grep "true" >/dev/null; do
    echo 'Waiting for the Grid'
    sleep 1
done

echo "Selenium Grid is up - executing tests"
exec yarn test