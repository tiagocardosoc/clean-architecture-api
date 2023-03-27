import mongoose, { ObjectId, Schema, Types } from "mongoose"

export interface IContactsEntity {
    id?: Types.ObjectId,
    name?: string,
    email?: string,
    phoneNumber?: string
    ownerUserId?: Types.ObjectId
}