"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const get_users_1 = require("./controllers/get-users/get-users");
const mongo_get_users_1 = require("./repositories/get-users/mongo-get-users");
const mongo_create_user_1 = require("./repositories/create-user/mongo-create-user");
const create_user_1 = require("./controllers/create-user/create-user");
const mongo_update_user_1 = require("./repositories/update-user/mongo-update-user");
const update_user_1 = require("./controllers/update-user/update-user");
const mongo_delete_user_1 = require("./repositories/delete-user/mongo-delete-user");
const delete_user_1 = require("./controllers/delete-user/delete-user");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mongoGetUsersRepoository = new mongo_get_users_1.MongoGetUsersRepository();
    const getUsersController = new get_users_1.GetUsersController(mongoGetUsersRepoository);
    const { statusCode, body } = yield getUsersController.handle();
    res.status(statusCode).send(body);
}));
routes.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mongoCreateUserRepository = new mongo_create_user_1.MongoCreateUserRepository();
    const createUserController = new create_user_1.CreateUserController(mongoCreateUserRepository);
    const { body, statusCode } = yield createUserController.handle({
        body: req.body,
    });
    res.status(statusCode).send(body);
}));
routes.patch("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mongoUpdateUserRepository = new mongo_update_user_1.MongoUpdateRepository();
    const updateUserController = new update_user_1.UpdateUserController(mongoUpdateUserRepository);
    const { body, statusCode } = yield updateUserController.handle({
        body: req.body,
        params: req.params,
    });
    res.status(statusCode).send(body);
}));
routes.delete("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mongoDeleteUserRepository = new mongo_delete_user_1.MongoDeleteRepository();
    const deleteUserController = new delete_user_1.DeleteUserController(mongoDeleteUserRepository);
    const { body, statusCode } = yield deleteUserController.handle({
        params: req.params,
    });
    res.status(statusCode).send(body);
}));
