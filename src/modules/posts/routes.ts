import { Router } from 'express';
import controller from './controller';

const routes = Router();

routes.post('/post', controller.create);
routes.get('/post', controller.findAll);

export default routes;
