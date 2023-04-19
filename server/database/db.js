const mongoose = require('mongoose')

const connectdb = async (database_url) => {
    try{
        const db_options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbname: 'whatsapp_clone'
        }
        mongoose.connect(database_url, db_options)
        console.log("connected successfully...");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectdb