//Mongo db
const mongoClient = require('mongodb').MongoClient;
const {md5, verifyToken, getToken} = require("../utils")

const uri = "mongodb+srv://ngant97:1@cluster0-m4uoy.mongodb.net/admin?retryWrites=true&w=majority";
const client = new mongoClient(uri, {useNewUrlParser: true});

function registerUser(username, password, callback) {
    mongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log(err);
        } else {
            let db = client.db('Pomodoro')
            let user = db.collection('user');
            let data = {
                name: username,
                pass: md5(password)
            };
            getDataUser(username, dataCallback => {
                if (dataCallback == null) {
                    user.insertOne(data, function (err, res) {
                        if (err) {
                            console.log(err);
                            callback(0, "", "Thêm bản ghi bị lỗi")
                        } else {
                            console.log(data._id)
                            callback(1, getToken({id: data._id}))
                        }

                    });
                } else {
                    callback(0, "", "Đã tồn tại tài khoản trong hệ thống")
                }
            });

        }

    });
}

function getDataUser(name, callback) {
    mongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log(err);
        } else {
            let db = client.db('Pomodoro');
            let user = db.collection('user');
            console.log(name)
            user.findOne({"name": name}, function (err, data) {
                callback(data)
            })
        }
    });
}

function getUser(name, password, callback) {
    mongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log(err);
        } else {
            let db = client.db('Pomodoro');
            let user = db.collection('user');
            user.findOne({"name": name, "pass": password}, function (err, data) {
                callback(data)
            })
        }
    });
}

function login(username, password, callback) {
    mongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log(err);
        } else {
            getUser(username, md5(password), dataCallback => {
                if (dataCallback != null) {
                    if (err) {
                        console.log(err);
                        callback(0, "", "Có lỗi xảy ra")
                    } else {
                        console.log(dataCallback._id)
                        callback(1, getToken({id: dataCallback._id}))
                    }
                } else {
                    callback(0, "", "Không tìm thấy tài khoản trong hệ thông")
                }
            });
        }
    });
}


module.exports = {
    registerUser,
    login
};
