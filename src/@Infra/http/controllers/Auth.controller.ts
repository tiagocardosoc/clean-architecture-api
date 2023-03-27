import { Request, Response } from "express";
import UserRepository from "../../repository/User.repository";
import AuthSignInUseCase from "../../../@Domain/useCases/AuthUseCases/AuthSignIn.useCase";
import InputSignInDTO from "../../../@Domain/dtos/inputDTOs/auth/InputSignInDTO";
import AuthSignUpUseCase from "../../../@Domain/useCases/AuthUseCases/AuthSignUp.useCase";
import InputSignUpDTO from "../../../@Domain/dtos/inputDTOs/auth/InputSignUpDTO";

export default class AuthController {
    private userRepository: UserRepository
    constructor() {
        this.userRepository = new UserRepository;
    }

    async SignIn(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const inputData = new InputSignInDTO(email, password);

            const validation = await inputData.validateDTO(inputData);

            if (validation.length) {
                return res.status(400).json({ Error: validation })
            }

            const loginData = await new AuthSignInUseCase(this.userRepository).execute(inputData)

            return res.status(200).json({
                message: 'Signed in with success.',
                data: loginData
            })

        } catch (error) {
            res.status(500).json({
                Error: `Server error - ${error}.`
            })
        }
    }

    async SignUp(req: Request, res: Response) {
        try {
            const {
                name,
                email,
                password,
                phoneNumber
            } = req.body;

            const inputData = new InputSignUpDTO(name, email, password, phoneNumber);

            const validation = await inputData.validateDTO(inputData);

            if (validation.length) {
                return res.status(400).json({ Error: validation })
            }

            const loginData = await new AuthSignUpUseCase(this.userRepository).execute(inputData);

            return res.status(201).json({
                message: 'Usuário cadastrado.',
                data: loginData
            })
        } catch (error) {
            res.status(500).json({
                Error: `Server error - ${error}`
            })
        }
    }
}