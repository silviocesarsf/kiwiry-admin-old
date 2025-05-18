import { Request, Router } from "express";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";

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
            error: "Nome da empresa já existe"
        });

        return;
    }

    try {
        await prisma.enterprise.create({
            data: {
                name: enterprise_name,
                cnpj: cnpj || null,
                users: {
                    create: {
                        name: owner_name,
                        email,
                        password_hash:  await bcrypt.hash(password, 10),
                        verified: false
                    }
                }
            }
        });

        res.status(201).json({
            message: "Usuário criado com sucesso."
        });
    } catch (error) {
        console.error(error);
    }
});

export default router;