import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ThemeProvider from "@/components/theme-provider"

function App() {
    return (
        <div className="container mx-auto pt-5 pb-5 px-5 sm:px-0 sm:pt-10">
            <section className="flex justify-end w-full pb-2">
                <ThemeProvider />
            </section>

            <section className="pb-5 sm:pb-7">
                <header className="text-left sm:text-center">
                    <h1 className="text-3xl font-bold">Korean Number Systems</h1>
                </header>
            </section>

            <NumberSystem />

            <section>
                <footer className="pt-5 sm:pt-7">
                    <div className="container">
                        <p className="text-muted-foreground text-sm text-center">
                            This website is designed for educational purposes only. All content is meant to help students learn and explore new concepts.
                        </p>
                    </div>
                </footer>
            </section>
        </div>
    )
}

function NumberSystem() {
    const native_lists = [
        "hours",
        "counting people / animal / things",
        "age",
        "counting out loud",
        "number of times on action is performed"
    ]

    const native_examples = [
        "사과 다섯 개",
        "물 네 병",
        "사과 한 개 있어요",
        "지금은 아홉 시입니다",
        "우리 강아지는 일곱 살이에요",
    ]

    const sino_lists = [
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
    ]

    const sino_examples = [
        "오 분만 기다려줄래?",
        "오늘 최고 온도는 영상 칠 도입니다",
        "십 킬로미터를 달려본 적 있어요?",
        "이천이십사 년 이 월 십오 일 (2024년 2월 5일)",
        "010-1234-5678 is 공일공 일이삼사 오육칠팔",
    ]

    return (
        <div className="flex flex-col sm:flex-row gap-5">
            <Card className="w-full sm:w-1/2">
                <CardHeader>
                    <CardTitle className="text-2xl">Native system</CardTitle>
                    <CardDescription>하나, 돌, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                    <section>
                        <div className="font-semibold leading-none tracking-tight">Used for</div>
                        <ul className="list-disc text-sm text-muted-foreground pl-6 mt-2 grid grid-cols-2 gap-2">
                            {native_lists.map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <div className="font-semibold leading-none tracking-tight">Examples</div>
                        <ul className="list-decimal text-sm text-muted-foreground pl-6 mt-2">
                            {native_examples.map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                    </section>
                </CardContent>
            </Card>
            <Card className="w-full sm:w-1/2">
                <CardHeader>
                    <CardTitle className="text-2xl">Sino system</CardTitle>
                    <CardDescription>일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                    <section>
                        <div className="font-semibold leading-none tracking-tight">Used for</div>
                        <ul className="list-disc text-sm text-muted-foreground pl-6 mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {sino_lists.map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <div className="font-semibold leading-none tracking-tight">Examples</div>
                        <ul className="list-decimal text-sm text-muted-foreground pl-6 mt-2">
                            {sino_examples.map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                    </section>
                </CardContent>
            </Card>
        </div>
    )
}

export default App
