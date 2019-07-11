// server.js
import express from 'express';
// import bodyParser from 'body-parser';

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true,
// }));

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({ message: 'YAY! Congratulations! Your first endpoint is working' }));

app.listen(3000, () => console.log('app running on port 3000'));
