import { Badge, ScrollArea, Table } from "@mantine/core";
import DashboardSimpleCardWithInfo from "../../components/DashboardSimpleCardWithInfo";
import "../../styles/Dashboard.css";
import { LineChart } from "@mantine/charts"
import { GoListUnordered } from "react-icons/go"
import DashboardSimpleCard from "../../components/DashboardSimpleCard";

export default function Dashboard() {
    const mostSelledProductsData = [
        {
            name: "Big-Mac",
            sellCount: 393.9,
        },
        {
            name: "Big-Mac",
            sellCount: 93,
        },
        {
            name: "Big-Mac",
            sellCount: 145,
        },
        {
            name: "Big-Mac",
            sellCount: 15.21,
        },
        {
            name: "Big-Mac",
            sellCount: 1571,
        },
        {
            name: "Big-Mac",
            sellCount: 393.9
        }
    ];

    const ordersData = [
        {
            orderId: "1",
            clientName: "Paulo Afonso",
            status: "Entregue"
        },
        {
            orderId: "2",
            clientName: "Maria Souza",
            status: "Pendente"
        },
        {
            orderId: "3",
            clientName: "Carlos Lima",
            status: "Cancelado"
        },
        {
            orderId: "4",
            clientName: "Ana Clara",
            status: "Entregue"
        },
        {
            orderId: "5",
            clientName: "João Pedro",
            status: "Pendente"
        },
        {
            orderId: "5",
            clientName: "João Pedro",
            status: "Pendente"
        },
        {
            orderId: "5",
            clientName: "João Pedro",
            status: "Pendente"
        },
        {
            orderId: "5",
            clientName: "João Pedro",
            status: "Pendente"
        },
    ];

    return (
        <div className="w-full h-full flex-col flex items-center justify-start gap-5">
            <div className="grid w-full grid-cols-3 gap-5">
                <DashboardSimpleCardWithInfo title={"Clientes"} value={"12"} />
                <DashboardSimpleCardWithInfo title={"Receita Mensal"} value={"16"} />
                <DashboardSimpleCardWithInfo title={"Pedidos Cancelados"} value={"10"} />
                <div className="col-span-3 flex items-center justify-between gap-5">
                    <DashboardSimpleCardWithInfo title={"Ticket Médio"} value={"194"} />
                    <DashboardSimpleCardWithInfo title={"Lucro real"} value={"194"} />
                </div>
            </div>
            <div className="flex items-center justify-between w-full h-full gap-5">
                <DashboardSimpleCard className="flex-1">
                    <div className="top flex items-center justify-between w-full">
                        <h1 className="text-2xl text-gray-500 font-medium">Vendas</h1>
                    </div>
                    <div className="w-full flex items-end justify-center gap-6">
                        <LineChart
                            h={300}
                            data={mostSelledProductsData}
                            series={[{ name: 'sellCount', label: 'Vendas' }]}
                            dataKey="name"
                            type="gradient"
                            gradientStops={[
                                { offset: 0, color: 'yellow.5' },
                                { offset: 50, color: 'green.5' },
                                { offset: 100, color: 'green.4' },
                            ]}
                            strokeWidth={4}
                            curveType="bump"
                            yAxisProps={{ domain: [-25, 40] }}
                            valueFormatter={(value) => `${value} Vendas`}
                        />
                    </div>
                </DashboardSimpleCard>
                <DashboardSimpleCard className="flex-[.5] !p-0">
                    <ScrollArea h={450}>
                        <Table striped withColumnBorders verticalSpacing={"lg"} horizontalSpacing={"xl"} highlightOnHover stickyHeader>
                            <Table.Thead>
                                <Table.Tr className="text-gray-500">
                                    <Table.Th className="!text-center text-md">Cód.</Table.Th>
                                    <Table.Th className="!text-center text-md">Cliente</Table.Th>
                                    <Table.Th className="!text-center text-md">Status</Table.Th>
                                    <Table.Th className="!text-center text-md">Ver</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {ordersData.map((order) => (
                                    <Table.Tr key={order.orderId}>
                                        <Table.Td>#{order.orderId}</Table.Td>
                                        <Table.Td>{order.clientName}</Table.Td>
                                        <Table.Td align="center">
                                            <Badge color={order.status === "Entregue" ? "green" : order.status === "Pendente" ? "yellow" : "red"}>{order.status}</Badge>
                                        </Table.Td>
                                        <Table.Td>
                                            <span className="cursor-pointer text-xl">
                                                <GoListUnordered />
                                            </span>
                                        </Table.Td>
                                    </Table.Tr>
                                ))}
                            </Table.Tbody>
                        </Table>
                    </ScrollArea>
                </DashboardSimpleCard>
            </div>
        </div>
    )
}