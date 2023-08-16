import mongoose, { ObjectId, Schema } from "mongoose"

export interface IUseCase<InputType, OutputType> {
    execute(data: InputType): Promise<OutputType>
}

export interface IRepo<EntityType> {
    create(data: EntityType): Promise<EntityType>,
    update(data: EntityType): Promise<boolean>,
    findAll(where: mongoose.Types.ObjectId): Promise<EntityType[]>,
    findOne(where: Partial<EntityType>): Promise<Partial<EntityType>>,
    remove(item: EntityType): Promise<boolean>
}

export interface IOutputDTOBase {
    responseMessage: string,
    responseStatusCode: number,
    responsepayload?: any
}
