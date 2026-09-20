import type { User } from "better-auth";
import { useRouter } from "next/navigation";
import { useEffect, useEffectEvent } from "react";

const useRedirectLogged = (user: User | null) => {
    const router = useRouter();

    const effect = useEffectEvent(() => {
        router.push("/app");
    });

    useEffect(() => {
        if (user) {
            effect();
        }
    }, [user]);
};

export default useRedirectLogged;
