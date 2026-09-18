import { Skeleton } from "@/components/ui/skeleton";
import { GetStartedFormSkeleton } from "@/features/user/components/get-started-form";

export default function Loading() {
    return (
        <div className="bg-background grid flex-1 place-items-center p-6">
            <div className="w-full max-w-xs space-y-6 pb-2 sm:pb-6">
                <div className="mb-6 flex flex-col items-center justify-center gap-2">
                    <Skeleton className="h-8 w-4/5" />
                    <Skeleton className="h-8 w-2/5" />
                </div>
                <Skeleton className="mx-auto mb-6 h-6 w-2/3" />
                <GetStartedFormSkeleton />
            </div>
        </div>
    );
}
