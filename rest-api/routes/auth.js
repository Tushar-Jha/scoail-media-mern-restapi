const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')


//register
router.post('/register', async (req, res) => {
    try {
        //creating hashedPassword
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(req.body.password, salt,(err,hash)=>{
        //     if(err){
        //         console.log(err);
        //     }
        // });

        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        //creating new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hashedPassword,
        });

        //saving new user to database
        const result = await newUser.save()
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
    }
})


//login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if(!user){
            res.status(404).send("user not found");
            return;
        }
        // !user && res.status(404).send("user not found");

        // const sentPassword=req.body.password;
        console.log(req.body.password,user.password);
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        // const validPassword=(sentPassword===user.password);
        if(!validPassword){
            res.status(400).send("Wrong Password");
            return;
        }
        // !validPassword && ;

        user && res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;