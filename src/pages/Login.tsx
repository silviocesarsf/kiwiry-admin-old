import { Anchor, Button, Checkbox, Input } from "@mantine/core";
import { Mail, LockIcon, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Hero from "../assets/background_hero.png";

export default function Login() {
    const navigation = useNavigate();
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="flex items-center justify-between w-full h-full">
                <div className="left h-full w-[40%] py-4 px-8 flex flex-col items-center justify-center gap-12">
                    <div className="w-full items-start justify-center flex flex-col">
                        <h1 className="text-7xl font-bold bg-gradient-to-br from-green-300 via-green-500 to-green-400 bg-clip-text text-transparent">Olá,</h1>
                        <p className="text-4xl font-medium bg-gradient-to-br from-green-300 via-green-500 to-green-400 bg-clip-text text-transparent">Bem vindo de volta!</p>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <Input placeholder="Insira seu E-mail" type="email" leftSection={<Mail size={"1.4rem"} />} />
                        <Input placeholder="Insira sua senha" type="password" leftSection={<LockIcon size={"1.4rem"} />} />
                        <div className="flex w-full items-center justify-between">
                            <Checkbox label="Lembrar de mim" />
                            <Anchor target="_blank" underline="always">
                                Esqueci minha senha
                            </Anchor>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full gap-4 mt-4">
                            <Button fullWidth leftSection={<LogIn size={"1.4rem"} />}>Entrar</Button>
                            <Button onClick={() => navigation("/register")} variant="outline" fullWidth>Registrar-se</Button>
                        </div>
                    </div>
                </div>
                <div className="right h-full w-full flex items-center justify-center shadow-xl">
                    <div className="photo w-full h-full overflow-hidden rounded-l-2xl">
                        <img className="w-full h-full object-cover" src={Hero} />
                    </div>
                </div>
            </div>
        </div>
    )
}