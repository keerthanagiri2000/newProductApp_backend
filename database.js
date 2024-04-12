const mongoose = require("mongoose");

const connectToDatabase = async () => {
    const uri="mongodb://localhost:27017/newApp"
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully")
};

module.exports = {connectToDatabase};