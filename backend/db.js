const mongoose = require('mongoose');
const mongoURI= "mongodb+srv://foodDesk:finalproject@cluster0.cutxrxs.mongodb.net/foodDesk?retryWrites=true&w=majority";

const connectToMongo = async () => {
    try {
    //   mongoose.set("strictQuery", false);
      mongoose.connect(mongoURI);
      console.log("Connected to Mongo Successfully!");
      const fetchedData= mongoose.connection.db.collection("foodCategory");
      fetchedData.find({}).toArray((err,data)=>{
        if(err)console.log(err);
        else{
          console.log(data);
        }
      })
      
    } catch (error) {
      console.log(error);
    }
  };
  module.exports = connectToMongo;