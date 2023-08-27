import User from '../models/user-model.js'
import {StatusCodes} from 'http-status-codes'
import { BadRquestError, UnAuthenticateError } from '../errors/index.js'


// all should be async, because they need to be done in the database !!!
const Login = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        throw new BadRquestError('Please provide all values!')
    }
    const user = await User.findOne({email}).select('+password')
    // check email 
    if (!user) {
        throw new UnAuthenticateError('email not found')
    }
    // check password
    const isCorrectPassword = await user.comparePassword(password)
    if (!isCorrectPassword) {
        throw new UnAuthenticateError('Invalid Password')
    }
    const token = user.createJWT()
    user.password = undefined
    res.status(StatusCodes.OK).json({user, token, location: user.location})
}
const Register = async (req, res) => {
    const { name, password, email } = req.body
    if (!name || !password || !email) {
        throw new BadRquestError('Please provide all values!!!')
    }
    const userALreadyExisted = await User.findOne({ email })
    if (userALreadyExisted) {
        throw new BadRquestError('Email is already used')
    }
    const user = await User.create({ name, password, email })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({
                                        user: { 
                                                email: user.email,
                                                lastName: user.lastName,
                                                location: user.location,
                                                name: user.name
                                               }, 
                                        token,
                                        location: user.location
                                        })

    // traditional way without express-async-errors
    // try {
    //     const user = await User.create(req.body)
    //     res.status(201).json({user})
    // }
    // catch(error) {
    //     next(error)
    // }
}

const UpdateUser = async (req, res) => {
    const {name, email, lastName, location} = req.body
    if (!name || !email || !lastName || !location) {
        throw new BadRquestError("Please provide all values")
    }
    const user = await User.findOne({_id: req.user.userID})
    // update user info
    user.name = name
    user.email = email
    user.lastName = lastName
    user.location = location

    await user.save()
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user: user, token, location: user.location})
}

export {Login, Register, UpdateUser}