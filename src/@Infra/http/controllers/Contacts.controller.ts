import ContactCreateUseCase from "../../../@Domain/useCases/ContactUseCases/ContactCreate.useCase";
import ContactListAllUseCase from "../../../@Domain/useCases/ContactUseCases/ContactListAll.useCase";
import ContactRemoveUseCase from "../../../@Domain/useCases/ContactUseCases/ContactRemove.useCase";
import ContactUpdateUseCase from "../../../@Domain/useCases/ContactUseCases/ContactUpdate.useCase";
import { Request, Response } from "express";
import { ContactsRepository } from "../../repository/Contacts.repository";
import InputContactCreateDTO from "../../../@Domain/dtos/inputDTOs/contacts/InputContactCreateDTO";
import InputContactUpdateDTO from "../../../@Domain/dtos/inputDTOs/contacts/InputContactUpdateDTO";
import UserRepository from "src/@Infra/repository/User.repository";
import mongoose from "mongoose";

export class ContactsController {

    private contactRepository: ContactsRepository;
    private userRepository: UserRepository;

    constructor(
    ) {
        this.contactRepository = new ContactsRepository;
    }

    async create(req: Request, res: Response) {
        try {
            const { name, email, phoneNumber } = req.body;
            const { id: id } = req.body.jwt;
            const userId = new mongoose.Types.ObjectId(id)

            const inputData = new InputContactCreateDTO(name, phoneNumber, userId, email);

            const validation = await inputData.validateDTO(inputData)

            if (validation.length) {
                return res.status(400).json({ Error: validation })
            }

            await new ContactCreateUseCase(this.contactRepository).execute(inputData);

            return res.status(201).json({
                message: 'Contact created.'
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Server error - Error trying to create a contact.'
            })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const {
                id,
                name,
                email,
                phoneNumber
            } = req.body;

            const inputData = new InputContactUpdateDTO(id, name, phoneNumber, email);

            const validation = await inputData.validateDTO(inputData)

            if (validation.length) {
                return res.status(400).json({ Error: validation })
            }

            const contactUseCaseResponse = await new ContactUpdateUseCase(this.contactRepository).execute(inputData);

            return res.status(200).json({
                message: 'Contact updated successfully.',
            })
        } catch (error) {
            return res.status(500).json({
                error: 'Server error - Error trying to update a contact.'
            })
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const contactUseCaseResponse = await new ContactListAllUseCase(this.contactRepository).execute()

            return res.status(200).json({
                message: 'All contacts found.',
                data: contactUseCaseResponse
            })
        } catch (error) {
            res.status(500).json({
                error: 'Server error - Error tring to list all contacts.'
            })
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const { id } = req.body;

            await new ContactRemoveUseCase(this.contactRepository).execute(id);

            return res.status(200).json({
                message: 'Contact deleted.'
            })
        } catch (error) {
            return res.status(500).json({
                error: 'Server error - Error trying to delete a contact.'
            })
        }
    }
}