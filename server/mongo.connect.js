const mongoose = require('mongoose');

const connect = () => {
    const uri = process.env.MONGO_URI;
    const options = {};
    mongoose.connect(uri, options).then(
        () => {
            console.log("MongoDB database connection established successfully");
        },
        err => {
            console.log(`Error while connecting to the MongoDB database: ${err}`);
        }
    );
}

module.exports = connect;

