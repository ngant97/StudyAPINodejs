//Mongo db
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://ngant97:1@cluster0-m4uoy.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true});

function registerUser(callback) {
    console.log("registerUser")
    client.connect(function (errr, db) {
        if (err) throw console.log(err);
        var user = db.collection('user');
        var data = {
            name: "nga",
            pass: "1"
        };
        user.insertOne(data, function (err, res) {
            if (err) throw console.log(err);
            console.log("hihi xong rồi")
            callback("hihi xong rồi")
        });
        db.close()
    })
}

module.exports = {
    registerUser
};
