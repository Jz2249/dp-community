import { UnAuthenticateError } from "../errors/index.js"
import jwt from 'jsonwebtoken'
 const authenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
      throw new UnAuthenticateError('Invalid Authentication')
    }
    const token = authHeader.split(' ')[1]
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET)
      const testUser = payload.userID === '64b59c044e4fd6bf7921e471'
      req.user = {userID: payload.userID, testUser}
      next()
    }
    catch(error) {
      console.log(error);
      throw new UnAuthenticateError("Invalid Authentication~~~")
    }
 }

 export default authenticateUser