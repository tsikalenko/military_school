import Router from 'express';
import UserController from '../controllers/users.controller.js';
import { check } from 'express-validator';

const users = new Router();

users.post(
    '/registration',
    [
        check('username', "Username can't is empty").notEmpty(),
        check('firstName', "First name can't is empty").notEmpty(),
        check('lastName', "Last name can't is empty").notEmpty(),
        check('email', "Email can't is empty").notEmpty(),
        check('email', 'Wrong email syntax').isEmail(),
        check('username', "Username can't is empty").notEmpty(),
        check(
            'password',
            'password must be longer then 4 chars but shorter 10'
        ).isLength({ min: 4, max: 10 }),
    ],
    UserController.userCreate
);

users.post(
    '/login',
    [check('token', "Token can't be empty").notEmpty()],
    UserController.getToken
);

users.put(
    '/user/update',
    [
        check('username', "Username can't be empty").notEmpty(),
        check('firstName', "First name can't be empty").notEmpty(),
        check('lastName', "Last name can't be empty").notEmpty(),
        check('email', "Email can't be empty").notEmpty(),
        check('email', 'Wrong email syntax').isEmail(),
        check('username', "Username can't be empty").notEmpty(),
        check(
            'password',
            'password must be longer then 4 chars but shorter 10'
        ).isLength({ min: 4, max: 10 }),
    ],
    UserController.updateUser
);

users.post(
    '/user',
    [check('token', "Token can't be empty").notEmpty()],
    UserController.getUser
);

users.delete(
    '/user',
    [check('token', "Token can't be empty").notEmpty()],
    UserController.deleteUser
);

export default users;
