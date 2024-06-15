import bcryptjs from 'bcryptjs'
import User from "../models/user.model.js"
import { errorHandler } from '../utils/error.js';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';


// Route 1: SignUp API
export const signup = async (req,res,next) => {

    const {name, username, email, password} = req.body;

    if(!name || 
       !username || 
       !email || 
       !password || 
       name==='' ||
       username==='' ||
       email==='' ||
       password===''
    ) {
        return next(errorHandler(400, "All fields are required."));
    }

     // Result of express-validator's validation.
     const eXresult = validationResult(req);
     if (!eXresult.isEmpty()) {
        return res.json({errors: eXresult.array()});
     }



    try {

        const validUser = await User.findOne({email});
        if(validUser){
            return next(errorHandler(400, "User already exists."));
        }

        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(password, salt);

        const newUser = new User({
        name,
        username,
        email,
        password: hashedPassword
    });

        await newUser.save();

        const {password:pass, ...rest} = newUser._doc;

        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
        res.status(200).cookie("access_token",token, {
            httpOnly: true
        }).json(rest);

    } catch (error) {
        next(error);
    }
}

// Route 2: SignIn API
export const signin = async (req, res, next) =>{

    const {email, password} = req.body;
    if(!email || !password || email==="" || password===""){
        return next(errorHandler(400, "All fields are required."));
    }

    

    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404, "Incorrect credentials"));
        }

        const {password:pass, ...rest} = validUser._doc;
        
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
            return next(errorHandler(400, "Incorrect credentials."));
        }

        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        res.status(200).cookie("access_token",token, {
            httpOnly: true
        }).json(rest);

    } catch (error) {
        next(error);
    }

}