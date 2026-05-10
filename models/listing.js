const mongoose = require("mongoose");
const Review = require("./review");
const { ref } = require("joi");
const Schema = mongoose.Schema;


const listingschema = new Schema ({
    title: {
        type: String,
        // required: true
    },
    description: {
        type:String,
        // required: true
    },
    image: {
        url: String,
        filename: String
},
    price:{
        type: Number,
        // required: true
    },
    location: { 
        type:String,
        // required:true  
    },
    country: {
        type: String,
        // required: true
    }, 
    category: {
        type: String,
        enum: ["Trending", "Rooms", "Iconic Cities", "Mountains", "Castles", "Amazing Pools", "Camping", "Farms", "Arctic"],
        default: "Trending" 
    },
    reviews: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Review"
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    geometry: {
     type: {
      type: String,
      enum: ["Point"],
      default: "Point"
    },
     coordinates: {
      type: [Number] // [lng, lat]
    }
  }

});

listingschema.post("findOneAndDelete", async(listing) =>{
    if (listing){
       await Review.deleteMany({_id:{$in: listing.reviews}});
    }
    
})

const Listing = mongoose.model("Listing",listingschema);
module.exports = Listing;