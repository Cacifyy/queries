// Directly find and print listings of the first two superhosts
db.listings.find({ host_is_superhost: 't' }).limit(2).forEach(function(superhost) {
    db.listings.find({ host_id: superhost.host_id }).forEach(printjson);
});