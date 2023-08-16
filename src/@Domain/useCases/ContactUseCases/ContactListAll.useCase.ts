import { mapper } from "../../../@Core/infra/mapper";
import { IRepo } from "src/@Core/interfaces";
import OutputContactListAllDTO from "../../dtos/outputDTOs/contacts/OutputContactListAllDTO";
import { ContactsEntity } from "src/@Domain/entity/ContactsEntity";
import { IContactListAllUseCase } from "src/@Domain/interfaces/contact/ContactListAllUseCase.interface";
import mongoose, { Schema } from "mongoose";

export default class ContactListAllUseCase implements IContactListAllUseCase {
    constructor(
        private contactsRepository: IRepo<ContactsEntity>
    ) { }
    async execute(userId: mongoose.Types.ObjectId): Promise<Array<OutputContactListAllDTO>> {
        const response = await this.contactsRepository.findAll(userId);

        const responseMapped = mapper.mapArray(OutputContactListAllDTO, response);

        return responseMapped;
    }
}
