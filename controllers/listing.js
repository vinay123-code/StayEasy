const Listing = require("../models/listing.js");
const axios = require("axios");



module.exports.index = async(req, res) => {
    const { category , q } = req.query; 

    let filter = {};
    if (category) {
        filter.category = category; 
    }
   
    if (q) {
        filter.$or = [
            { location: { $regex: q, $options: "i" } }, 
            { country:  { $regex: q, $options: "i" } },
            { title:    { $regex: q, $options: "i" } }, 
        ];
    }

    const alllisting = await Listing.find(filter); 

    res.render("./listings/index.ejs", {
        alllisting,
        currCategory: category || null,
        currQuery: q || "" 
    });
}

module.exports.renderNewForm = (req,res)=>{
    res.render("./listings/new.ejs"); 
}

module.exports.createListing = async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews",
        populate: {
        path: "author"
    },
     }).populate("owner");
    if(!listing){
        req.flash("error", "listing Does Not Exist");
        res.redirect("/listings")
    }
    // console.log(listing)
      res.render("./listings/show.ejs",{listing});
}

module.exports.renderCreateForm = async (req, res) => {
  const location = req.body.listing.location;

  const geoRes = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        format: "json",
        q: location
      },
      headers: {
        "User-Agent": "WanderlustApp (em3103385@gmail.com)"
      }
    }
  );

  if (!geoRes.data || geoRes.data.length === 0) {
    req.flash("error", "Invalid location");
    return res.redirect("/listings/new");
  }

 const lat = parseFloat(geoRes.data[0].lat);
 const lng = parseFloat(geoRes.data[0].lon);

  const newListing = new Listing(req.body.listing);

  newListing.owner = req.user._id;

  // image
  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename
    };
  }

  // geometry
  newListing.geometry = {
    type: "Point",
    coordinates: [lng, lat]
  };

  await newListing.save();

  req.flash("success", "New Listing Created");

   res.redirect(`/listings/${newListing._id}`);
};

module.exports.renderEditForm = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","listing you requested is does not exist")
        res.redirect("/listings")
    }
    let originalimage = listing.image.url;
    res.render("./listings/edit.ejs",{listing, originalimage});
}

module.exports.renderUpdateForm = async(req, res) => {
    let {id} = req.params;
    
    // geocoding
    const location = req.body.listing.location;
    const geoRes = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: { format: "json", q: location },
        headers: { "User-Agent": "WanderlustApp (em3103385@gmail.com)" }
    });

    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    // update geometry if geocoding succeeded
    if (geoRes.data && geoRes.data.length > 0) {
        const lat = parseFloat(geoRes.data[0].lat);
        const lng = parseFloat(geoRes.data[0].lon);
        listing.geometry = {
            type: "Point",
            coordinates: [lng, lat]
        };
    }

    if (typeof req.file !== "undefined") {
        listing.image = { url: req.file.path, filename: req.file.filename };
    }

    await listing.save();

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.renderDestroyForm = async(req,res)=>{
    let {id} = req.params;
    const deletedList = await Listing.findByIdAndDelete(id);
    console.log(deletedList);
    req.flash("success", "Listing Deleted ")
    res.redirect("/listings");

}