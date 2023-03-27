import { IUseCase } from "src/@Core/interfaces";
import OutputContactListAllDTO from "src/@Domain/dtos/outputDTOs/contacts/OutputContactListAllDTO";

export interface IContactListAllUseCase extends IUseCase<void, Array<OutputContactListAllDTO>> {

}