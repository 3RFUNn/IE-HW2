import mongoose from "mongoose";

const database_url =
    process.env.MONGO_URI ||
    "mongodb+srv://admin:Et2Ozs6CnwZ4CFiR@cluster0.hgphhqj.mongodb.net/?retryWrites=true&w=majority";



mongoose.connect(database_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName:"lms"
});

export const mongoose_client = mongoose;
