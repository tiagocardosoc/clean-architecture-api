import { IOutputDTOBase, IUseCase } from "src/@Core/interfaces";
import InputSignInDTO from "src/@Domain/dtos/inputDTOs/auth/InputSignInDTO";
import OutputSignsDTO from "src/@Domain/dtos/outputDTOs/auth/OutputSignsDTO";

export interface IAuthSingInUseCase extends IUseCase<InputSignInDTO, OutputSignsDTO> {
}