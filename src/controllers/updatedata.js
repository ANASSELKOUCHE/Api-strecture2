
const { character } = require("../data/index");
 const {myCallback} = require("../Function/findData")



const updateData = (req, res) => {
    const {age, name} = req.body;
    
    const myChar = character.find(myCallback(age));
    const indexOfChar = character.findIndex(myCallback(age));
  
    myChar.name = name;
   
    character.splice(indexOfChar, 1, myChar);
  
    res.send("done !");
  };

module.exports = {updateData};