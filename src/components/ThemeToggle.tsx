import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const toggleTheme = () => {
        const newScheme = dark ? 'light' : 'dark';
        setColorScheme(newScheme);
        document.documentElement.classList.toggle('dark', newScheme === 'dark');
    }
    return (
        <ActionIcon onClick={toggleTheme}>
            {dark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </ActionIcon>
    )
}