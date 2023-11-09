import { Request, Response, NextFunction } from 'express';
// Interface para representar a estrutura do token JWT
export interface JwtData {
    id: string; // ou o tipo apropriado para o seu ID
    // Adicione outras propriedades do token, se houver
}

// Estenda a interface Request do Express
export interface AuthenticatedRequest extends Request {
    userId: string; // ou o tipo apropriado para o seu ID
}