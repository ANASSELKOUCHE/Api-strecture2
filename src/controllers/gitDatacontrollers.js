const {character}=require('../data/index');

const getData =(req , res)=>{
    res.json(character);
}

module.exports= {getData};