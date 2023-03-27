import { IsEmail, IsString } from "class-validator";
import { DtoValidator } from "../../../../@Core/dto/DtoValidator";

interface ISignsDTO {
    name: string,
    email: string,
    password: string,
    phoneNumber: string
}

export default class InputSignUpDTO extends DtoValidator implements ISignsDTO {

    constructor(name: string, email: string, password: string, phoneNumber: string) {
        super();
        this.name = name
        this.email = email
        this.password = password
        this.phoneNumber = phoneNumber
    }

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    phoneNumber: string;
}