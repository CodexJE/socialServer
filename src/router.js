const express = require('express');
const router = express.Router();

const prisma = require('./db');

router.get('/tweets', async (req, res) => {
	try {
		const tweets = await prisma.tweet.findMany({
			include: {
				user: true,
			},
		});
		res.json(tweets);
	} catch (error) {
		console.error('Error fetching tweets:', error);
		res.status(500).send('Internal Server Error');
	}
});

router.post('/tweets', async (req, res) => {
	console.log('request body: ', req);
	const content = req.body.content;

	const tweet = await prisma.tweet.create({
		data: {
			body: content,
			user: {
				create: {
					username: 'farouk',
					password: 'azihueaiuzh',
				},
			},
		},
	});

	res.json(tweet);
});

module.exports = router;
