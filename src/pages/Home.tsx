import { ArrowLeftFromLine, ArrowRightFromLine, BeefIcon, ChartBar, MenuSquareIcon, ShoppingCart } from "lucide-react";
import '../styles/home.css'
import { useState } from "react";

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div className="h-screen w-full relative">
            <div className={`sidebar absolute top-0 h-full bg-white flex flex-col items-center justify-start p-8 gap-7
                transition-all duration-200 ease-in-out
                ${sidebarOpen ? 'left-0 w-[300px]' : 'left-[-300px] w-0'}
            `}>
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-primary">Kiwiry</h1>
                    <div className="bg-primary rounded-l-xl p-2 flex items-center justify-center cursor-pointer" title="Esconder barra lateral">
                        <ArrowLeftFromLine onClick={() => setSidebarOpen(false)} color="white" cursor={"pointer"} />
                    </div>
                </div>
                <nav className="h-full w-full flex flex-col items-start justify-center gap-8">
                    <li onClick={() => setActiveSection(0)} className={`${activeSection == 0 ? "active" : ""}`}><ChartBar /> Dashboard</li>
                    <li onClick={() => setActiveSection(1)} className={`${activeSection == 1 ? "active" : ""}`}><MenuSquareIcon /> Catálogo</li>
                    <li onClick={() => setActiveSection(2)} className={`${activeSection == 2 ? "active" : ""}`}><BeefIcon /> Produtos</li>
                    <li onClick={() => setActiveSection(3)} className={`${activeSection == 3 ? "active" : ""}`}><ShoppingCart /> Pedidos</li>
                </nav>
            </div>
            <div className={`transition-all cursor-pointer duration-200 ease-in-out bg-primary rounded-r-xl p-2 absolute top-[45%] 
                ${!sidebarOpen ? 'left-0' : 'left-[-300px] invisible'}`}
                title="Exibir barra lateral"
                onClick={() => setSidebarOpen(true)}>
                <ArrowRightFromLine color="white" />
            </div>
            <div className={`content transition-all duration-200 ease-in-out p-8 w-full h-full ${sidebarOpen ? 'pl-[300px]' : 'pl-4'}`}>
                <h1>Conteúdo</h1>
            </div>
        </div>
    )
}