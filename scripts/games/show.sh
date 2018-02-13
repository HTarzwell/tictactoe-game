#!/bin/bash

# ID=2 sh scripts/json/change-password.sh

curl "https://aqueous-atoll-85096.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "id": "'"${ID}"'"
  }'

echo
