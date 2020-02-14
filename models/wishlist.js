const mongoose = require('mongoose')

const wishlistSchema = mongoose.Schema({
    article: String,
   
})

const wishlistModel = mongoose.model('wishlists', wishlistSchema)

module.exports = wishlistModel