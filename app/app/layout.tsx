export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

function Header() {
    return (
        <div className="border-b-border w-full border-b">
            <header className="mx-auto h-12 w-full max-w-5xl px-4">
                https://next16-calendar.vercel.app/calendar/2026-07-25
            </header>
        </div>
    );
}
