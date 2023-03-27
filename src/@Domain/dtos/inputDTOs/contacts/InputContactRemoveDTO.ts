import { IsString } from "class-validator";
import { Types } from "mongoose";
import { DtoValidator } from "src/@Core/dto/DtoValidator";

interface IContactRemoveDTO {
    id: Types.ObjectId
}

export default class InputContactRemoveDTO extends DtoValidator implements IContactRemoveDTO {

    constructor(id: Types.ObjectId) {
        super();
        this.id = id
    }

    @IsString()
    id: Types.ObjectId
}