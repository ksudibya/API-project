import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Beer = new mongoose.Schema({
  id: String,
  name: String,
  phone: String,
  website_url: String,
  state_province: String,
  country: String,
});

export default mongoose.model("beer", Beer);
