import jwt from 'jsonwebtoken';

const secretJwt = process.env.SECRET_JWT;

export function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];

    if(!token) return res.status(401).json({ sucess: false, message: `Token não fornecido` })

    jwt.verify(token, secretJwt, (err, decoded) => {
        if(err) return res.status(401).json({ sucess: false, message: `Token inválido` })

        req.user = decoded;
        next();
    })

}