//Configuration
require ('dotenv').config();
const app=require('express')();
// require('./model/index');


// //Importing the Routes
// const productRoutes = require('./routes/productRoutes');


// //Initializing the Routes
// app.use('',productRoutes);


//Listenign the server
app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});
