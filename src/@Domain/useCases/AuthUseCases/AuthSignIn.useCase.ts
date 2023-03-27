import UserRepository from "../../../@Infra/repository/User.repository";
import InputSignInDTO from "../../dtos/inputDTOs/auth/InputSignInDTO";
import { IGenerateJwtPayload, SecurityService } from "../../../@Core/services/security.service";
import { authConfig } from "../../../config/auth.config";
import { IAuthSingInUseCase } from "src/@Domain/interfaces/auth/AuthSignInUseCase.interface";
import { OutputSignsDTO } from "../../../@Domain/dtos/outputDTOs/auth/OutputSignsDTO";
import mongoose from "mongoose";

export default class AuthSignInUseCase implements IAuthSingInUseCase {

    get secretAuth(): string {
        return authConfig.secret;
    }

    constructor(
        private userRepository: UserRepository,
    ) { }

    public async execute(data: InputSignInDTO): Promise<OutputSignsDTO> {
        const signInValidate = await this.validateSignIn(data);

        if (signInValidate) {
            const authToken = await this.createToken({ id: signInValidate.id.toString(), email: signInValidate.email });

            const authData = {
                userId: signInValidate.id,
                userName: signInValidate.name,
                userEmail: signInValidate.email,
                userToken: authToken
            }

            return new OutputSignsDTO(authData.userName, authData.userId, authData.userToken, authData.userEmail);
        }
    }

    private async validateSignIn(data: InputSignInDTO) {
        const encryptedPassword = new SecurityService(this.secretAuth).hashPassword(data.password);

        const userData = await this.userRepository.findOne({ email: data.email });

        const { id } = userData;

        console.log(id);

        if (encryptedPassword.match(userData.password) && userData) {
            return {
                id: userData.id,
                email: userData.email,
                name: userData.name
            }
        } else {
            throw new Error('Email/Password is invalid')
        }
    }

    private async createToken(data: IGenerateJwtPayload) {
        return new SecurityService(this.secretAuth).generateJwt(data)
    }
}