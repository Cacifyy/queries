// Query 2: Find and print the first 10 listings
printjson(db.listings.find().limit(10).toArray());