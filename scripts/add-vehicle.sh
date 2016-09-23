curl --include --request POST http://localhost:3000/vehicles \
  --header "Content-Type: application/json" \
  --data '{
    "vehicle": {
      "state": "RI",
      "plate": "555-555",
      "type": "Valet"
    }
  }'
