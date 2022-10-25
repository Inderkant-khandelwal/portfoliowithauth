const mongoose = require('mongoose');
const Db = process.env.DATABASE;
mongoose.connect(Db,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection Succesfully");
}).catch((e)=>{
    console.log(`Failed Connection reason  =  ${e}`);
})
