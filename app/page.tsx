import GetStartedForm from "@/features/user/components/get-started-form";
import { getCurrentUser } from "@/features/user/user-queries";
import { redirect } from "next/navigation";

export default async function Home() {
    const user = await getCurrentUser();

    if (user) {
        redirect("/app");
    }

    return (
        <main className="bg-background grid flex-1 place-items-center p-6">
            <div className="w-full max-w-xs space-y-6 pb-2 sm:pb-6">
                <h1 className="w-full text-center text-3xl font-bold">
                    Get started with{" "}
                    <span className="text-primary">Staple</span>
                </h1>
                <p className="text-muted-foreground w-full text-center text-base">
                    Continue with your email
                </p>
                <GetStartedForm />
            </div>
        </main>
    );
}
