import { Request, Router } from "express";
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";
const router = Router();

interface VerifyEmailBody {
    token: string;
}

router.post("/", async (req: Request<{}, {}, VerifyEmailBody>, res) => {
    const { token } = req.body;

    if (!token) {
        res.status(400).json({ error: "Token inválido" });
        return;
    }

    try {
        const user = await prisma.user.findFirst({
            where: { email_verification_token: token }
        });

        if (!user) {
            res.status(404).json({ error: "Token não encontrado" });
            return;
        }

        await prisma.user.update({
            where: { user_id: user.user_id },
            data: {
                verified: true,
                email_verification_token: null
            }
        });

        res.status(200).json({ message: "Email verificado com sucesso" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

export default router;
