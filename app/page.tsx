import MainTest from "@/app/main-test";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
    await auth.api.getSession({
        headers: await headers(),
    });

    return <MainTest />;
}
