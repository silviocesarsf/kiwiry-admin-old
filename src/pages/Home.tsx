import { MdDashboard, MdOutlineRestaurantMenu } from "react-icons/md"
import "../styles/Home.css"
import { FaBox, FaUserFriends } from "react-icons/fa"
import { BoxIcon } from "lucide-react"
import { BsBellFill } from "react-icons/bs"
import Dashboard from "./sections-home/Dashboard"
import { useState } from "react"
import { Input } from "@mantine/core"
import { formatDateForInput, getFirstLastDayOfMonth } from "../utils/Date"

const sectionsMap = [
    {
        name: "Dashboard",
        description: "Visão geral do seu negócio",
        component: <Dashboard />
    },
    {
        name: "Produtos",
        component: null
    },
    {
        name: "Catálogos",
        component: null
    },
    {
        name: "Usuários",
        component: null
    }
]
export default function Home() {
    const [activeSection, setActiveSection] = useState(0);
    const { firstDateOfMonth, lastDateOfMonth } = getFirstLastDayOfMonth(new Date());
    console.log("firstDateOfMonth", firstDateOfMonth.toISOString());
    return (
        <div className="w-full h-screen relative flex items-center justify-between">
            <div className="sidebar p-6 flex flex-col items-center justify-start left-0 top-0 sticky w-[330px] h-full bg-white border-r border-gray-200 gap-6">
                <div className="h-full w-full flex flex-col gap-6">
                    <div className="w-full flex items-center justify-start gap-4 border-b border-gray-300 pb-6">
                        <div className="photo">
                            <img className="h-12 w-12 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Logo" />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="font-semibold text-xl">Paulo Afonso</h1>
                            <p className="text-lg text-gray-500">Hookie</p>
                        </div>
                    </div>
                    <nav className="w-full flex flex-col items-start justify-center gap-7 border-b border-b-gray-300 pb-6">
                        <li onClick={() => setActiveSection(0)} className={activeSection == 0 ? "selected" : ""}>
                            <MdDashboard />
                            <span>Dashboard</span>
                        </li>
                        <li onClick={() => setActiveSection(1)} className={activeSection == 1 ? "selected" : ""}>
                            <BoxIcon />
                            <span>Produtos</span>
                        </li>
                        <li onClick={() => setActiveSection(2)} className={activeSection == 2 ? "selected" : ""}>
                            <MdOutlineRestaurantMenu />
                            <span>Catálogos</span>
                        </li>
                        <li onClick={() => setActiveSection(3)} className={activeSection == 3 ? "selected" : ""}>
                            <FaUserFriends />
                            <span>Usuários</span>
                        </li>
                    </nav>
                </div>
            </div>
            <div className="content-wrapper flex items-center justify-center flex-col w-full h-full bg-background">
                <div className="header-content w-full bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-xl">{sectionsMap[activeSection].name}</h1>
                        <p className="text-gray-500">{sectionsMap[activeSection].description}</p>
                    </div>
                    {
                        activeSection == 0 && (
                            <div className="flex gap-4 items-center justify-center">
                                <p className="text-gray-500">Filtrar de:</p>
                                <Input type="datetime-local" value={formatDateForInput(firstDateOfMonth)} />
                                <p>Até:</p>
                                <Input type="datetime-local" value={formatDateForInput(lastDateOfMonth)} />
                            </div>
                        )
                    }
                </div>
                <div className="content w-full h-full p-4">
                    {sectionsMap[activeSection].component}
                </div>
            </div>
        </div>
    )
}