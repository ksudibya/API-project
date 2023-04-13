import mongoose from "mongoose";
import chalk from "chalk";

const MONGODB_URI = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/beer-api"
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };








// This is for Model.findByIDAndUpdate method, specifically so that {new: true} is the default
mongoose.set("returnOriginal", false);

mongoose
    .connect(MONGODB_URI, mongooseConfig)
    .catch((error) =>
        console.log("Errror connecting to MongoDB", error.message)
        );
// event listener for disconnected from server       
mongoose.connection.on("disconnected", ()=> console.log(chalk.bold("Disconnected from MongoDB")));
// event listener for connection error
mongoose.connection.on("error", (error) => console.error(chalk.red(`mongoDB connection error: ${error}`)));

export default mongoose.connection;


