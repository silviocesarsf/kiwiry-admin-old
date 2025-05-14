import { Button, Input, Menu, ScrollArea, Table } from "@mantine/core";
import { EllipsisVertical, SearchIcon } from "lucide-react";
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
            <ScrollArea.Autosize h={"85%"}>
                <Table highlightOnHover striped verticalSpacing={"lg"} withTableBorder>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Foto</Table.Th>
                            <Table.Th>Nome</Table.Th>
                            <Table.Th>Descrição</Table.Th>
                            <Table.Th>Valor</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Td>#88928</Table.Td>
                            <Table.Td>
                                <div className="overflow-hidden rounded-md w-16 h-16">
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                </div>
                            </Table.Td>
                            <Table.Td>Teste</Table.Td>
                            <Table.Td>Descrição akii HAHAHHAHHAAHAHAHAHAHHAHHAHAHHAH</Table.Td>
                            <Table.Td>R$ 92,90</Table.Td>
                            <Table.Td>
                                <Menu>
                                    <Menu.Target>
                                        <div className="cursor-pointer">
                                            <EllipsisVertical size={"1.4rem"} />
                                        </div>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <Menu.Item>Editar</Menu.Item>
                                        <Menu.Item>Excluir</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                    <Table.Tfoot>
                        <Table.Tr>
                            <Table.Td colSpan={4} className="text-gray-500">Exibindo 1 de 1 Produtos</Table.Td>
                        </Table.Tr>
                    </Table.Tfoot>
                </Table>
            </ScrollArea.Autosize>
        </div>
    )
}