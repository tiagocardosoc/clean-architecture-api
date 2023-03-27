import { IRepo } from '../../@Core/interfaces'
import { UserEntity } from '../../@Domain/entity/UserEntity'
import User from '../models/User.model'

export default class UserRepository implements IRepo<UserEntity> {
    async create(userCreateData: UserEntity): Promise<UserEntity> {
        const document = await User.create({
            name: userCreateData.name,
            email: userCreateData.email,
            password: userCreateData.password,
            phoneNumber: userCreateData.phoneNumber
        })

        return new UserEntity(document._id, document.name, document.email, document.phoneNumber, document.password,)
    }

    async update(userUpdateData: UserEntity): Promise<boolean> {
        const document = await User.updateOne(
            {
                _id: userUpdateData.id
            },
            {
                name: userUpdateData.name,
                email: userUpdateData.email,
                phoneNumber: userUpdateData.phoneNumber,
                $push: {
                    contacts: userUpdateData.contacts
                }
            }
        )

        return document.acknowledged;
    }

    async findAll(): Promise<UserEntity[]> {
        throw new Error('This method is not implemented')
    }

    async findOne(where: Partial<UserEntity>): Promise<UserEntity> {
        const document = await User.findOne({ email: where.email });

        if (!document) {
            return
        }

        return new UserEntity(document._id, document.name, document.email, document.phoneNumber, document.password,);
    }

    async remove(item: UserEntity): Promise<boolean> {
        const document = await User.deleteOne({ _id: item.id })

        return document.acknowledged;
    }
}