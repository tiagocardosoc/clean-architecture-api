import { IOutputDTOBase, IRepo } from "src/@Core/interfaces";
import InputContactRemoveDTO from "src/@Domain/dtos/inputDTOs/contacts/InputContactRemoveDTO";
import { ContactsEntity } from "src/@Domain/entity/ContactsEntity";
import { IContactRemoveUseCase } from "src/@Domain/interfaces/contact/ContactRemoveUseCase.interface";

export default class ContactRemoveUseCase implements IContactRemoveUseCase {
    constructor(
        private contactsRepository: IRepo<ContactsEntity>
    ) { }
    async execute(data: InputContactRemoveDTO): Promise<void> {
        await this.contactsRepository.remove(data);

        return
    }
}