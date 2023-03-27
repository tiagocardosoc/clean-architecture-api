import { validate, ValidationError } from "class-validator"

export class DtoValidator {
    async validateDTO(payloadDTO: any) {
        const errorsDetails: ValidationError[] = await validate(payloadDTO)
        const errorMessages = []

        if (errorsDetails.length) {
            errorsDetails.map((detail) => {
                if (detail.constraints) {
                    errorMessages.push(detail.constraints)
                }
            })
        }

        return errorMessages;
    }
}