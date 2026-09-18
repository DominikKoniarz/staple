"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogOut() {
    const router = useRouter();

    return (
        <Button
            type="button"
            onClick={() =>
                authClient.signOut({
                    fetchOptions: {
                        onSuccess() {
                            router.refresh();
                        },
                    },
                })
            }
        >
            Sign out
        </Button>
    );
}
