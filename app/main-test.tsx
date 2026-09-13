"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function MainTest() {
    const { data, isPending } = authClient.useSession();

    return (
        <div className="bg-foreground flex flex-1 flex-col items-center justify-center font-sans">
            <main className="h-full w-full flex-1">
                <Button type="button" onClick={() => alert("Hello")}>
                    Click me
                </Button>
                {isPending ? (
                    <p className="text-white">Loading...</p>
                ) : (
                    <div className="text-white">
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )}
            </main>
        </div>
    );
}
