import { Request, Router } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendVerificationToken } from "../../services/email-service";
import { Prisma } from "@prisma/client";

const router = Router();
interface RegisterBody {
    owner_name: string;
    cnpj: string;
    email: string;
    password: string;
    enterprise_name: string
}

router.post("/", async (req: Request<{}, {}, RegisterBody>, res) => {
    const { owner_name, email, password, cnpj, enterprise_name } = req.body;

    if (!email || !password || !owner_name || !enterprise_name) {
        res.status(400).json({
            error: "Campos insuficientes"
        });

        return;
    }

    const enterpriseAlreadyExists = await prisma.enterprise.findFirst({
        where: {
            name: enterprise_name
        }
    });

    if (enterpriseAlreadyExists) {
        res.status(400).json({
            error: "Empresa já cadastrada."
        });

        return;
    }

    try {
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
});

export default router;