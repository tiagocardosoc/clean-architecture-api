import { IsString } from 'class-validator'
import { Router } from 'express'
import Auth from './Auth.route'
import Contacts from './Contacts.route'

const route = Router()

export const Routes = [
    Auth,
    Contacts,

    route.post(
        "/", (req, res) => {
            try {
                const { name } = req.body

                const username = new exampleDTO()
                res.status(200).send('ok')
            } catch (error) {
                return res.status(500).json(error)
            }

        })
]

class exampleDTO {
    @IsString()
    name: string
}