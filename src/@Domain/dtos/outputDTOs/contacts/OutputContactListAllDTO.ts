import { IsEmail, IsOptional, IsString } from "class-validator";

interface IContactListAll {
    id: string,
    name: string,
    phoneNumber: string
    email?: string,
}

export default class OutputContactListAllDTO implements IContactListAll {

    constructor(id: string, name: string, phoneNumber: string, email?: string) {
        this.id = id
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
    }

    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsString()
    phoneNumber: string;

    @IsOptional()
    @IsEmail()
    email?: string;
}