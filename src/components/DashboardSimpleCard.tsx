import { JSX } from "react"

interface DashboardSimpleCardProps {
    children: JSX.Element[] | JSX.Element
    className?: string
}
export default function DashboardSimpleCard({
    children,
    className
}: DashboardSimpleCardProps) {
    return (
        <div className={`shadow-sm card ${className}`}>
            <div className={`p-6 flex h-full flex-col items-center justify-evenly w-full gap-7 min-h-[160px] ${className}`}>
                {children}
            </div>
        </div>
    )
}