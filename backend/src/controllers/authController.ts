import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { sendVerificationToken } from "../services/email-service";
import { Prisma } from "@prisma/client";
import { LoginBody, RegisterBody } from "../types/authType";

export const login = async (req: Request<{}, {}, LoginBody>, res: Response) => {
    const { email, password, rememberMe } = req.body;
    if (!email || !password) {
        res.status(400).json({
            message: "Campos insuficientes"
        });

        return;
    }

    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    });

    if (!user?.user_id || false) {
        res.status(404).json({
            error: "Usuário não encontrado"
        });

        return;
    }

    if (!user.verified || false) {
        res.status(400).json({
            error: "Email não verificado"
        });
        return;
    }

    const passwordMatched = await bcrypt.compare(password, user.password_hash || "");
    if (!passwordMatched) {
        res.status(400).json({
            error: "Credenciais não coincidem"
        })

        return;
    }

    const token = jwt.sign(
        {
            user_id: user.user_id,
            email: user.email,
            enterprise_id: user.enterprise_id
        },
        process.env.JWT_SECRET || "",
        { expiresIn: rememberMe ? "7d" : "1d" }
    );

    res.status(200).cookie("token", token, {
        httpOnly: true,
        // secure: true - Somente HTTPS
        sameSite: 'strict',
        maxAge: rememberMe ? (1000 * 60 * 60 * 24 * 7) : (1000 * 60 * 60 * 24),
    }).json({ message: "Login realizado com sucesso", token: token });
}

export const register = async (req: Request<{}, {}, RegisterBody>, res: Response) => {
    const { owner_name, email, password, cnpj, enterprise_name } = req.body;

    if (!email || !password || !owner_name || !enterprise_name) {
        res.status(400).json({
            error: "Campos Insuficientes"
        });

        return;
    }

    try {
        const enterpriseAlreadyExists = await prisma.enterprise.findFirst({
            where: {
                name: enterprise_name
            }
        });

        if (enterpriseAlreadyExists) {
            res.status(400).json({
                error: "Empresa já existente"
            });

            return;
        }

        const emailToken = crypto.randomBytes(3).toString("hex").slice(0, 5);
        await prisma.enterprise.create({
            data: {
                name: enterprise_name,
                cnpj: cnpj || null,
                users: {
                    create: {
                        name: owner_name,
                        email,
                        password_hash: await bcrypt.hash(password, 10),
                        email_verification_token: emailToken,
                        verified: false
                    }
                }
            }
        });

        await sendVerificationToken("", emailToken);
        res.status(201).json({
            message: "Usuário criado com sucesso."
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                res.status(409).json({
                    error: "E-mail já cadastrado.",
                });

                return;
            }
        }

        console.error(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
}