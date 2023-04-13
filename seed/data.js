import db from "../db/connection.js";
import Beer from "../models/beer_model.js";
import beer from "./beer.json" assert {type: "json" };

const insertData = async() => {
    // Reset Database
    await Beer.deleteMany({})
    // Insert beer into the database
    await Beer.create(beer);

    // Close DB connection
    db.close();

}

insertData()