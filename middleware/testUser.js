import { BadRquestError } from "../errors/index.js"

const testUser = (req, res, next) => {
    if (req.user.testUser) {
        throw new BadRquestError('Test users are in READ ONLY mode')
    }
    next()
}

export default testUser