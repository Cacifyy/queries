# Set the base directory for saving the output files
$baseDir = "C:\Users\Path\To\Where\You\Want\Query\Output\Folder"

# Query 1: Find and print the first 3 listings
mongosh myDatabase --eval "load('query1.js')" > "$baseDir\query1Report.json"

# Query 2: Find and print the first 10 listings
mongosh myDatabase --eval "load('query2.js')" > "$baseDir\query2Report.json"

# Query 3: Directly find and print listings of the first two superhosts
mongosh myDatabase --eval "load('query3.js')" > "$baseDir\query3Report.json"

# Query 4: Find all the unique host_name values
mongosh myDatabase --eval "load('query4.js')" > "$baseDir\query4Report.json"

# Query 5: Find all places with more than two beds in a specified neighbourhood, ordered by review_scores_rating in descending order
mongosh myDatabase --eval "load('query5.js')" > "$baseDir\query5Report.json"

# Query 6: Show the number of listings per host
mongosh myDatabase --eval "load('query6.js')" > "$baseDir\query6Report.json"

# Query 7: Find the average review_scores_rating per neighbourhood, only show those scoring 95 and above, ordered by rating in descending order
mongosh myDatabase --eval "load('query7.js')" > "$baseDir\query7Report.json"
