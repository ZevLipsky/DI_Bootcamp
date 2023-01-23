import express from 'express'
const router = express.Router();

import {_getAllProducts} from '../controllers/products.js';

router.get('/api/products', _getAllProducts)

export default router;