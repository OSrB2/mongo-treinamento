import { Request, Response } from 'express';
import { Post } from '../../models';

const controller = {
  async create(req: Request, res: Response) {
    const { user, conteudo } = req.body;

    const newPost = await Post.create({
      user,
      conteudo,
    });

    return res.status(201).json(newPost);
  },

  async findAll(req: Request, res: Response) {
    const post = await Post.find().populate({
      path: 'user',
      select: 'nome',
    });

    return res.json(post);
  },
};

export default controller;
