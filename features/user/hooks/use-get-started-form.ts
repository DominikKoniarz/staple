import { getStartedSchema } from "@/features/user/user-schema";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import type { Route } from "next";
import { useState } from "react";
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
            await authClient.signIn.magicLink({
                email: value.email,
                callbackURL: "/app" satisfies Route,
                fetchOptions: {
                    onError() {
                        toast.error(
                            "Something went wrong. Please try again later.",
                        );
                    },
                    onSuccess() {
                        setMagicLinkSent(true);
                    },
                },
            });
        },
    });

    const reset = () => {
        form.reset({ email: "" });
        setMagicLinkSent(false);
    };

    return { form, magicLinkSent, reset };
};

export default useGetStartedForm;
