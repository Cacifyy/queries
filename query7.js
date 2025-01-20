// Find neighborhoods with an average review score of 95 or higher, sorted by average rating
db.listings.aggregate([
    {
        $group: {
            _id: "$neighbourhood",
            avg_rating: { $avg: "$review_scores_rating" }
        }
    },
    {
        $match: {
            avg_rating: { $gte: 95 }
        }
    },
    {
        $sort: {
            avg_rating: -1
        }
    }
]).forEach(function(doc) {
    printjson(doc);
});