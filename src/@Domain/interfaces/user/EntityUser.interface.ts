import { Types } from "mongoose";

export interface IUserEntity {
    name?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    contacts?: Array<Types.ObjectId> | Types.ObjectId;
}