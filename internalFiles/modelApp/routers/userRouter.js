const userModel = require('../mongo');

userRouter.route('/').get(getUser).post(postUser).patch(updateUser).delete(deleteUser);

userRouter.route('/getCookies').get(getCookies);

userRouter.route('/setCookies').get(setCookies);

userRouter.route('/:id').get(getUserById);

async function getUser(req, res)
{
    let allUsers = await userModel.find();

    res.json({
        message: "list of all users",
        data: allUsers
    });
}

function postUser(req, res)
{
    console.log(req.body);

    users = req.body;

    res.json({
        message: "Received Successfully",
        user: req.body
    });
}

async function updateUser(req, res)
{
    let dataToUpd = req.body;

    let user = await userModel.findOneAndUpdate({email:'jk2@ff.com'}, dataToUpd);

    res.json(
        {
            message: "Updated successfully"
        }
    );
}

async function deleteUser(req, res)
{
    let dataTodel= req.body;
    let user = await userModel.findOneAndDelete(dataTodel);
    res.json(
    {
        message: "Deleted-Successfully",
        data: user
    });
}

function getUserById(req, res)
{
    res.send(users[req.params.id]);

    res.send(users[req.params.id]);

    res.json(
    {
        message: "Id received successfully",
    }
    );
}

function setCookies(req, res)
{
    res.cookie('isLoggedIn', true, {maxAge:1000*60*60*24, secure:true, httpOnly:true});
    res.send('Cookies has been set');
}

function getCookies(req, res)
{
    const cookie = req.cookie;

    console.log("Cookie is being created");
}
