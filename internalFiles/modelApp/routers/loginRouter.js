const userModel = require('../mongo');

const JWT = require('jsonwebtoken');
function loginFunction(req, res)
{
   let data = req.body;
   
   let user = await userModel.findOne({email: data.email});

   if(user)
   {
       if(user.password==data.password)
       {
            let payload = user['_id'];
            
            res.json(
                {
                    message: "user is logged in ",
                    user: data
                }
            )
       }
   }
   else
   {
       res.json(
           {
               message: "User not found"
           }
       )
   }
}

module.exports = loginFunction;
