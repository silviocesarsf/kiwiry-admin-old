import { Calendar, ChevronRight } from "lucide-react";
import "../../styles/Dashboard.css";
import { DatePickerInput } from "@mantine/dates";

export default function Dashboard() {
    return (
        <div className="w-full h-full flex flex-col gap-6">
            <div className="top flex items-center justify-between border-b-gray-200 border-b py-6">
                <div className="flex flex-col gap-2">
                    <p className="text-gray-400 text-md">Total de Vendas no Período (Mensal)</p>
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
                <nav className="select-date bg-background px-6 py-2 rounded-full flex items-center justify-center gap-6 border-border border">
                    <DatePickerInput
                        placeholder="Escolher a data"
                        valueFormat="DD/MM/YYYY"
                        leftSection={<Calendar size={"1.2rem"} />}
                        styles={{
                            input: {
                                backgroundColor: 'inherit',
                                border: 'none'
                            }
                        }}
                    />
                </nav>
            </div>
        </div>
    )
}