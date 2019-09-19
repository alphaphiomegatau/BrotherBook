import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import Brother from './models/Brother';
import { MONGODB_URI } from './util/secrets';

const app = express();

app.use(cors());

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB. Error: ' + err);
    process.exit(2);
});

app.get('/brothers', (req, res) => {
    Brother.find((err, brothers) => {
        if (err) {
            return res.sendStatus(500);
        }

        return res.json(brothers);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
