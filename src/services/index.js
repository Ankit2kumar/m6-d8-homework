import express from 'express';
const route = express.Router();

import blogsRoute from './blogs/index.js';
import authorsRoute from './authors/index.js';

route.use('/authors', authorsRoute);

route.use('/blogs', blogsRoute);

export default route;
