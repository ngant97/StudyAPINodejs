const express = require("express");
const router = express.Router();
const {registerUser,login} = require('../helper');

router.post('/user', (req, res) => {
    let {username, password} = req.body
    registerUser(username, password, function (data, token, error) {
        console.log("token:" + token);
        if (data === 1) {
            res.status(200).send({
                success: "1",
                data: {
                    accessToken: token
                }

            })
        } else {
            res.status(404).send({
                success: "0",
                error: error
            })
        }

    })
});
router.post('/login', (req, res) => {
    let {username, password} = req.body
    login(username, password, function (data, token, error) {
        console.log("token:" + token);
        if (data === 1) {
            res.status(200).send({
                success: "1",
                data: {
                    accessToken: token
                }

            })
        } else {
            res.status(404).send({
                success: "0",
                error: error
            })
        }

    })
});

module.exports = router;
