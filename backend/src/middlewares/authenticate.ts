import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({ message: "Não autorizado" });
        return
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        // @ts-ignore
        req.user = decoded;
        next();
    } catch {
        res.status(401).json({ message: "Token inválido ou expirado" });
    }
}