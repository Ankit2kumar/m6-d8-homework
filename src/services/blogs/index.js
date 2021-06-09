import express from 'express';
import models from '../../db/index.js';
const Blogs = models.Blog;
const router = express.Router();

router
	.route('/')
	.get(async (req, res, next) => {
		try {
			const data = await Blogs.findAll({
				include: [{ model: Blog, through: { attributes: [] } }],
			});
			res.send(data);
		} catch (e) {
			console.log(e);
		}
	})
	.post(async (req, res, next) => {
		try {
			const data = await Blogs.create(req.body);
			res.send(data);
		} catch (e) {
			console.log(e);
		}
	});

router.route('/:BlogsId/addBlog/:BlogId').post(async (req, res, next) => {
	try {
		const data = await BlogBlogs.create({
			BlogsId: req.params.BlogsId,
			BlogId: req.params.BlogId,
		});
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
