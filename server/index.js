const express = require('express');
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const port = process.env.PORT || 3000;
const router = require('./router.js');
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// app.get('/api', (req, res) => {
//   res.status(200).send('Hi!')
// })

app.use('/api', router);

app.listen(port, () => console.log(`Connected to port ${port}`))