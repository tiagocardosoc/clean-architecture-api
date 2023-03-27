import { IsEmail, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";
import { DtoValidator } from "../../../../@Core/dto/DtoValidator";

interface IContactUpdateDTO {
    id: Types.ObjectId,
    name?: string,
    phoneNumber?: string
    email?: string,
}

export default class InputContactUpdateDTO extends DtoValidator implements IContactUpdateDTO {

    constructor(id: Types.ObjectId, name?: string, phoneNumber?: string, email?: string,) {
        super();
        this.id = id
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
    }

    @IsString()
    id: Types.ObjectId

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    phoneNumber?: string;
}