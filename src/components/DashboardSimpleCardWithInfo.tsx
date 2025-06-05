import DashboardSimpleCard from "./DashboardSimpleCard"

interface DashboardSimpleCardWithInfoProps {
    title: String,
    icon?: React.ReactElement,
    value: String
}

export default function DashboardSimpleCardWithInfo({
    title,
    value
}: DashboardSimpleCardWithInfoProps) {
    return (
        <DashboardSimpleCard>
            <div className="top flex items-center justify-between w-full">
                <h1 className="text-2xl text-gray-500 font-semibold">{title}</h1>
            </div>
            <div className="w-full flex items-end justify-center gap-4">
                <span className="text-primary font-bold text-5xl">{value}%</span>
                <span className="w-full text-gray-500 text-lg">Em relação ao período anterior</span>
            </div>
        </DashboardSimpleCard>
    )
}