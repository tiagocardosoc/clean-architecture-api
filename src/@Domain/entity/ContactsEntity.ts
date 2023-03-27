import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { Types } from "mongoose";
import { IContactsEntity } from "../interfaces/contact/EntityContact.interface";

export class ContactsEntity implements IContactsEntity {
    constructor(id?: Types.ObjectId, name?: string, email?: string, phoneNumber?: string, ownerUserId?: Types.ObjectId) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.ownerUserId = ownerUserId;
    }

    @IsOptional()
    @IsString()
    id?: Types.ObjectId;

    @IsString()
    name?: string;

    @IsEmail()
    email?: string;

    @IsString()
    @IsPhoneNumber()
    phoneNumber?: string;

    @IsString()
    ownerUserId?: Types.ObjectId;
}