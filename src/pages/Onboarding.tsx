import { Stepper } from "@mantine/core";
import { useState } from "react";
import VerifyEmail from "./sections-onboarding/VerifyEmail";
import Plans from "./sections-onboarding/Plans";

export default function Onboarding() {
    const [stepActive, setStepActive] = useState(1);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center justify-center w-full h-full max-w-[86%] md:max-w-[75%]">
                <div className="w-full">
                    <Stepper
                        active={stepActive}
                        onStepClick={setStepActive}
                        allowNextStepsSelect={false}
                        styles={{
                            steps: {
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "20px",
                            },
                            step: {
                                display: "flex",
                                alignItems: "center"
                            },
                            stepIcon: {
                                marginBottom: "8px",
                            }
                        }}
                    >
                        <Stepper.Step label="Confirmação" description="Verifique seu email" />
                        <Stepper.Step label="Plano" description="Escolha seu plano" />
                    </Stepper>
                </div>
                <div className="w-full transition-all duration-300 ease-in-out h-[80%]">
                    {stepActive == 0 && <VerifyEmail setStepActive={setStepActive} />}
                    {stepActive == 1 && <Plans />}
                </div>
            </div>
        </div>
    );
}