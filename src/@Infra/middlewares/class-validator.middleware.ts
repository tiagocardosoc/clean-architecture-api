
import { Request, Response } from "express"
import { validate, ValidationError } from "class-validator"
import ContactCreateDTO from "../../@Domain/dtos/inputDTOs/contacts/InputContactCreateDTO"

export const validateInput = async (req: Request, res: Response, next) => {
    const { name, email, phoneNumber } = req.body;
    const dto = new ContactCreateDTO(name, email, phoneNumber)
    const details: ValidationError[] = await validate(dto)
    if (details.length) {
        res.status(500).json({
            errors: details
        })
    }
    next()

}