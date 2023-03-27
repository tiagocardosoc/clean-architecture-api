import { IsEmail, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

interface IOutputSignsDTO {
    userName: string,
    userId: Types.ObjectId,
    userEmail?: string,
    userToken: string
}

class OutputSignsDTO implements IOutputSignsDTO {

    constructor(userName: string, userId: Types.ObjectId, userToken: string, userEmail?: string) {
        this.userName = userName;
        this.userId = userId;
        this.userToken = userToken;
        this.userEmail = userEmail;
    }

    @IsString()
    userName: string;

    @IsString()
    userId: Types.ObjectId;

    @IsString()
    userToken: string;

    @IsOptional()
    @IsEmail()
    userEmail?: string;
}

export { OutputSignsDTO, IOutputSignsDTO }