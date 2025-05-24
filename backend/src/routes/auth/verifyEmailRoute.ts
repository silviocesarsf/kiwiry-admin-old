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

        const jwtToken = jwt.sign(
            {
                user_id: user.user_id,
                email: user.email,
                enterprise_id: user.enterprise_id
            },
            process.env.JWT_SECRET || "",
            { expiresIn: "1d" }
        );

        res.status(200).cookie("token", jwtToken, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24
        }).json({ message: "Email verificado com sucesso" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

export default router;
