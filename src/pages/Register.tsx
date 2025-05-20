import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Input, Loader } from "@mantine/core";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "No mínimo 6 caracteres"),
    ownerName: z.string().min(15, "Insira o nome completo do responsavel"),
    enterpriseName: z.string().min(5, "No mínimo 5 caracteres"),
    cnpj: z
        .string()
        .min(14, "No mínimo 14 caracteres")
        .optional()
        .or(z.literal(""))
});

type FormData = z.infer<typeof schema>;
export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        
    }

    return (
        <div className="w-full h-screen flex items-center justify-between">
            <div className="left text-white bg-primary h-full flex-[.5] p-6 flex flex-col items-start justify-between relative">
                <div className="w-full">
                    <h1 className="text-3xl font-bold">kiwire</h1>
                </div>
                <div className="w-full space-y-4 mb-12">
                    <h1 className="text-5xl font-bold">Entregue com agilidade e precisão</h1>
                    <p className="text-2xl font-light text-gray-200">Aproveite o <span className="font-bold text-white">teste gratuito de 30 dias</span> e junte-se aos estabelecimentos que transformaram a forma de vender.</p>
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
                        <h1 className="text-3xl text-primary font-bold">Crie sua conta</h1>
                        <p className="text-amber-900 text-lg">Preencha seus dados para começar a usar o Kiwire</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-4 items-center justify-center">
                        <Input.Wrapper label="Email" withAsterisk className="w-full" error={errors.email?.message}>
                            <Input {...register("email")} error={errors.email?.message} className="w-full" type="email" placeholder="email@email.com" />
                        </Input.Wrapper>
                        <Input.Wrapper label="Senha" withAsterisk className="w-full" error={errors.password?.message}>
                            <Input {...register("password")} error={errors.password?.message} className="w-full" type="password" placeholder="Sua senha segura" />
                        </Input.Wrapper>
                        <Input.Wrapper label="Nome do responsável" withAsterisk className="w-full" error={errors.ownerName?.message}>
                            <Input {...register("ownerName")} error={errors.ownerName?.message} className="w-full" type="text" placeholder="Seu nome completo" />
                        </Input.Wrapper>
                        <Input.Wrapper label="Nome da Empresa" withAsterisk className="w-full" error={errors.enterpriseName?.message}>
                            <Input {...register("enterpriseName")} error={errors.enterpriseName?.message} className="w-full" type="text" placeholder="Nome do seu estabelecimento" />
                        </Input.Wrapper>
                        <Input.Wrapper label="CNPJ" className="w-full" error={errors.cnpj?.message}>
                            <Input {...register("cnpj")} error={errors.cnpj?.message} className="w-full" type="text" placeholder="00.000.000/0000-00" />
                        </Input.Wrapper>
                        <div className="space-y-2 w-full mt-4">
                            <Button fullWidth size="lg" type="submit">{isLoading ? <Loader size={"sm"} color="#fff" /> : "Criar Conta"}</Button>
                            <div className="w-full text-center">
                                <span>Já tem uma conta ? <Link className="text-primary" to={"/login"}>Faça login</Link></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}