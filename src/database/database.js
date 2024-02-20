const mongoose = require('mongoose');

const connectToDb = () => {
    console.log("Conectando ao database")

    mongoose.connect(
        "mongodb+srv://camizao2022:caio@cluster0.yltlv05.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO"))
    .catch((err) => console.log(err))
};

module.exports = connectToDb;