import LogOut from "@/app/app/log-out";
import { getCurrentUser } from "@/features/user/user-queries";
import { redirect } from "next/navigation";

export default async function Home() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/");
    }

    return (
        <div>
            App <LogOut />
        </div>
    );
}
