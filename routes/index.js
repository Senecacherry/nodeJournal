const express = require('express');
const router = express.Router();


// Response to homepage request 
router.get('/', (req, res) => {
    res.send('hit that homepage');
})

// Response to GET ALL request 
router.get('/all_entries', (req, res) => {
    console.log('got a GET req for all entries');
    res.send('ALL ENTRIES');
})

// Response to GET BY ID request
router.get('/get_entry/${id}', (req, res) => {
    console.log('got a GET req for entry by ID');
    res.send('HELLO 1 ENTRY');
})

// Responds to POST request from homepage
router.post('/', (req, res) => {
    console.log('got a POST request from homepage');
    res.send('Hello POST');
})

// Response to GET BY ID request
router.delete('/${id}', (req, res) => {
    res.send('entry deleted');
})

module.exports = router;
