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
            <GetStartedForm />
        </main>
    );
}
