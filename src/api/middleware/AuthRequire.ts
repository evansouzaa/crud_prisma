import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

//types
import { AuthenticatedRequest, JwtData } from '../../types/AuthTypes';
export default (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    
    const { authorization } = req.headers;

    if (!authorization) {
        return res.json("Unauthorized");
    }

    const [, token] = authorization.split(" ");

    try {
        const data = jwt.verify(token, "adfasdfas") as JwtData;
        const { id } = data;

        req.userId = id;

        return next();
    } catch (e) {
        return res.status(401).json("Invalid token");
    }
};
