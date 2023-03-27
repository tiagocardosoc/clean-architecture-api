import { IUseCase } from "src/@Core/interfaces";
import InputSignUpDTO from "src/@Domain/dtos/inputDTOs/auth/InputSignUpDTO";
import OutputSignsDTO from "src/@Domain/dtos/outputDTOs/auth/OutputSignsDTO";

export interface IAuthSignUpUseCase extends IUseCase<InputSignUpDTO, OutputSignsDTO> {
}