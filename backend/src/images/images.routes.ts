/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import express from 'express';
import upload from '../lib/multer';
import { createImage } from './images.controller';

const imagesRouter = express.Router();

imagesRouter.post('/', upload.single('image'), createImage);

export default imagesRouter;
