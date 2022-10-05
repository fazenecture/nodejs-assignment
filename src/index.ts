import express from 'express';
import cors from 'cors';
import router from './routes/index.routes';
import dotenv from 'dotenv';
import { defaultRouteMessage } from './constants/constants';
dotenv.config();;

const app : express.Application = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);

// Default Route Handler
app.get('*', (req, res) => {
    res.send(defaultRouteMessage);
});

app.listen(process.env.PORT ?? 4000, () => {
    console.log(`🌎 Server is running on port http://localhost:${process.env.PORT ?? 4000}`);
});
