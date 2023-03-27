import { config } from 'dotenv'
config()

const authConfig = {
    secret: process.env.AUTH_SECRET
}

export { authConfig };