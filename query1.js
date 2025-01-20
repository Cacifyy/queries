// Query 1: Find and print the first 3 listings
db.listings.find().limit(3).forEach(printjson);