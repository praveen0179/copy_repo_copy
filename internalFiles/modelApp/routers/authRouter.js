const express = require('express');

const app = express();

const authRouter = express.Router();

authRouter.route('/signUp').get(middleWare, getSignUp, middleWareX).post(postSignUp);

function middleWare(req, res, next)
{
    console.log("Middle ware reached");
    next();
}

function middleWareX(req, res)
{
    res.sendFile('./public/index.html', {root:__dirname});
    console.log("middleWare x reached");
}

function getSignUp(req, res, next)
{
    //console.log("On get SignUP"); 
    next();
}

async function postSignUp(req, res)
{
    //let obj = req.body;
    //console.log();
    //console.log("on postSignUp");
    //console.log("obj ", obj);
    let dataObj = req.body;
    let data = await userModel.create(dataObj);

    res.json({
        message: "user signed up",
        user: data
    });
}


const JWT = require('jsonwebtoken');
const jwt_key = 'rbjdi3837fj';

authRouter.route('/login', loginFunction);

async function loginFunction(req, res)
{
   let data = req.body;
   
   let user = await userModel.findOne({email: data.email});

   if(user)
   {
       if(user.password==data.password)
       {
            let uid = user['_id'];
            let token = JWT.sign({payload:uid}, jwt_key);
            res.cookie('isLoggedin', token, {httpOnly: true});
            return res.json(
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

module.exports = authRouter;
