// Query 5: Find all places with more than two beds in a specified neighbourhood, ordered by review_scores_rating in descending order
var results = db.listings.find({ beds: { $gt: 2 }, neighbourhood_group_cleansed: 'Puente de Vallecas' }).sort({ review_scores_rating: -1 }).toArray();
printjson(results);
