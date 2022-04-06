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