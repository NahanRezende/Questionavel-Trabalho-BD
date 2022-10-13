import 'express-async-errors';
import express, { RequestHandler } from 'express';
import { router } from './routes';

const app = express();

app.use(express.json() as RequestHandler);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(router);

export { app };
