import { Check } from "lucide-react";
import "../../styles/Plans.css";
import { Badge, Button, Loader } from "@mantine/core";
import { FaSeedling } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { PiTreeEvergreenFill } from "react-icons/pi";
import { useState } from "react";
const iconComponents = {
    FaSeedling: FaSeedling,
    RiPlantFill: RiPlantFill,
    PiTreeEvergreenFill: PiTreeEvergreenFill
};

const plansData = [
    {
        "id": 0,
        "name": "Semente",
        "badge": "30 Dias Grátis",
        "description": "Para iniciar sem custos",
        "price": "R$ 0,00",
        "period": "/30 dias",
        "icon": "FaSeedling",
        "features": [
            "Até 1 catálogo online",
            "Até 2 usuários",
            "Até 30 produtos",
            "Pedidos ilimitados",
            "Links personalizados (.kiwire.com)"
        ]
    },
    {
        "id": 1,
        "name": "Grower",
        "description": "Indicado para negócios de pequeno e médio porte que ainda estão florescendo",
        "price": "R$ 20,99",
        "period": "/mês",
        "icon": "RiPlantFill",
        "features": [
            "Tudo do plano semente",
            "Até 3 catálogos online",
            "Até 10 usuários",
            "Sem limite de produtos",
            "Integração com Whatsapp",
            "Relatórios"
        ]
    },
    {
        "id": 2,
        "name": "Plus",
        "description": "Indicado para negócios já consolidados e com uma vasta gama de clientes",
        "price": "R$ 50,99",
        "period": "/mês",
        "icon": "PiTreeEvergreenFill",
        "features": [
            "Tudo do plano semente e grower",
            "Catálogos onlines ilimitados",
            "Até 50 usuários",
            "Integração com IA",
            "Módulo de promoções",
            "Módulo de cupom"
        ]
    }
]
export default function Plans() {
    const [selectedPlan, setSelectedPlan] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleSelectPlan = (planId: number) => {
        setSelectedPlan(planId);
    };

    const handleSubmit = () => {
        const plan = plansData.find((plan) => plan.id == selectedPlan);
        console.log("Plano selecionado", plan);


    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center gap-2 pb-6">
                <h1 className="text-4xl font-semibold text-primary/70">Escolha seu Plano</h1>
                <p className="text-gray-600 text-lg">Selecione o plano que melhor atende suas necessidades</p>
            </div>
            <div className="w-full h-[80%] flex items-center justify-evenly">
                {plansData.map((plan) => {
                    const IconComponent = iconComponents[plan.icon];
                    return (
                        <div
                            key={plan.id}
                            onClick={() => handleSelectPlan(plan.id)}
                            className={`plan-card overflow-hidden ${selectedPlan == plan.id ? "selected" : ""} relative`}
                        >
                            <div className="top">
                                <div className="flex items-center justify-center w-full">
                                    {IconComponent && <IconComponent className="text-primary" size={"3.7rem"} />}
                                </div>
                                <div className="flex flex-col w-full items-start mb-4">
                                    <h1 className="flex items-center justify-center gap-4">
                                        {plan.name} {plan.badge && <Badge>{plan.badge}</Badge>}
                                    </h1>
                                    <p className="text-gray-600">{plan.description}</p>
                                </div>
                                <div className="flex items-end justify-center price">
                                    <p className="text-3xl">{plan.price}</p>
                                    <span className="text-gray-600 text-xl">{plan.period}</span>
                                </div>
                            </div>
                            <ul>
                                {plan.features.map((feature, index) => (
                                    <li key={index}>
                                        <Check />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button onClick={handleSubmit} variant="gradient">{isLoading ? <Loader size={"sm"} color="#fff" /> : "Confirmar"}</Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}