const mongoose = require('mongoose');
const mongoURI= "mongodb+srv://foodDesk:finalproject@cluster0.cutxrxs.mongodb.net/foodDesk?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    const fetched_data = mongoose.connection.db.collection("foodCategory");
    const data = await fetched_data.find({}).toArray();
    console.log(data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
  module.exports = connectToMongo;