const userModel = require('../mongo');

function loginFunction(req, res)
{
   let data = req.body;
   
   let user = await userModel.findOne({email: data.email});

   if(user)
   {
       if(user.password==data.password)
       {
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
