/*
npm instal ==> yarn add
npm run ==>yarn remove
npm unistall 
*/

/**
 * importing from the .env
 */

require("dotenv/config");
const PORT=process.env.PORT;


const express = require('express');
const {Router}=require("./routes/router")
const app = express();
app.use(express.json());
/**
 * importing  express and setu up i server
 */


app.use(Router)


/**
 * listen
 */

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})
