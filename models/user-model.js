import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: { // can help validate email is unique, can also do it in controller
        type: String,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        required: [true, 'Please provide email'],
        unique: true,
    },
    password: { // can help validate email is unique, can also do it in controller which make it more rigorously
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
        select: false
    },
    lastName: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'lastName',
    },
    location: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'my city',
    },
})

userSchema.pre('save', async function(){
    //console.log(this.modifiedPaths())  // comment out to see modified path
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
// all below should start with function, no arrow func!!!!
userSchema.methods.createJWT = function() { 
    return jwt.sign({userID: this._id},
                    process.env.JWT_SECRET,
                    {expiresIn: process.env.JWT_LIFETIME})
}
userSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}
export default mongoose.model('User', userSchema)