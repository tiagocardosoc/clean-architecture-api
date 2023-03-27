import { IUseCase } from "src/@Core/interfaces";
import InputContactCreateDTO from "src/@Domain/dtos/inputDTOs/contacts/InputContactCreateDTO";

export interface IContactCreateUseCase extends IUseCase<InputContactCreateDTO, void> {

}