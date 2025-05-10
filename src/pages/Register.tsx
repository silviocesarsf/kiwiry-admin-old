import { Button, Input, InputLabel, InputWrapper } from "@mantine/core"
import { BriefcaseBusiness, LockIcon, LogOut, Mail } from "lucide-react"
import Hero from "../assets/background_hero.png";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigation = useNavigate();
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="flex items-center justify-between w-full h-full">
                <div className="left h-full py-4 px-8 w-[40%] flex flex-col items-center justify-center gap-12">
                    <div className="w-full items-start justify-center flex flex-col">
                        <h1 className="text-7xl font-bold bg-gradient-to-br from-green-300 via-green-500 to-green-400 bg-clip-text text-transparent">Cadastre-se aqui.</h1>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <Input placeholder="Insira o nome da sua empresa" type="text" leftSection={<BriefcaseBusiness size={"1.4rem"} />} />
                        <Input placeholder="Insira seu E-mail" type="email" leftSection={<Mail size={"1.4rem"} />} />
                        <InputWrapper>
                            <Input placeholder="Insira sua senha" type="password" leftSection={<LockIcon size={"1.4rem"} />} />
                            <InputLabel className="text-gray-400 mt-2">No mínimo 8 caracteres</InputLabel>
                        </InputWrapper>
                        <div className="flex flex-col items-center justify-center w-full gap-4 mt-4">
                            <Button fullWidth leftSection={<LogOut size={"1.4rem"} />}>Cadastrar-se</Button>
                            <Button variant="outline" fullWidth onClick={() => navigation("/login")}>Entrar</Button>
                        </div>
                    </div>
                </div>
                <div className="right h-full w-full flex items-center justify-center">
                    <div className="photo w-full h-full overflow-hidden rounded-l-2xl">
                        <img className="w-full h-full object-cover" src={Hero} />
                    </div>
                </div>
            </div>
        </div>
    )
}