import { Activity, ChevronRight, HandCoins, Info } from "lucide-react";
import "../../styles/Dashboard.css";
import { Table, Tooltip } from "@mantine/core";

export default function Dashboard() {

    const recentsOrders = [
        {
            id: "#2813",
            name: "Coca-Cola",
            price: "R$ 1.000,00",
            status: "delivered",
            date: "22/11 12:11"
        },
        {
            id: "#324",
            name: "Coca",
            price: "R$ 1.000,00",
            status: "delivered",
            date: "22/11 12:11"
        },
        {
            id: "#139",
            name: "Pão com presunto",
            price: "R$ 38,90",
            status: "pending",
            date: "22/11 12:11"
        },
        {
            id: "#139",
            name: "Pão com presunto",
            price: "R$ 38,90",
            status: "pending",
            date: "22/11 12:11"
        },
        {
            id: "#139",
            name: "Pão com presunto",
            price: "R$ 38,90",
            status: "pending",
            date: "22/11 12:11"
        },
        {
            id: "#139",
            name: "Pão com presunto",
            price: "R$ 38,90",
            status: "pending",
            date: "22/11 12:11"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col gap-6">
            <div className="top flex items-center justify-between border-b-gray-200 border-b py-6">
                <div className="flex flex-col gap-2">
                    <p className="text-gray-400 text-md">Faturamento do Período</p>
                    <h1 className="text-5xl font-bold text-black/60">R$ 2.990,90</h1>
                </div>
                <div className="">
                    <ChevronRight size={"2rem"} className="transition-all duration-300 hover:text-primary cursor-pointer" />
                </div>
            </div>
            <div className="filters flex items-center justify-start gap-4">
                <nav className="bg-background px-6 py-2 rounded-full flex items-center justify-center gap-6 border-border border">
                    <li className="active">Hoje</li>
                    <li>Ontem</li>
                    <li>Essa semana</li>
                    <li>Esse mês</li>
                </nav>
            </div>
            <div className="grid-container grid gap-4 grid-cols-3 h-full">
                <div className="card">
                    <div className="title">
                        <div className="left">
                            <Activity />
                            <h1>Teste Titulo</h1>
                        </div>
                        <div className="right">
                            <Tooltip label="Teste">
                                <Info />
                            </Tooltip>
                        </div>
                    </div>
                    <div className="content">

                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <div className="left">
                            <Activity />
                            <h1>Teste Titulo</h1>
                        </div>
                        <div className="right">
                            <Tooltip label="Teste">
                                <Info />
                            </Tooltip>
                        </div>
                    </div>
                    <div className="content">

                    </div>
                </div>
                <div className="orders card row-span-2">
                    <div className="title">
                        <div className="left">
                            <Activity />
                            <h1>Pedidos</h1>
                        </div>
                        <div className="right">
                            <Tooltip label="Pedidos Recentes">
                                <Info />
                            </Tooltip>
                        </div>
                    </div>
                    <div className="content p-0!">
                        <Table striped highlightOnHover verticalSpacing={"lg"} className="text-gray-500 w-full">

                            <Table.Tbody>
                                {recentsOrders.map((order) => (
                                    <Table.Tr key={order.id}>
                                        <Table.Td>{order.id}</Table.Td>
                                        <Table.Td>{order.name}</Table.Td>
                                        <Table.Td>{order.price}</Table.Td>
                                        <Table.Td>{order.date}</Table.Td>
                                        <Table.Td><span className="bg-green-500/80 text-white px-2 py-1 rounded-full">{order.status}</span></Table.Td>
                                    </Table.Tr>
                                ))}
                            </Table.Tbody>
                        </Table>
                    </div>
                </div>
                <div className="card col-span-2">
                    <div className="title">
                        <div className="left">
                            <HandCoins />
                            <h1>Vendas</h1>
                        </div>
                        <div className="right">
                            <Tooltip label="Veja o horário que sua empresa mais vende.">
                                <Info />
                            </Tooltip>
                        </div>
                    </div>
                    <div className="content">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}