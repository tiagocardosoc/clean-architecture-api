import Contacts from "../models/Contacts.model"
import { ContactsEntity } from "../../@Domain/entity/ContactsEntity";
import { IRepo } from "src/@Core/interfaces";
import mongoose, { ObjectId } from "mongoose";

export class ContactsRepository implements IRepo<ContactsEntity> {
    async create(contactCreateData: ContactsEntity): Promise<ContactsEntity> {
        const document = await Contacts.create(contactCreateData);

        return new ContactsEntity(document.id, document.name, document.email, document.phoneNumber, document.ownerUserId);
    }

    async findAll(userId: mongoose.Types.ObjectId): Promise<ContactsEntity[]> {
        return await Contacts.find(
            {
                ownerUserId: userId
            }
        )
    }

    async findOne(where: Partial<ContactsEntity>): Promise<ContactsEntity> {
        throw new Error('This method is not implemented')
    }

    async update(contactUpdateData: ContactsEntity): Promise<boolean> {
        const document = await Contacts.updateOne(
            {
                _id: contactUpdateData.id
            },
            contactUpdateData)

        return document.acknowledged
    }

    async remove(item: ContactsEntity): Promise<boolean> {
        return await Contacts.remove(item.id)
    }
}