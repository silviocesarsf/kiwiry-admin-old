import { Request, Response, Router } from "express";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.get("/", authenticate, (req: Request, res: Response) => {
    // @ts-ignore
    res.json({ user: req.user });
});

export default router;