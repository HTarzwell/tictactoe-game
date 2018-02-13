#!/bin/bash

# sh scripts/json/sign-up.sh

curl "https://aqueous-atoll-85096.herokuapp.com/games/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "id": "'"${ID}"'",
      "cells": "'"${CELLS}"'",
      "over": "'"${IS_OVER}"'",
      "player_x": {
        "id": "'"${ID}"'"
        "email": "'"${EMAIL}"'"
      },
      "player_o": {
        "id": "'"${ID}"'"
        "email": "'"${EMAIL}"'"
      },
    }
  }'

echo
