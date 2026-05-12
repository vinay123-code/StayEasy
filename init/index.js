const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const { init } = require("../models/review.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wounderlust";

main().then( ()=>{
    console.log("CONNECTED TO DB ")
}).catch(err =>{
    console.log(err)
});
async function main() {
    await mongoose.connect(MONGO_URL);
    await initDB();
}

const initDB = async () =>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({...obj, owner:"69febd087313fdd22491a505"}));
    await Listing.insertMany(initdata.data);
    console.log("data was initialized")
}


