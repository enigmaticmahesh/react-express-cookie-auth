const { SignJWT } = require('jose/jwt/sign')
const { jwtVerify } = require('jose/jwt/verify')
require('dotenv').config()

class JwtHandler {
    constructor() {
        this.alg = 'HS256'
        this.issuer = 'urn:example:issuer'
        this.audience = 'urn:example:audience'
        this.expTime = '1h'
        this.secret = new TextEncoder().encode(process.env.JWT_SALT)
    }

    async createJWT(data) {
        const jwt = await new SignJWT(data)
        .setProtectedHeader({ alg: this.alg })
        .setIssuedAt()
        .setIssuer(this.issuer)
        .setAudience(this.audience)
        .setExpirationTime(this.expTime)
        .sign(this.secret)

        return jwt
    }

    async verifyJWT(jwt) {
        try {
            const { payload, protectedHeader } = await jwtVerify(jwt, this.secret, {
                issuer: this.issuer,
                audience: this.audience,
            })
            
            console.log(protectedHeader)
            console.log(payload)

            return { err: null, data: payload }
            
        } catch (error) {
            return { err: error, data: false }
        }
        
    }
}

module.exports = new JwtHandler()