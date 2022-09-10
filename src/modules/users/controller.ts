import { Request, Response } from 'express';
import { User } from '../../models';

const controller = {
  async create(req: Request, res: Response) {
    const { nome, email, senha, descricao } = req.body;

    const newUser = await User.create({
      nome,
      email,
      senha,
      descricao,
    });

    return res.status(201).json(newUser);
  },

  async findAll(req: Request, res: Response) {
    const users = await User.find();

    return res.status(200).json(users);
  },
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await User.findById(id);

    return res.status(200).json(user);
  },
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email } = req.body;
    const updated = await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          nome,
          email,
        },
      }
    );

    return res.sendStatus(204);
  },
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.sendStatus(204);
  },
};

export default controller;
