const express = require('express')
const app = express();
const mongoose=require('mongoose');
const port = 5000;


const database=module.exports=()=>{
  const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }
  try{
    mongoose.connect("mongodb+srv://foodDesk:finalproject@cluster0.cutxrxs.mongodb.net/foodDesk?retryWrites=true&w=majority");
    console.log("Database connected successfully");
    // const fetchedData= mongoose.connection.db.collection("data");
    // fetchedData.find({}).toArray(function (err,data){
    //   if(err)console.log(err);
    //   else{
    //     console.log(data);
    //   }
    // })
  }
  catch(error){
    console.log(error);
    console.log("Database connection failed");
  }
}
database();
// const connectToMongo=require('./db')
// connectToMongo();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api',require("./routes/CreateUser"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})