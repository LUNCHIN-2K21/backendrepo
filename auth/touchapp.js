const MongoClient = require("mongodb");
const url = 'mongodb://localhost:27017/';
const databasename = "GFG";  // Database name
MongoClient.connect(url).then((client) => {
  
    const connect = client.db(databasename);
  
    // Connect to collection
    const collection = connect
        .collection("GFGcollections");
  
    collection.find({}).toArray().then((ans) => {
        console.log(ans);
    });
}).catch((err) => {
  
    // Printing the error message
    console.log(err.Message);
})