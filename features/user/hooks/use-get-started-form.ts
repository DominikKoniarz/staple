import { getStartedSchema } from "@/features/user/user-schema";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import type { Route } from "next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useGetStartedForm = () => {
    const router = useRouter();

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
                        router.push("/app");
                    },
                },
            });
        },
    });

    return { form };
};

export default useGetStartedForm;
