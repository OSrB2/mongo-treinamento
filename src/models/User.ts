import { Schema, model } from 'mongoose';

interface IUser {
  nome: string;
  email: string;
  senha: string;
  descricao: string;
  nivel: string;
}

const userSchema = new Schema<IUser>(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    descricao: { type: String, required: true },
    nivel: { type: String, required: true, default: 'USER' },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>('User', userSchema);

export default User;
