"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="h-full w-full flex-1 bg-pink-500">
                <Button type="button" onClick={() => alert("Hello")}>
                    Click me
                </Button>
            </main>
        </div>
    );
}
