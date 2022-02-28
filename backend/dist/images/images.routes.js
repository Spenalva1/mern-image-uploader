"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("../lib/multer"));
const images_controller_1 = require("./images.controller");
const imagesRouter = express_1.default.Router();
imagesRouter.get('/', (req, res) => {
    console.log('hola');
    res.send('hola que tal');
});
imagesRouter.post('/', multer_1.default.single('image'), images_controller_1.createImage);
exports.default = imagesRouter;
