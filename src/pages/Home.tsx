import {
    ArrowLeftRight,
    Bell,
    BarChartIcon as ChartNoAxesColumnIncreasing,
    ChevronDown,
    ChevronRight,
    EllipsisVertical,
    File,
    LogOut,
    MenuIcon,
    Package,
    PanelLeft,
    SearchIcon,
    Settings,
} from "lucide-react"
import { Input, Kbd, Menu } from "@mantine/core"
import "../styles/Home.css"
import { useRef, useState } from "react"
import Dashboard from "./sections-home/Dashboard"
import ThemeToggle from "../components/ThemeToggle"
import Products from "./sections-home/Products"

export default function Home() {
    const searchInputRef = useRef<HTMLInputElement>(null)
    const [activeSection, setActiveSection] = useState(1)
    const [expandedMenus, setExpandedMenus] = useState<number[]>([1])

    window.addEventListener("keyup", (e) => {
        if (e.key == "k") {
            searchInputRef.current?.focus()
        }
    })

    const sectionsComponentsMap = [
        {
            component: <Dashboard />,
            title: "Dashboard",
        },
        {
            component: <Products />,
            title: "Produtos",
        },
    ]

    const toggleMenu = (index: number) => {
        if (expandedMenus.includes(index)) {
            setExpandedMenus(expandedMenus.filter((item) => item !== index))
        } else {
            setExpandedMenus([...expandedMenus, index])
        }
    }

    const isMenuExpanded = (index: number) => {
        return expandedMenus.includes(index)
    }

    return (
        <div className="h-screen w-full relative flex">
            <div className="sidebar bg-background h-screen sticky top-0 left-0 p-4 flex flex-col items-center justify-between gap-4">
                <div className="top w-full flex flex-col gap-4">
                    <div className="flex items-center justify-between w-full border-b-gray-200 border-b pb-4">
                        <span className="text-2xl">🥝</span>
                        <PanelLeft className="text-gray-400" size={"1.7rem"} cursor={"pointer"} />
                    </div>
                    <div className="search-field w-full border-b-gray-200 border-b pb-4">
                        <Input
                            ref={searchInputRef}
                            leftSection={<SearchIcon size={"1.1rem"} />}
                            rightSection={<Kbd>K</Kbd>}
                            type="search"
                            placeholder="Pesquisar"
                        />
                    </div>
                </div>
                <div className="middle w-full">
                    <nav className="flex flex-col space-y-1">
                        <div
                            onClick={() => setActiveSection(0)}
                            className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors ${activeSection === 0 ? "active" : ""}`}
                        >
                            <ChartNoAxesColumnIncreasing className="mr-2" size={18} />
                            <span>Dashboard</span>
                        </div>

                        <div className="flex flex-col w-full">
                            <div
                                onClick={() => toggleMenu(1)}
                                className={`flex w-full items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${activeSection === 1 && !isMenuExpanded(1) ? "active" : ""}`}
                            >
                                <div className="flex items-center w-full">
                                    <Package className="mr-2" size={18} />
                                    <span>Produtos</span>
                                </div>
                                {isMenuExpanded(1) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </div>

                            {isMenuExpanded(1) && (
                                <div className="ml-7 mt-1 flex flex-col space-y-1 border-l-2 border-gray-100 pl-2 w-full">
                                    <div
                                        onClick={() => setActiveSection(1)}
                                        className={`flex items-center px-3 py-1.5 rounded-md cursor-pointer transition-colors ${activeSection === 1 ? "active" : ""}`}
                                    >
                                        <span className="text-sm">Gerenciar</span>
                                    </div>
                                    <div
                                        onClick={() => setActiveSection(1.1)}
                                        className={`flex items-center px-3 py-1.5 rounded-md cursor-pointer transition-colors ${activeSection === 1.1 ? "active" : ""}`}
                                    >
                                        <span className="text-sm">Variações</span>
                                    </div>
                                    <div
                                        onClick={() => setActiveSection(1.2)}
                                        className={`flex items-center px-3 py-1.5 rounded-md cursor-pointer transition-colors ${activeSection === 1.2 ? "active" : ""}`}
                                    >
                                        <span className="text-sm">Acréscimos</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col w-full">
                            <div
                                onClick={() => toggleMenu(2)}
                                className={`flex w-full items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${activeSection === 2 && !isMenuExpanded(2) ? "active" : ""}`}
                            >
                                <div className="flex w-full items-center">
                                    <File className="mr-2" size={18} />
                                    <span>Relatórios</span>
                                </div>
                                {isMenuExpanded(2) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </div>
                            {isMenuExpanded(2) && (
                                <div className="ml-7 mt-1 flex flex-col space-y-1 border-l-2 border-gray-100 pl-2 w-full">
                                    <div
                                        onClick={() => setActiveSection(2.1)}
                                        className={`flex items-center px-3 py-1.5 rounded-md cursor-pointer transition-colors ${activeSection === 2.1 ? "active" : ""}`}
                                    >
                                        <span className="text-sm">Vendas</span>
                                    </div>
                                    <div
                                        onClick={() => setActiveSection(2.2)}
                                        className={`flex items-center px-3 py-1.5 rounded-md cursor-pointer transition-colors ${activeSection === 2.2 ? "active" : ""}`}
                                    >
                                        <span className="text-sm">Estoque</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            onClick={() => setActiveSection(3)}
                            className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors ${activeSection === 3 ? "active" : ""}`}
                        >
                            <MenuIcon className="mr-2" size={18} />
                            <span>Catálogo</span>
                        </div>
                    </nav>
                </div>
                <div className="bottom w-full border-t-gray-200 border-t py-4 flex items-center justify-between gap-4">
                    <div className="photo min-w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Foto do usuário"
                        />
                    </div>
                    <div className="user-infos w-full text-left">
                        <h3 className="text-lg font-medium">Paulo Afonso</h3>
                        <p className="text-sm text-gray-400" title="Empresa">
                            Hookie
                        </p>
                    </div>
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <div className="options">
                                <EllipsisVertical color="#4ba54a" cursor={"pointer"} />
                            </div>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item leftSection={<ArrowLeftRight />}>Alternar usuário</Menu.Item>
                            <Menu.Item leftSection={<Settings />}>Configurações</Menu.Item>
                            <Menu.Item leftSection={<LogOut />}>Sair</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </div>
            <div className="wrapper-content relative flex flex-col w-full bg-background">
                <div className="topbar sticky top-0 h-16 w-full bg-background flex items-center justify-between p-4">
                    <h1 className="text-xl font-bold text-secondary">
                        {activeSection === 1.1
                            ? "Produtos - Variações"
                            : activeSection === 1.2
                                ? "Produtos - Acréscimos"
                                : activeSection === 2.1
                                    ? "Relatórios - Vendas"
                                    : activeSection === 2.2
                                        ? "Relatórios - Estoque"
                                        : sectionsComponentsMap[Math.floor(activeSection)]?.title || ""}
                    </h1>
                    <div className="right flex gap-4">
                        <Bell className="text-gray-500" cursor={"pointer"} />
                        <ThemeToggle />
                    </div>
                </div>
                <div className="container-content w-full h-full bg-white rounded-t-2xl p-4">
                    {sectionsComponentsMap[Math.floor(activeSection)]?.component || <div>Conteúdo não encontrado</div>}
                </div>
            </div>
        </div>
    )
}
