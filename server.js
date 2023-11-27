import express from 'express';
import mongoose from 'mongoose';
//App Config
const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  'mongodb+srv://admin:91537035Hugo@cluster0.vrklx63.mongodb.net/?retryWrites=true&w=majority';

//Middleware

//DB Config
mongoose.connect(connection_url, {});
//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello TheWebDev'));
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
