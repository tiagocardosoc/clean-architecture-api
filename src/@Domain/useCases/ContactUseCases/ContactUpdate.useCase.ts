import { IRepo } from "src/@Core/interfaces";
import InputContactUpdateDTO from "src/@Domain/dtos/inputDTOs/contacts/InputContactUpdateDTO";
import { ContactsEntity } from "src/@Domain/entity/ContactsEntity";
import { IContactUpdateUseCase } from "src/@Domain/interfaces/contact/ContactUpdateUseCase.interface";

export default class ContactUpdateUseCase implements IContactUpdateUseCase {
    constructor(
        private contactsRepository: IRepo<ContactsEntity>
    ) { }
    async execute(data: InputContactUpdateDTO): Promise<void> {
        await this.contactsRepository.update(data);

        return
    }
}