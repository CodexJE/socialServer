const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.status(200).json({ message: 'ahla' });
});

app.use('/api', router);

app.listen(42069, () => {
	console.log(`server on 42069`);
});
