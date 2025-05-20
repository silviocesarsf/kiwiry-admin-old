import { Request, Router } from "express";
import { prisma } from "../../lib/prisma";
import bcrypyt from "bcrypt";
import jwt from "jsonwebtoken"

const router = Router();
interface LoginBody {
    email: string,
    password: string
}

router.post("/", async (req: Request<{}, {}, LoginBody>, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            message: "Campos insuficientes"
        });

        return;
    }

    const userExists = await prisma.user.findFirst({
        where: {
            email: email
        }
    });

    if (!userExists?.user_id || false) {
        res.status(404).json({
            message: "Usuário inexistente"
        });

        return;
    }

    const passwordMatched = await bcrypyt.compare(password, userExists.password_hash || "");
    if (!passwordMatched) {
        res.status(400).json({
            message: "Credenciais não coincidem"
        })

        return;
    }


    const token = jwt.sign(
        {
            user_id: userExists.user_id,
            email: userExists.email,
            enterprise_id: userExists.enterprise_id
        },
        process.env.JWT_SECRET || "",
        { expiresIn: "1d" }
    );

    res
    .status(200)
    .cookie("token", token, {
        httpOnly: true,
        // secure: true - Somente HTTPS
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24 
    })
    .json({ message: "Login realizado com sucesso" });
});

export default router;