import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeProvider() {
    const [theme, setTheme] = useState(() =>
        localStorage.getItem("theme") || "light"
    )

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === "dark" ? "light" : "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 border rounded-lg border-border text-foreground bg-background focus:outline-none"
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </button>
    )
}
