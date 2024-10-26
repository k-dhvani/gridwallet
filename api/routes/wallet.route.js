import express from 'express';
const router = express.Router();
import { verifyToken as authMiddleware } from '../utils/verifyUser.js'; // Middleware to verify user
import { getWallet, discharge, charge } from '../controllers/wallet.controller.js';

// import * as walletController from '../controllers/wallet.controller.js';

// Get wallet details
router.get('/wallet', authMiddleware, getWallet);

// Discharge to grid (earn coins)
router.post('/wallet/discharging', authMiddleware, discharge);

// Charge EV (redeem coins)
router.post('/wallet/charging', authMiddleware, charge);

export default router;