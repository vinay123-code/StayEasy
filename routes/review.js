const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const Reviewcontroller = require("../controllers/review.js")


// review route 

router.post("/",isLoggedIn,validateReview, wrapAsync(Reviewcontroller.CreateReview));


router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(Reviewcontroller.DestroyReview));

module.exports = router
