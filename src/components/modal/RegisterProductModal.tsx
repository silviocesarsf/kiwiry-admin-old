import { ActionIcon, Button, Input, Modal, MultiSelect, Select, Textarea } from "@mantine/core";
import { FileImage, ListPlus, Search } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { formatCurrency } from "../../utils/Formatters";

export default function RegisterProductModal({ open, onClose }: { open: boolean, onClose: () => void }) {
    const [priceVal, setPriceVal] = useState<string>('');
    return (
        <Modal
            className="relative"
            title="Novo produto"
            size={"xl"}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
            opened={open}
            onClose={onClose}
            centered
        >
            <div className="h-full w-full flex flex-col gap-4">
                <h1 className="font-bold text-gray-400 text-xl">Informações</h1>
                <div className="w-full flex gap-4">
                    <Input placeholder="Nome do produto" className="flex-1" type="text" />
                    <Input
                        value={priceVal}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setPriceVal(formatCurrency(event.target.value));
                        }}
                        placeholder="Preço"
                        className="flex-[.3]" />
                </div>
                <div className="w-full flex gap-4 items-center justify-center">
                    <Select
                        className="flex-1"
                        placeholder="Escolha uma categoria"
                        clearable
                        data={["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4", "Categoria 5"]}
                        rightSection={
                            <Search />
                        }
                    />
                    <ActionIcon className="cursor-pointer" size={"xl"} title="Criar nova categoria">
                        <ListPlus className="" />
                    </ActionIcon>
                </div>
                <div className="w-full">
                    <Textarea
                        placeholder="Descrição"
                        autosize
                        minRows={5}
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <h1 className="font-bold text-gray-400 text-xl">Variações</h1>
                    <div className="flex items-center justify-center w-full gap-4">
                        <MultiSelect
                            className="flex-1"
                            placeholder="Escolha variações para seu produto"
                            data={['Regado ao molho branco', 'Regado ao molho verde', 'Sabor chocolate', 'Sabor morango']}
                            rightSection={
                                <Search />
                            }
                        />
                        <ActionIcon className="cursor-pointer" size={"xl"} title="Criar nova variação">
                            <ListPlus className="" />
                        </ActionIcon>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <h1 className="font-bold text-gray-400 text-xl">Acréscimos</h1>
                    <div className="flex items-center justify-center w-full gap-4">
                        <MultiSelect
                            className="flex-1"
                            placeholder="Escolha acréscimos para seu produto"
                            data={['Chocoball', 'Nescau', 'Bombom']}
                            rightSection={
                                <Search />
                            }
                        />
                        <ActionIcon className="cursor-pointer" size={"xl"} title="Criar novo acréscimo">
                            <ListPlus className="" />
                        </ActionIcon>
                    </div>
                </div>
                <div className="w-full cursor-pointer h-52 rounded-md border-dashed border-gray-300 border-2 flex items-center justify-center transition-all duration-200 hover:bg-gray-100 hover:border-primary">
                    <div className="flex flex-col justify-center items-center gap-2 relative h-48 w-full">
                        <FileImage size={"4rem"} strokeWidth={1} className="text-gray-500 mb-4" />
                        <div className="absolute inset-0 z-10">
                            <input
                                type="file"
                                className="w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                        <span className="text-md text-gray-700 font-medium">
                            Arraste sua imagem, <span className="text-primary font-bold">ou pesquise clicando aqui</span>
                        </span>
                        <span className="text-sm text-gray-500">No máximo 5MB</span>
                    </div>
                </div>
                <div className="footer flex items-center justify-end">
                    <Button>Cadastrar</Button>
                </div>
            </div>
        </Modal>
    )
}