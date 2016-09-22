curl --include --request POST http://localhost:3000/vehicles \
  --header "Content-Type: application/json" \
  --data '{
    "state": "MA",
    "plate": "123-ABC",
    "type": "Regular"
  }'
