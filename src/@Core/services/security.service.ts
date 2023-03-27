import jwt, { SignOptions } from 'jsonwebtoken'
import crypto from 'crypto'

export interface IGenerateJwtPayload {
    id: string;
    email: string;
}

export class SecurityService {
    constructor(
        private readonly secret?: string
    ) { }

    public hashPassword(password: string) {
        const buffer = Buffer.from(password, 'utf-8');
        return crypto.createHash('sha256').update(buffer).digest('hex');
    }

    public generateJwt(payload: IGenerateJwtPayload, options?: SignOptions): string {
        return jwt.sign(payload, this.secret, options)
    }

    public validateJwt(token: string) {
        return jwt.verify(token, this.secret)
    }
}