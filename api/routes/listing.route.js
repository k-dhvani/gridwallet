import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/', verifyToken, createListing);
router.delete('/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/:id', getListing);
router.get('/', getListings);

export default router;
