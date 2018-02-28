#!/bin/bash

# sh scripts/json/sign-up.sh

curl "https://aqueous-atoll-85096.herokuapp.com/games/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo

# {"game":{"id":4525,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":443,"email":"mypants@ga"},"player_o":null}}
