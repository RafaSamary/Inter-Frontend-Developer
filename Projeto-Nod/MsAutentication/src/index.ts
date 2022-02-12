
import express, {Request, Response, NextFunction} from "express";
import errorHandler from "./middlewares/error-handler-middleware";
import authorizationRouter from "./routers/authorization.router";
import statusRoute from "./routers/status.route";
import usersRouters from "./routers/users.route";

const app = express();

// Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// Configuração de Rotas
app.use(usersRouters);
app.use(statusRoute);
app.use(authorizationRouter);

// Configuração dos Handlers de Erro
app.use(errorHandler);



// Inicialização do Servidor
app.listen(3000, () => {

    console.log("Aplicação na porta 3000!");
});

