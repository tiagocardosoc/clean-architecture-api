import { DtoValidator } from "../../../../@Core/dto/DtoValidator";
import { IsEmail, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

interface IContactCreateDTO {
    name: string,
    phoneNumber: string
    email?: string,
}

export default class InputContactCreateDTO extends DtoValidator implements IContactCreateDTO {

    constructor(name: string, phoneNumber: string, ownerUserId: Types.ObjectId, email?: string) {
        super();
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.ownerUserId = ownerUserId
    }

    @IsString()
    name: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsString()
    phoneNumber: string;

    ownerUserId: Types.ObjectId
}