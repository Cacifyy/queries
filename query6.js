// Group listings by host_id and count the number of listings for each host, sorted by the number of listings
db.listings.aggregate([
    {
        $group: {
            _id: "$host_id",
            num_listings: { $sum: 1 }
        }
    }
]).sort({ num_listings: -1 }).forEach(printjson);