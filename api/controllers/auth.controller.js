
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import Wallet from '../models/wallet.model.js';

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({
      success:true,
      message:'User created successfully!',
      data:newUser
    });
  } catch (error) {
    return res.status(500).json({success:false,message:'error while in signUp'+ error});
  }
};

// export const signin = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if(!email || !password){
//       return res.status(404).json({message:"email or password must be required."})
//     }
//     const validUser = await User.findOne({ email });
//     if (!validUser) return next(errorHandler(404, 'User not found!'));
//     const validPassword = bcryptjs.compareSync(password, validUser.password);
//     if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const { password: pass, ...rest } = validUser._doc;
//     res
//       .cookie('access_token', token, { httpOnly: true })
//       .status(200)
//       .json({ user: rest, token });
//   } catch (error) {
//     return res.status(500).json({success:false,message:'error while in signIn'+ error});

//   }
// };


export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found!'));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
    
    let wallet = await Wallet.findOne({ user: validUser._id });
    if (!wallet) {
      wallet = new Wallet({
        user: validUser._id,
        walletBalance: 0,
        transactionHistory: [],
      });
      await wallet.save();
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ user: rest, token });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error during sign-in: ' + error.message });
  }
};


export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    return res.status(500).json({success:false,message:'error while in Google'+ error});
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    return res.status(200).json('User has been logged out!');
  } catch (error) {
    return res.status(500).json({success:false,message:'error while in SignOut'+ error});
  }
};
