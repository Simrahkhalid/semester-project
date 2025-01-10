const express=require('express');
const app=express();
const port=3000;
const {cloudinaryConnect}=require('./config/cloudnaryconfig');
const fileUpload = require("express-fileupload");
const teamRouter = require("./routes/team_routes");
const {dbConnnect} =require('./config/dbconnect');


cloudinaryConnect();
dbConnnect();

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);

app.use(teamRouter);
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});