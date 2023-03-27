import { NextFunction, Request, Response } from "express";
import { authConfig } from "../../config/auth.config";
import { SecurityService } from "../../@Core/services/security.service";

export class AuthMiddleware {

    async validateAuth(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.headers.authorization) {
                const token = req.headers.authorization.split(" ")[0];
                const securityService = new SecurityService(authConfig.secret);
                const decodedToken = securityService.validateJwt(token);
                console.log('DECODED TOKEN JWT =>', decodedToken)
                req.body.jwt = decodedToken;
                next();
            }
        } catch (error) {
            return res.status(401).json({ message: 'Falha na autenticação' })
        }
    }
}