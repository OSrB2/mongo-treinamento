import Connection from './Connection';

const mongoDB = new Connection('mongodb://localhost:27017/treinamento');

export { mongoDB };
