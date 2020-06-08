import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
