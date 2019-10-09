//Mongo db
const mongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://ngant97:1@cluster0-m4uoy.mongodb.net/admin?retryWrites=true&w=majority";
const client = new mongoClient(uri, {useNewUrlParser: true});

function registerUser(callback) {
    mongoClient.connect(uri, function (err, client) {
        if(err){
            console.log(err);
        }
        else {
            let db = client.db('Pomodoro')
            let user = db.collection('user');
            let data = {
                name: "nga",
                pass: "1"
            };
            user.insertOne(data, function (err, res) {
                if (err) {
                    console.log(err);
                    callback(0)
                } else{
                    callback(1)
                }

            });
        }

    });
}

module.exports = {
    registerUser
};
