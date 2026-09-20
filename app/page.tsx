import GetStartedForm, {
    GetStartedFormSkeleton,
} from "@/features/user/components/get-started-form";
import { getCurrentUser } from "@/features/user/user-queries";
import { Suspense } from "react";

export default function Home() {
    const userPromise = getCurrentUser();

    return (
        <main className="bg-background grid flex-1 place-items-center p-6">
            <Suspense fallback={<GetStartedFormSkeleton />}>
                <GetStartedForm userPromise={userPromise} />
            </Suspense>
        </main>
    );
}
