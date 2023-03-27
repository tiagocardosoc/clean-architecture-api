import { IsEmail, IsString } from "class-validator";
import { DtoValidator } from "../../../../@Core/dto/DtoValidator";

interface ISignInDTO {
    email: string,
    password: string
}

export default class InputSignInDTO extends DtoValidator implements ISignInDTO {

    constructor(email: string, password: string) {
        super();
        this.email = email;
        this.password = password;
    }

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}