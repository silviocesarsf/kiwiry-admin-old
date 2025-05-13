import { ArrowLeftRight, Bell, ChartNoAxesColumnIncreasing, EllipsisVertical, File, LogOut, Logs, Package, PanelLeft, SearchIcon, Settings } from "lucide-react"
import { Input, Kbd, Menu } from "@mantine/core"
import "../styles/Home.css"
import { useRef, useState } from "react";
import Dashboard from "./sections-home/Dashboard";
import ThemeToggle from "../components/ThemeToggle";
import Products from "./sections-home/Products";

export default function Home() {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [activeSection, setActiveSection] = useState(1);

    window.addEventListener("keyup", (e) => {
        if (e.key == "k") {
            searchInputRef.current?.focus();
        }
    });

    const sectionsComponentsMap = [
        {
            component: <Dashboard />,
            title: "Dashboard"
        },
        {
            component: <Products />,
            title: "Produtos"
        },
    ];

    return (
        <div className="h-screen w-full relative flex">
            <div className="sidebar bg-background h-screen  sticky top-0 left-0 p-4 flex flex-col items-center justify-between gap-4">
                <div className="top w-full flex flex-col gap-4">
                    <div className="flex items-center justify-between w-full border-b-gray-200 border-b pb-4">
                        <span className="text-2xl">🥝</span>
                        <PanelLeft className="text-gray-400" size={"1.7rem"} cursor={"pointer"} />
                    </div>
                    <div className="search-field w-full  border-b-gray-200 border-b pb-4">
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
                    <nav>
                        <li
                            onClick={() => setActiveSection(0)}
                            className={`${activeSection == 0 ? "active" : ""}`}>
                            <ChartNoAxesColumnIncreasing />Dashboard</li>
                        <li
                            onClick={() => setActiveSection(1)}
                            className={`${activeSection == 1 ? "active" : ""}`}
                        >
                            <Package />Produtos
                        </li>
                        <li
                            onClick={() => setActiveSection(2)}
                            className={`${activeSection == 2 ? "active" : ""}`}
                        >
                            <File />Relatórios
                        </li>
                        <li
                            onClick={() => setActiveSection(3)}
                            className={`${activeSection == 3 ? "active" : ""}`}
                        >
                            <Logs />Catálogo
                        </li>
                    </nav>
                </div>
                <div className="bottom w-full border-t-gray-200 border-t py-4 flex items-center justify-between gap-4">
                    <div className="photo min-w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div className="user-infos w-full text-left">
                        <h3 className="text-lg font-medium">Paulo Afonso</h3>
                        <p className="text-sm text-gray-400" title="Empresa">Hookie</p>
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
                    <h1 className="text-xl font-bold text-secondary">{sectionsComponentsMap[activeSection].title}</h1>
                    <div className="right flex gap-4">
                        <Bell className="text-gray-500" cursor={"pointer"} />
                        <ThemeToggle />
                    </div>
                </div>
                <div className="container-content w-full h-full bg-white rounded-t-2xl p-4">
                    {sectionsComponentsMap[activeSection].component}
                </div>
            </div>
        </div>
    )
}