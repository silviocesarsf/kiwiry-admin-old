import { Request, Router } from "express";
import { prisma } from "../../lib/prisma";

const router = Router();

interface VerifyEmailBody {
    token: string;
}

router.post("/", async (req: Request<{}, {}, VerifyEmailBody>, res) => {
    const { token } = req.body;

    if (!token || token.length != 5) {
        res.status(400).json({ message: "Token inválido" });
        return;
    }

    try {
        const user = await prisma.user.findFirst({
            where: { email_verification_token: token }
        });

        if (!user) {
            res.status(404).json({ message: "Token não encontrado" });
            return;
        }

        await prisma.user.update({
            where: { user_id: user.user_id },
            data: {
                verified: true,
                email_verification_token: null
            }
        });

        res.status(200).json({ message: "Usuário validado com sucesso." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
});

export default router;
