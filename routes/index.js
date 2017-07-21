const express = require('express');
const router = express.Router();
const NinjaClass = require('../models/ninja');


//Listen to GET
router.get('/ninja', function(req, res, next) {
    NinjaClass.find(req.query).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});
router.get('/one', function(req, res, next) {
    let limiting = parseInt(req.query.size);
    let skiping = parseInt(req.query.offset)
    NinjaClass.find({}).limit(limiting).skip(skiping).then(function(ninja){
        res.send(ninja);
    }).catch(next);
})

//Listen to POST
router.post('/ninja', function(req, res, next) {
    NinjaClass.create(req.body).then(function(e) {
        res.send(e);
    }).catch(next)
})

//Listen to PUT
router.put('/ninja/:id', function(req, res) {
    NinjaClass.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(ninja){
        NinjaClass.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja)
        })
    })
})

//Listen to DELETE
router.delete('/ninja/:id', function(req, res) {
    NinjaClass.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    })
})

module.exports = router;
