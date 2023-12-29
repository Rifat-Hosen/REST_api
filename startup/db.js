const mongoose = require("mongoose");

module.exports = () => {
   mongoose.connect(process.env.DATABASE_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    })
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err.message));
};