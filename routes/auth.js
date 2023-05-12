import {Router} from "express";
import {loginUserHandler, registerUserHandler} from "../controllers/auth.js";

const authRouter = Router();

authRouter.post("/login", loginUserHandler);
authRouter.post("/register", registerUserHandler);

export {authRouter};
