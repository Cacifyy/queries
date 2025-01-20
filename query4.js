// Query 4: Find all the unique host_name values
printjson(db.listings.distinct('host_name'));