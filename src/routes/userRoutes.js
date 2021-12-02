import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // lista os usuários
// router.get('/:id', userController.show); // lista usuário

router.post('/', userController.store); // criação de usuários
router.put('/', loginRequired, userController.update); // update de usuário
router.delete('/', loginRequired, userController.delete); // deleta usuário

export default router;

// em cada controller tem até 5 metodos (convenção)

// index -> lista todos os usuários -> GET
// store ou create -> cria um novo usuário -> POST
// delete -> apaga um usuario -> DELETE
// show -> mostra um usuário -> GET
// update -> atualiza um usuário -> PATCH OU PUT
