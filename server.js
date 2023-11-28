import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Videos from './dbModel.js';
//App Config
const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  'mongodb+srv://admin:91537035Hugo@cluster0.vrklx63.mongodb.net/?retryWrites=true&w=majority';

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url, {});
//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello TheWebDev'));

/**
 * app.post('/dating/cards', (req, res) => {
  const data = req.body;
  Cards.create(data)
    .then((result) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
 */
app.post('/v2/posts', async (req, res) => {
  try {
    const data = req.body;
    Videos.create(data);
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get('/v2/posts', (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
