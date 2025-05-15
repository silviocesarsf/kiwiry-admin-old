import { Button, Input, Menu, ScrollArea, Select, Table } from "@mantine/core";
import { Edit, EllipsisVertical, SearchIcon, Trash } from "lucide-react";
import RegisterProductModal from "../../components/modal/RegisterProductModal";
import { useDisclosure } from "@mantine/hooks";
import "../../styles/Products.css";

export default function Products() {

    const [modalOpened, { open, close }] = useDisclosure(false);

    return (
        <div className="w-full h-full flex flex-col gap-4">
            <RegisterProductModal open={modalOpened} onClose={close} />
            <div className="flex items-center justify-between gap-4 w-full">
                <Input placeholder="Pesquisar" className="flex-1" leftSection={<SearchIcon size={"1.4rem"} />} />
                <Button onClick={open}>Adicionar Produto</Button>
            </div>
            <Table.ScrollContainer minWidth={500} maxHeight={800}>
                <Table verticalSpacing={"lg"} striped highlightOnHover stickyHeader stickyHeaderOffset={0}>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Nome</Table.Th>
                            <Table.Th>Descrição</Table.Th>
                            <Table.Th>Preço</Table.Th>
                            <Table.Th>Editar</Table.Th>
                            <Table.Th>Excluir</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Td>#1</Table.Td>
                            <Table.Td>Pão de açucar</Table.Td>
                            <Table.Td>Pãozinho assado no fogo de chão</Table.Td>
                            <Table.Td>R$ 1,00</Table.Td>
                            <Table.Td>
                                <span className="cursor-pointer"><Edit /></span>
                            </Table.Td>
                            <Table.Td>
                                <span className="cursor-pointer"><Trash /></span>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                    <Table.Tfoot>
                        <Table.Tr>
                            <Table.Td colSpan={6}>Exibindo 10 de 100 registros</Table.Td>
                        </Table.Tr>
                    </Table.Tfoot>
                </Table>
            </Table.ScrollContainer>
        </div>
    )
}