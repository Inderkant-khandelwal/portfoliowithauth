const jwt  = require("jsonwebtoken");
const User = require("../models/userSchema");

const Authenticate = async (req , res , next)=>{
       try{
          const token = req.cookies.myc;
          const is_valid_token = jwt.verify(token , process.env.SECRET_KEY);
          console.log("token verified")
          console.log(is_valid_token);
          
          const is_user_exists = await User.findOne({_id:is_valid_token._id , "tokens.token":token});
            
           if(!is_user_exists){
               throw new Error("User Not Found");
           }
          
           req.token = token;
           req.is_user_exists = is_user_exists;
           req.userId = is_user_exists._id;
           next(); 

        }catch(e){
           res.status(401).send("Unauthorized:No Token Provided");
           console.log(e);
       }     
    
}

module.exports = Authenticate;