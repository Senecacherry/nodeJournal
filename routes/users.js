const express = require('express');
const router = express.Router();

// This responds to a GET request for the list of users 
router.get('/all_users', (req, res) => {
    console.log('got a GET request for all users');
    res.send('User page listening');
})

// This responds to a GET request for the list of single user by id
router.get('/get_user', (req, res) => {
    console.log('got a GET request for single user');
    res.send('User page got 1 usr');
})

// responds to POST request and creates user
router.post('/', (req, res) => {
    console.log('user has been created');
    res.send('user has been created');
})

// responds to delete request and removes user
router.delete('/', (req, res) => {
    res.send('user has been deleted');
})

module.exports = router;
