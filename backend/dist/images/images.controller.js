"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage = void 0;
const createImage = (req, res) => {
    if (!req.file) {
        res.status(400).json({ error: 'Image was not uploaded.' });
        return;
    }
    res.status(201).json({
        message: 'Image uploaded successfuly',
        image: String(req.file.path),
    });
};
exports.createImage = createImage;
