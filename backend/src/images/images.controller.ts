/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Request, Response } from 'express';

export const createImage = (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: 'Image was not uploaded.' });
    return;
  }

  res.status(201).json({
    message: 'Image uploaded successfuly',
    image: String(req.file.path),
  });
};
