"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRouters = (0, express_1.Router)();
usersRouters.get('/users', (req, res, next) => {
    const users = { userName: "Rafael" };
    res.status(200).json(users);
});
usersRouters.get('/users/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
});
usersRouters.post('/users', (req, res, next) => {
    const newUser = req.body;
    res.status(200).send(newUser);
});
usersRouters.put('/users/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
});
exports.default = usersRouters;
