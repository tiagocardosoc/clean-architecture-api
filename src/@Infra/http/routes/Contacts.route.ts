import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/auth-validator.middleware";
import { ContactsController } from "../controllers/Contacts.controller";

const route = Router()

const contactController = new ContactsController()
const authMiddleware = new AuthMiddleware()

route.get(
    '/contacts/find-all',
    authMiddleware.validateAuth,
    contactController.findAll.bind(contactController)
)

route.post(
    '/contacts/create',
    authMiddleware.validateAuth,
    contactController.create.bind(contactController),
)

route.put(
    '/contacts/update-by-id',
    authMiddleware.validateAuth,
    contactController.update.bind(contactController),
)

route.delete(
    '/contacts/delete',
    authMiddleware.validateAuth,
    contactController.remove.bind(contactController),
)

export default route;
