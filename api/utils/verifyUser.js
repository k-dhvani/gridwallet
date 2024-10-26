// import jwt from 'jsonwebtoken';
// import { errorHandler } from './error.js';

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;

//   if (!token) return next(errorHandler(401, 'Unauthorized'));

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return next(errorHandler(403, 'Forbidden'));

//     req.user = user;
//     next();
//   });
// };

import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
import User from '../models/user.model.js'; // Import your User model

// Named export for verifyToken middleware
export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token || req.header('x-auth-token'); // Support both cookie and header token

  if (!token) {
    return next(errorHandler(401, 'Unauthorized: No token provided'));
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user to req.user
    req.user = decoded;

    // Check if the user exists in the database
    const user = await User.findById(req.user.id);

    if (!user) {
      return next(errorHandler(401, 'Unauthorized: User not found'));
    }

    // If the user exists, proceed to the next middleware
    next();
  } catch (err) {
    return next(errorHandler(403, 'Forbidden: Invalid token'));
  }
};
