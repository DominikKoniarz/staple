import { getStartedSchema } from "@/features/user/user-schema";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import type { Route } from "next";
import { addTransitionType, startTransition, useState } from "react";
import { toast } from "sonner";

const useGetStartedForm = () => {
    const [magicLinkSent, setMagicLinkSent] = useState(false);

    const form = useForm({
        defaultValues: {
            email: "",
        },
        validators: {
            onSubmit: getStartedSchema,
        },
        onSubmit: async ({ value }) => {
            const { error } = await authClient.signIn.magicLink({
                email: value.email,
                callbackURL: "/app" satisfies Route,
            });

            if (error) {
                toast.error(
                    error.status === 429
                        ? "Slow down! Try again in a minute."
                        : "Something went wrong. Please try again later.",
                );
            } else {
                startTransition(() => {
                    addTransitionType("nav-forward");
                    setMagicLinkSent(true);
                });
            }
        },
    });

    const reset = () => {
        form.reset({ email: "" });

        startTransition(() => {
            addTransitionType("nav-back");
            setMagicLinkSent(false);
        });
    };

    return { form, magicLinkSent, reset };
};

export default useGetStartedForm;
