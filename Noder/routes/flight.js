var express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
var router = express.Router();
const { flightValidation } = require('../config/validation');
const jwt = require('jsonwebtoken');
const Flight = require('../models/Flight');

router.get('/details', async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (err) {
        res.send('Error ', err);
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        if(!flight) return res.json('No data found');
        res.json(flight);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.patch('/details/:id', async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        flight.number = req.body.number;
        await flight.save().then(flght => {
            res.send(flght);
        }).catch(err => console.log(err));
        res.json(flight);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete('/details/:id', async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        await flight.deleteOne().then(flght => {
            res.send(flght);
        }).catch(err => console.log(err));
        res.json(flight);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/create', (req, res) => {
    const { number, place_from, place_to, time_from, time_to } = req.body;
    //let errors = [];

    const { error } = flightValidation(req.body);//schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newFlight = new Flight({
        number,
        place_from,
        place_to,
        time_from,
        time_to
    });

    try {
        newFlight.save().then(Flight => {
            res.send({ Flight: Flight._id });
        }).catch(err => console.log(err));
    } catch (err) {
        res.send('Error')
    }
});

module.exports = router;
