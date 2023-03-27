import { IUseCase } from "src/@Core/interfaces";
import InputContactUpdateDTO from "src/@Domain/dtos/inputDTOs/contacts/InputContactUpdateDTO";

export interface IContactUpdateUseCase extends IUseCase<InputContactUpdateDTO, void> {

}