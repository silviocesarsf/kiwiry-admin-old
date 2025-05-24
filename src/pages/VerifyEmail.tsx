import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, PinInput } from "@mantine/core";
import Axios from "../lib/axios";
import toast, { Toaster } from "react-hot-toast";

export default function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const tokenFromUrl = searchParams.get("token");
    const [pinInputDisabled, setPinInputDisabled] = useState(false);
    const navigate = useNavigate();
    const [pinInputValue, setPinInputValue] = useState("");
    const [pinInputError, setPinInputError] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const [resendTokenButtonDisabled, setResendTokenButtonDisabled] = useState(true);
    const emailToVerify = localStorage.getItem("emailToVerify");

    useEffect(() => {
        if (tokenFromUrl && tokenFromUrl.length == 5) {
            setPinInputValue(tokenFromUrl);
            validateToken(tokenFromUrl);
        }
    }, [tokenFromUrl]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setResendTokenButtonDisabled(false);
        }, 20000);

        return () => clearTimeout(timer);
    }, []);

    const validateToken = (token: string) => {
        Axios.post("/verify-email", { token }).then((res) => {
            if (res.status == 200) {
                localStorage.removeItem("emailToVerify");
                toast.success("Email verificado com sucesso");
                setTimeout(() => {
                    navigate("/");
                }, 400);
            }
        }).catch((err) => {
            const msg = err.response.data?.error || "Erro interno";
            setErrMessage(msg);
            setPinInputError(true);
        }).finally(() => setPinInputDisabled(false));
    };

    const handleInputToken = (value: string) => {
        setPinInputValue(value);

        if (value.length === 5 && value !== tokenFromUrl) {
            setPinInputDisabled(true);
            validateToken(value);
        }
    };

    return (
        <div className="w-full h-screen bg-secondary/15 flex items-center justify-center">
            <Toaster />
            <div className=" bg-white rounded-xl shadow-md flex flex-col items-center justify-between p-12 gap-5">
                <div className="space-y-4 text-center w-full">
                    <h1 className="text-2xl font-bold text-secondary">Verifique seu e-mail</h1>
                    <p className="text-lg text-gray-500">
                        {emailToVerify
                            ? `Enviamos um código de 5 dígitos para ${emailToVerify}`
                            : "Enviamos um código de verificação para seu e-mail"}
                    </p>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center w-full">
                    <PinInput error={pinInputError} value={pinInputValue} disabled={pinInputDisabled} onChange={handleInputToken} size="xl" length={5} />
                    {pinInputError && (
                        <span className="text-sm text-red-500">
                            {errMessage || "Código inválido ou expirado."}
                        </span>
                    )}                    <div className="w-full flex flex-col items-center justify-center gap-2 mt-4">
                        <Button size="sm" disabled={resendTokenButtonDisabled}>Reenviar código</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
