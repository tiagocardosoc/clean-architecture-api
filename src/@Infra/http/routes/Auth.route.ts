import { Router } from "express";
import AuthController from "../controllers/Auth.controller";

const route = Router();

const authController = new AuthController()

route.post(
    '/auth/sign-up',
    authController.SignUp.bind(authController)

)

route.post(
    '/auth/sign-in',
    authController.SignIn.bind(authController)
)

export default route;