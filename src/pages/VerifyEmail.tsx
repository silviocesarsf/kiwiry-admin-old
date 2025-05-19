import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PinInput } from "@mantine/core";
import Axios from "../lib/axios";

export default function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const tokenFromUrl = searchParams.get("token");
    const [pinInputDisabled, setPinInputDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (tokenFromUrl && tokenFromUrl.length === 5) {
            validateToken(tokenFromUrl);
        }
    }, [tokenFromUrl]);

    const validateToken = async (token: string) => {
        try {
            await Axios.post("/verify-email", { token }).then(() => {
                setTimeout(() => {
                    navigate("/");
                }, 400);
            });
            console.log("Token válido");
        } catch (err) {
            console.error("Erro ao validar token", err);
        }
    };

    const handleInputToken = (value: string) => {
        if (value.length === 5) {
            console.log("TOKEN");
            setPinInputDisabled(true);
            validateToken(value);
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex items-center justify-center gap-6 flex-col">
                <h1 className="text-xl text-gray-500 font-bold">
                    Confirme o token enviado para o seu email.
                </h1>
                <PinInput disabled={pinInputDisabled} onChange={handleInputToken} size="xl" oneTimeCode length={5} />
            </div>
        </div>
    );
}
