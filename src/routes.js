import { Router } from 'express';

// Autenticacao e controle de usuários
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

// Recipients
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

// Este middleare global só funciona para as rotas que estiverem a baixo dele.
routes.use(authMiddleware);

// USERS!
routes.put('/users', UserController.update);
routes.post('/users', UserController.store);

// RECIPIENTS
routes.get('/recipients', RecipientController.show);
routes.get('/recipients/:id', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

export default routes;
