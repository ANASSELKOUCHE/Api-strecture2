/** 
 * instalit the router
 **/ 

const express = require("express");

const {getData}= require("../controllers/gitDatacontrollers");
const {postData} = require("../controllers/postcontroler");
const { deletData } = require("../controllers/deletcontroler");
const { updateData } = require("../controllers/updatedata");




const Router = express.Router();

/**
 * @method :Get
 * @path :"/"
 * @description hereis a router we import the users from the folder of data and  the file of index.js
 */

Router.get("/" , getData)
Router.post("/" , postData)
Router.delete("/" , deletData)
Router.put("/", updateData);
 


/**
 * @method :Get
 * @path :"/"
 * @description: route for testing
 * todo:this step is important to export the module
 
 */


module.exports={Router};