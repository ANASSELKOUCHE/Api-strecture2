const{character}=require("../data");
const {myCallback}=require("../Function/findData")


const deletData = (req ,res) => {
   /**  let index;

    character.map((char, i)=>{
        if(char.age ==39){
            index == i
        }
    })
    character.splice(index , 1)
    res.send("Data remove sescufly"); */

    
        const { age } = req.params;
        const indexOfChar = character.findIndex(myCallback(age == 34));
        character.splice(indexOfChar, 1);
        res.send("delet !");
      
}

module.exports = {deletData};