import { Request, Response, NextFunction } from 'express';


export interface JwtData {
    id: string;
}

//Extends interface Request Express
export interface AuthenticatedRequest extends Request {
    userId?: string;
}