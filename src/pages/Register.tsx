import { Button, Input } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { Building2, Key, Mail, MoveRight, User } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    enterpriseName: z.string(),
    ownerName: z.string(),
    cnpj: z.string().optional()
});

type FormData = z.infer<typeof schema>;
export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <div className="h-screen w-full flex items-center justify-between">
            <div className="bg-primary flex-[.4] h-full p-4 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[50%] gap-4">
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                        <h1 className="text-white font-bold text-4xl">Bem-vindo.</h1>
                        <p className="text-white text-lg">Já tem uma conta ?</p>
                    </div>
                    <Button variant="outline" fullWidth color="white">Faça Login</Button>
                </div>
            </div>
            <div className="bg-white flex-1 h-full flex items-center justify-center flex-col p-4 gap-8">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl text-gray-500 font-bold">Crie sua conta</h1>
                    <p className="text-md text-gray-400 font-medium">Aproveite o teste de 30 dias grátis.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[40%] items-center justify-center gap-4">
                    <Input {...register("enterpriseName")} error={errors.enterpriseName?.message} leftSection={<Building2 className="text-gray-300" size={"1.2em"} />} placeholder="Nome da sua empresa" type="text" className="w-full" />
                    <Input {...register("ownerName")} error={errors.ownerName?.message} leftSection={<User className="text-gray-300" size={"1.2em"} />} placeholder="Nome do responsável" type="text" className="w-full" />
                    <Input {...register("cnpj")} error={errors.cnpj?.message} placeholder="CNPJ (Opcional)" type="text" className="w-full" />
                    <Input {...register("email")} error={errors.email?.message} leftSection={<Mail className="text-gray-300" size={"1.2em"} />} placeholder="Email" type="email" className="w-full" />
                    <Input {...register("password")} error={errors.password?.message} leftSection={<Key className="text-gray-300" size={"1.2em"} />} placeholder="Senha" type="password" className="w-full" />
                    <Button type="submit" rightSection={<MoveRight />} fullWidth>Criar conta</Button>
                    <div className="w-full flex items-center justify-center gap-4">
                        <Button variant="light" fullWidth title="Cadastrar com o Google">
                            <FcGoogle size={"1.3em"} />
                        </Button>
                        <Button variant="light" fullWidth title="Cadastrar com o Facebook">
                            <FaSquareFacebook size={"1.3em"} color="blue" />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}