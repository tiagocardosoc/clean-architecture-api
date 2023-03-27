import { IsArray, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";
import { IUserEntity } from "../interfaces/user/EntityUser.interface";

export class UserEntity implements IUserEntity {
    constructor(id: Types.ObjectId, name: string, email: string, phoneNumber: string, password?: string, contacts?: Array<Types.ObjectId> | Types.ObjectId) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.contacts = contacts;
    }

    @IsOptional()
    @IsString()
    id?: Types.ObjectId

    @IsString()
    name?: string;

    @IsString()
    email?: string;

    @IsString()
    phoneNumber?: string;

    @IsString()
    password?: string;

    @IsArray()
    contacts?: Array<Types.ObjectId> | Types.ObjectId

}