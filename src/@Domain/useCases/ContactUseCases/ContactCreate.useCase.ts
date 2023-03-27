import { conn } from "../../../@Core/database/mongoose.connection";
import InputContactCreateDTO from "src/@Domain/dtos/inputDTOs/contacts/InputContactCreateDTO";
import { IContactCreateUseCase } from "src/@Domain/interfaces/contact/ContactCreateUseCase.interface";
import { ContactsRepository } from "src/@Infra/repository/Contacts.repository";
import UserRepository from "../../../@Infra/repository/User.repository";
import mongoose from "mongoose";

export default class ContactCreateUseCase implements IContactCreateUseCase {

    private userRepository: UserRepository;

    constructor(
        private contactsRepository: ContactsRepository,
    ) {
        this.userRepository = new UserRepository()
    }

    async execute(data: InputContactCreateDTO): Promise<void> {
        const session = await conn.startSession();
        try {
            session.startTransaction();
            const contactData = await this.contactsRepository.create(data);
            const userId = new mongoose.Types.ObjectId(contactData.id);
            await this.userRepository.update({ id: userId, contacts: contactData.id })
            await session.commitTransaction();
            return
        } catch (error) {
            session.abortTransaction();
            throw new Error('Occurs error while tried to create a contact.')
        } finally {
            session.endSession();
        }
    }
}

