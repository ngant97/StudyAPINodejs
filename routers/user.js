const express = require("express");
const router = express.Router();
const {registerUser} = require('../helper');

router.post('/user', (req, res) => {
    registerUser(function (data) {
        if (data === 1) {
            res.status(200).send({
                success: "1"
            })
        } else {
            res.status(200).send({
                success: "0"
            })
        }

    })
});

module.exports = router;
