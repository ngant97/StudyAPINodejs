const express = require("express");
const router = express.Router();
const {registerUser, login} = require('../helper');

router.post('/user', (req, res) => {
    let {name, username, password, address, phoneNumber, gender} = req.body
    registerUser(name, username, password, address, phoneNumber, gender, function (data, noti, error) {
        if (data === 1) {
            res.status(200).send({
                success: "1",
                data: {
                    noti: noti
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
    login(username, password, function (data, token, error, body) {
        console.log("token:" + token);
        console.log("body" + body)
        if (data === 1) {
            res.status(200).send({
                success: "1",
                data: {
                    accessToken: token,
                    id: body._id,
                    name: body.name,
                    username: body.username,
                    address: body.address,
                    phoneNumber: body.phone,
                    gender: body.gender
                },

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
