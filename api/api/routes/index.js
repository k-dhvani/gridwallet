import userRouter from './user.route.js';
import authRouter from './auth.route.js';
import listingRouter from './listing.route.js';
import walletRoutes from './wallet.route.js';
import express from "express"

const router = express.Router();

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/listing', listingRouter);
router.use('/wallet', walletRoutes);

export default router;