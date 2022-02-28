import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import config from './config/config';
import imagesRouter from './images/images.routes';

// Initialization
const app = express();

// Settings
dotenv.config();
app.set('port', config.port || 8080);

app.use('/uploads', express.static(path.resolve('uploads')));

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

// Routes
app.use('/images', imagesRouter);

export default app;
