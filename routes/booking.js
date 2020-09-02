var express = require('express')
var BookingModel = require('../models/bookings');
var router = express.Router();



router.post('/booking', function(req, res){
    var booking = new BookingModel();
    booking.date = req.body.date;
    booking.save(function(err, book){
        if(err) {
            res.send('error saving book');
        } else {
            console.log(book);
            res.send("booked successfully");
        }
    });
});

module.exports = router;

