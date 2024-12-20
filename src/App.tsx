import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ThemeProvider from "@/components/theme-provider"
import React, { useState, createContext, useContext } from "react"

// define available language
type Language = "en" | "pl"

// define structure for translations
interface Translations {
    // topic
    topic: string

    // native system
    nativeTitle: string
    nativeLists: string[]
    nativeExamples: string[]

    // sino system
    sinoTitle: string
    sinoLists: string[]
    sinoExamples: string[]

    // others
    usedFor: string
    examplesTitle: string
    footerDescription: string
}

const translations: Record<Language, Translations> = {
    en: {
        // topic
        topic: "Korean Number Systems",

        // native system
        nativeTitle: "Native system",
        nativeLists: [
            "hours",
            "counting people / animal / things",
            "age",
            "counting out loud",
            "number of times an action is performed"
        ],
        nativeExamples: [
            "사과 다섯 개",
            "물 네 병",
            "사과 한 개 있어요",
            "지금은 아홉 시입니다",
            "우리 강아지는 일곱 살이에요"
        ],

        // sino system
        sinoTitle: "Sino system",
        sinoLists: [
            "years",
            "months",
            "minutes",
            "seconds",
            "height",
            "weight",
            "building floors",
            "room numbers",
            "telephone numbers",
            "address",
            "prices",
            "temperatures",
            "bus routes",
            "money",
            "number higher than 99"
        ],
        sinoExamples: [
            "오 분만 기다려줄래?",
            "오늘 최고 온도는 영상 칠 도입니다",
            "십 킬로미터를 달려본 적 있어요?",
            "이천이십사 년 이 월 십오 일 (2024년 2월 5일)",
            "010-1234-5678 is 공일공 일이삼사 오육칠팔"
        ],

        // others
        usedFor: "Used for",
        examplesTitle: "Examples",
        footerDescription: "This website is designed for educational purposes only. All content is meant to help students learn and explore new concepts."
    },
    pl: {
        // topic
        topic: "Koreańskie Systemy Liczbowe",

        // native system
        nativeTitle: "System natywny",
        nativeLists: [
            "godziny",
            "liczenie ludzi / zwierząt / rzeczy",
            "wiek",
            "liczenie na głos",
            "ilość razy, jakieś działanie jest wykonywane"
        ],
        nativeExamples: [
            "사과 다섯 개",
            "물 네 병",
            "사과 한 개 있어요",
            "지금은 아홉 시입니다",
            "우리 강아지는 일곱 살이에요"
        ],

        // sino system
        sinoTitle: "System sino",
        sinoLists: [
            "lata",
            "miesiące",
            "minuty",
            "sekundy",
            "wzrost",
            "waga",
            "piętra budynku",
            "numery pokoi",
            "numery telefonów",
            "adres",
            "ceny",
            "temperatury",
            "trasy autobusów",
            "pieniądze",
            "liczby większe niż 99"
        ],
        sinoExamples: [
            "오 분만 기다려줄래?",
            "오늘 최고 온도는 영상 칠 도입니다",
            "십 킬로미터를 달려본 적 있어요?",
            "이천이십사 년 이 월 십오 일 (2024년 2월 5일)",
            "010-1234-5678 is 공일공 일이삼사 오육칠팔"
        ],

        // others
        usedFor: "Używane do",
        examplesTitle: "Przykłady",
        footerDescription: "Ta strona internetowa została stworzona wyłącznie w celach edukacyjnych. Cała zawartość ma na celu pomóc uczniom w nauce i odkrywaniu nowych koncepcji."
    }
}

// define context type
interface LanguageContextType {
    language: Language
    setLanguage: React.Dispatch<React.SetStateAction<Language>>
}

// create typed context
const LanguageContext = createContext<{
    language: Language
    setLanguage: React.Dispatch<React.SetStateAction<Language>>
} | undefined>(undefined)

// language provider component
const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en')

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext)
    if (!context) { throw new Error("useLanguage must be used within a LanguageProvider") }

    return context
}

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage()
    const handleChange = (value: string): void => { setLanguage(value as "en" | "pl") }

    return (
        <Select value={language} onValueChange={handleChange}>
            <SelectTrigger className="w-32">
                <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pl">Polski</SelectItem>
            </SelectContent>
        </Select>
    )
}

const NumberSystem: React.FC = () => {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <div className="flex flex-col sm:flex-row gap-5">
            <Card className="w-full sm:w-1/2">
                <CardHeader>
                    <CardTitle className="text-2xl">{t.nativeTitle}</CardTitle>
                    <CardDescription>하나, 돌, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                    <section>
                        <div className="font-semibold leading-none tracking-tight">{t.usedFor}</div>
                        <ul className="list-disc text-sm text-muted-foreground pl-6 mt-2 grid grid-cols-2 gap-2">
                            {t.nativeLists.map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <div className="font-semibold leading-none tracking-tight">{t.examplesTitle}</div>
                        <ul className="list-decimal text-sm text-muted-foreground pl-6 mt-2">
                            {t.nativeExamples.map((example, index) => (
                                <li key={index}>{example}</li>
                            ))}
                        </ul>
                    </section>
                </CardContent>
            </Card>
            <Card className="w-full sm:w-1/2">
                <CardHeader>
                    <CardTitle className="text-2xl">{t.sinoTitle}</CardTitle>
                    <CardDescription>일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                    <section>
                        <div className="font-semibold leading-none tracking-tight">{t.usedFor}</div>
                        <ul className="list-disc text-sm text-muted-foreground pl-6 mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {t.sinoLists.map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <div className="font-semibold leading-none tracking-tight">{t.examplesTitle}</div>
                        <ul className="list-decimal text-sm text-muted-foreground pl-6 mt-2">
                            {t.sinoExamples.map((exmaple, index) => (
                                <li key={index}>{exmaple}</li>
                            ))}
                        </ul>
                    </section>
                </CardContent>
            </Card>
        </div>
    )
}

const MenuBar: React.FC = () => {
    return (
        <section className="flex justify-between content-center w-full pb-2">
            <ThemeProvider />
            <LanguageSwitcher />
        </section>
    )
}

const Header: React.FC = () => {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <section className="pb-5 sm:pb-7">
            <header className="text-left sm:text-center">
                <h1 className="text-3xl font-bold">{t.topic}</h1>
            </header>
        </section>
    )
}

const Footer: React.FC = () => {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <section>
            <footer className="pt-5 sm:pt-7">
                <div className="container">
                    <p className="text-muted-foreground text-sm text-center">
                        {t.footerDescription}
                    </p>
                </div>
            </footer>
        </section>
    )
}

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <div className="container mx-auto pt-5 pb-5 px-5 sm:px-0 sm:pt-10">
                <MenuBar />

                <Header />

                <NumberSystem />

                <Footer />
            </div>
        </LanguageProvider>
    )
}

export default App
