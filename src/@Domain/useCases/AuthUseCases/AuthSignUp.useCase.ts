import { authConfig } from "../../../config/auth.config";
import UserRepository from "../../../@Infra/repository/User.repository";
import { IGenerateJwtPayload, SecurityService } from "../../../@Core/services/security.service";
import { IAuthSignUpUseCase } from "src/@Domain/interfaces/auth/AuthSignUpUseCase.interface";
import { OutputSignsDTO } from "../../../@Domain/dtos/outputDTOs/auth/OutputSignsDTO";
import InputSignUpDTO from "../../../@Domain/dtos/inputDTOs/auth/InputSignUpDTO";

export default class AuthSignUpUseCase implements IAuthSignUpUseCase {

    get secretAuth(): string {
        return authConfig.secret
    }

    constructor(
        private userRepository: UserRepository
    ) { }
    public async execute(data: InputSignUpDTO): Promise<OutputSignsDTO> {
        await this.validateSignUp(data.email);

        const passwordHashed = new SecurityService().hashPassword(data.password)

        const userData = await this.userRepository.create({ ...data, password: passwordHashed });


        if (userData) {
            const authToken = await this.createToken({ id: userData.id.toString(), email: userData.email });

            const authData = {
                userId: userData.id,
                userEmail: userData.email,
                userName: userData.name,
                userToken: authToken
            };

            return new OutputSignsDTO(authData.userName, authData.userId, authData.userToken, authData.userEmail)
        }
    }

    private async validateSignUp(email: string): Promise<void> {
        const exists = await this.userRepository.findOne({ email });

        if (exists) {
            throw new Error('This email is already registered.')
        } else {
            return
        }
    }

    private async createToken(data: IGenerateJwtPayload) {
        return new SecurityService(this.secretAuth).generateJwt(data);
    }
}