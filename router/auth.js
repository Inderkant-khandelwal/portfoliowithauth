const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authenticate = require("../middleware/authenticate");
const router = express.Router();
require('../db/conn');

const User = require('../models/userSchema');



router.post("/register" , async (req , res)=>{
    // console.log(req.body);
    // res.send('Bol shankar bhagwan ki jai');
    // res.json({message:req.body});
    const {name,email,phone,work,password,cpassword} = req.body;
    // console.log(name);

    if(name && email && phone && work && password && cpassword != ""){
        
        // User.findOne({email:email}).then((userExists)=>{
        //       if(userExists){
        //         const uEx =  res.json(
        //             {
        //                 exists:"Already Registerd E-maild Id"
        //             }
        //         )
        
        //         return  uEx;
        //       }

        //       // now if email is not there pls insert the user

        //       const user = new User({
        //           //dbKey:yourformValue
        //         //   name:name,
        //         name,
        //         email,
        //         phone,
        //         work,
        //         password,
        //         cpassword
        //       })

        //       user.save().then(()=>{
        //           res.status(201).json({create:'true'});
        //       }).catch((err)=>{
        //           res.status(500).json({erro:'true'})
        //       })



        // }).catch((e)=>{
        //     console.log(e);
        // })

        try{
          const userRes = await User.findOne({email:email});
            if(userRes){
                const uEx =  res.status(422).json(
                                {
                                    exists:"Already Registerd E-maild Id",
                                    status:422,
                                });
                 return uEx;

            }else if(password != cpassword){
                const uExx =  res.status(422).json(
                    {
                        exists:"Password not match Client Side",
                        status:422,
                    });
                return uExx;
            }else{
                // now storing the userRegisteration via async await
                        const userSave = new User({
                            name,email,phone,work,password,cpassword
                        })

                        // here write code of the hash pasword
                        const userSveRes = await userSave.save();
                       
                        if(userSveRes){
                            res.status(201).json({created:"Successful"})
                        }else{
                            res.status(422).json({
                                FailedCreation:"True",
                                status:422,
                            })
                        }
   
            }

            

        }catch(e){
            console.log(`req not made error = ${e}`);

        }
         
    }else{
       const resA =  res.status(422).json(
            {
                error:"All fields required !",
                status:422,
            }
        )

        return resA;
    }
})

// now making the userLogin code

 router.post('/login', async (req , res)=>{
     let token;
     const {email , password} = req.body;
     if(email && password != ""){
        try{
            const userData = await User.findOne({email});
            if(userData){
                const result = await bcrypt.compare(password , userData.password);
                 token = await userData.generateAuthToken();

               

                if(result){
                    res.cookie("myc" , token , {
                        expires:new Date(Date.now() + 20000000000),
                        httpOnly:true
                    })
                    
                    res.status(200).json({
                        Authenticated:'true',
                        status:'granted'
                    })
                   
                
                }else{
                    res.status(200).json({
                        Authenticated:'false',
                        status:422,
                    })
                }
               
            }else{
                res.status(422).json({
                    wrongEmail:'true',
                    status:422,
                })  
            }
         }catch(e){
             console.log(e);
         }
        
     }else{
        
        res.status(422).json({
            emptyFields:'true',
            status:422,
        }) 
     }
 })

  
 router.get("/about" , authenticate ,  (req , res ) =>{
       res.send(req.is_user_exists);
 })


 router.get("/getdata" , authenticate ,  (req , res ) =>{
    res.send(req.is_user_exists);
})

router.post("/insertcontact" , authenticate , async (req , res)=>{
       const {name , email , phone , message} = req.body;
        
         if(name !== "" && email !== "" && phone !=="" && message !==""){
             const userRes = await User.findOne({_id:req.userId});
               if(userRes){
                const addMRes = await userRes.addMessage(name , email , phone , message);
                   const createdMRes =  await userRes.save();
                      
                   if(createdMRes){
                       res.status(201).json({
                           is_success:'true'
                       })
                   }else{
                    res.status(422).json({
                        failed:'true'
                    })
                   }

               }else{
                res.send({error_message:'user not found'});
               }
         }else{
             res.send({error_message:'some filed are empty'});
         }
        
})

router.get("/logout" ,   (req , res ) =>{
     res.clearCookie('myc' , {path:'/'});
     res.status(200).send("User Logout");
})

module.exports = router;