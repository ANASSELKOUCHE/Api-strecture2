const{character}=require("../data/index")


const postData = (req ,res)=>{
    const { name, age } = req.body;
    const newcharacter = {
        name,
        age, 
      };

    character.push(newcharacter)
    res.send("Data add sescufly");
}

module.exports = {postData};
