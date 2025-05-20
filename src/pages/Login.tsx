import { Button, Checkbox, Input, Loader } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Axios from "../lib/axios";
import { useState } from "react";

const schema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "No mínimo 6 caracteres")
});

type FormData = z.infer<typeof schema>;
export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        const response = await Axios.post("/login", data, { withCredentials: true });
        setIsLoading(false);
        if (response.status == 200) {
            navigate("/");
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-between">
            <div className="left text-white bg-primary h-full flex-[.5] p-6 flex flex-col items-start justify-between relative">
                <div className="w-full">
                    <h1 className="text-3xl font-bold">kiwire</h1>
                </div>
                <div className="w-full space-y-4 mb-12">
                    <h1 className="text-5xl font-bold">Bem vindo de volta!</h1>
                    <p className="text-2xl font-light text-gray-200">Acesse sua conta para gerenciar suas entregas com eficiência e praticidade.</p>
                </div>
                <div className="w-full">
                    <h1 className="text-md opacity-40">© {new Date().getFullYear()} Kiwire Delivery, Todos os direitos reservados.</h1>
                </div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-60 h-60 rounded-full border-8 border-white"></div>
                    <div className="absolute bottom-40 right-40 w-40 h-40 rounded-full border-4 border-white"></div>
                    <div className="absolute top-60 right-20 w-20 h-20 rounded-full border-2 border-white"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full border-4 border-white"></div>
                </div>
            </div>
            <div className="right h-full flex-1 bg-white p-12 flex items-center justify-center">
                <div className="w-[80%] flex flex-col gap-12 h-full justify-center items-center">
                    <div className="space-y-2 w-full text-start">
                        <h1 className="text-3xl text-primary font-bold">Entrar no kiwire</h1>
                        <p className="text-amber-900 text-lg">Digite suas credenciais para acessar sua conta</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-4 items-center justify-center">
                        <Input.Wrapper label="Email" withAsterisk className="w-full" error={errors.email?.message}>
                            <Input {...register("email")} error={errors.email?.message} className="w-full" type="email" placeholder="email@email.com" />
                        </Input.Wrapper>
                        <Input.Wrapper label="Senha" withAsterisk className="w-full" error={errors.password?.message} >
                            <Input {...register("password")} error={errors.password?.message} className="w-full" type="password" placeholder="Sua senha" />
                        </Input.Wrapper>
                        <div className="w-full flex items-center justify-between">
                            <Checkbox label="Lembrar de mim" />
                            <Link className="text-primary" to={"/forget-password"}>Esqueceu a senha?</Link>
                        </div>
                        <div className="space-y-2 w-full mt-4">
                            <Button fullWidth size="lg" type="submit">{isLoading ? <Loader size={"sm"} color="#fff" /> : "Entrar"}</Button>
                            <div className="w-full text-center">
                                <span>Ainda não tem uma conta ? <Link className="text-primary" to={"/register"}>Cadastre-se</Link></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}