const express = require("express");
const bodyParser = require('body-parser');
const monsters = require('./routes/monsters');

const app = express();

app.use(bodyParser.json());
app.use('/monsters', monsters);

app.use((err, req, res, next) => {
	res.json(err);
});


const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

