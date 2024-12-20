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
            className="p-2 border rounded-md bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 focus:outline-none"
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </button>
    )
}
