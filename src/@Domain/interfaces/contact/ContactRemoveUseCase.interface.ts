import { IUseCase } from "src/@Core/interfaces";
import InputContactRemoveDTO from "src/@Domain/dtos/inputDTOs/contacts/InputContactRemoveDTO";

export interface IContactRemoveUseCase extends IUseCase<InputContactRemoveDTO, void> {

}