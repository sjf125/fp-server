curl --include --request POST http://localhost:3000/vehicles \
  --header "Content-Type: application/json" \
  --data '{
    "vehicle": {
      "state": "MA",
      "plate": "123-ABC",
      "type": "Regular"
    }
  }'
