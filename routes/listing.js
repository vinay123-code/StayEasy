const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/WrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingcontroller = require("../controllers/listing.js")
const multer  = require('multer')
const {storage} = require("../cloudconfig.js");
const upload = multer({ storage });

router.route("/")
.get(wrapAsync(listingcontroller.index)) // index Route
.post(isLoggedIn,upload.single('listing[image]'),validateListing,
 wrapAsync( listingcontroller.renderCreateForm)); // Create Route

//new route 
router.get("/new",isLoggedIn,listingcontroller.renderNewForm)

router.route("/:id")
.get(wrapAsync(listingcontroller.createListing)) //Show Route
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing, wrapAsync( listingcontroller.renderUpdateForm)) //Update Route
.delete(isLoggedIn,isOwner,wrapAsync( listingcontroller.renderDestroyForm)); //Delete Route

 
//Edit Route 
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync( listingcontroller.renderEditForm));

module.exports = router;