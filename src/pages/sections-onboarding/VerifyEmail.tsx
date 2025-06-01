import { Button, PinInput } from "@mantine/core";
import { useEffect, useState } from "react";
import Axios from "../../lib/axios";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const emailToVerify = localStorage.getItem("emailToVerify") || "";
export default function VerifyEmail({ setStepActive }) {
    const [pinInputError, setPinInputError] = useState(false);
    const [pinInputValue, setPinInputValue] = useState("");
    const [resendTokenButtonDisabled, setResendTokenButtonDisabled] = useState(true);
    const [searchParams] = useSearchParams();
    const tokenFromUrl = searchParams.get("token") || "";

    const handleInputToken = (token: string) => {
        if (token.length == 5) {
            handleVerifyEmail(token);
            setPinInputValue(token);
        }
    }

    const handleVerifyEmail = (token: string) => {
        Axios.post("/verify-email", { token })
            .then((res) => {
                if (res.status == 200) {
                    toast.success("Email verificado");
                    localStorage.removeItem("emailToVerify");
                    setTimeout(() => {
                        setStepActive(1);
                    }, 700);
                }
            })
            .catch((err) => {
                toast.error(err.response.data?.error || "Erro interno");
                setPinInputError(true);
                setPinInputValue("");
            })
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setResendTokenButtonDisabled(false);
        }, 15000);

        return () => {
            clearTimeout(timeout);
        }
    }, [])

    useEffect(() => {
        if (tokenFromUrl && tokenFromUrl.length == 5) {
            setPinInputValue(tokenFromUrl);
            handleVerifyEmail(tokenFromUrl);
            console.log("Há um token na url");
        }
    }, [tokenFromUrl]);
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12">
            <Toaster />
            <div className="flex flex-col items-center justify-center gap-2 w-full">
                <h1 className="text-4xl font-bold text-primary/70 text-center">Verifique seu e-mail</h1>
                <p className="text-md text-center text-gray-500 max-w-[60%]">Um código de verificação foi enviado para {emailToVerify ? (<span className="font-bold">{emailToVerify}</span>) : "o seu e-mail"}, verifique sua caixa de entrada e spam.</p>
            </div>
            <div className="w-full flex items-center flex-col justify-center gap-8">
                <PinInput autoFocus={true} error={pinInputError} value={pinInputValue} size="xl" length={5} onChange={handleInputToken} />
                <div className="w-[30%] flex items-center justify-center flex-col gap-4">
                    <Button disabled={resendTokenButtonDisabled} variant="gradient" fullWidth>Reenviar Código</Button>
                </div>
            </div>
        </div>
    )
}