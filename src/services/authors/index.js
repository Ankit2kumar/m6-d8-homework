import express from 'express';
import models from '../../db/index.js';

const Author = models.Author;
const router = express.Router();
const db = models.pool;
router
	.route('/')
	.get(async (req, res, next) => {
		try {
			const query = `select  sc."AuthorId", s.name, s.surname, cl.name
      fromAuthors as cl
      `;
			const data = await db.query(query);
			res.send(data);
		} catch (e) {
			console.log(e);
		}
	})
	.post(async (req, res, next) => {
		try {
			const data = await Module.create(req.body);
			res.send(data);
		} catch (e) {
			console.log(e);
		}
	});

router
	.route('/:id')
	.get(async (req, res, next) => {
		try {
		} catch (e) {
			console.log(e);
		}
	})
	.put(async (req, res, next) => {
		try {
		} catch (e) {
			console.log(e);
		}
	})
	.delete(async (req, res, next) => {
		try {
		} catch (e) {
			console.log(e);
		}
	});

export default router;
