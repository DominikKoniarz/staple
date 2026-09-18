"use client";

import { NavBack, NavForward } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import useGetStartedForm from "@/features/user/hooks/use-get-started-form";
import { RiArrowLeftSFill, RiLoader3Line } from "@remixicon/react";

export default function GetStartedForm() {
    const { form, magicLinkSent, reset } = useGetStartedForm();

    if (magicLinkSent) {
        return (
            <NavForward>
                <GetStartedFormSuccess resetForm={reset} />
            </NavForward>
        );
    }

    return (
        <NavBack>
            <GetStartedFormContent form={form} />
        </NavBack>
    );
}

function GetStartedFormContent({
    form,
}: {
    form: ReturnType<typeof useGetStartedForm>["form"];
}) {
    return (
        <div className="w-full max-w-xs space-y-6 pb-2 sm:pb-6">
            <h1 className="w-full text-center text-3xl font-bold">
                Get started with <span className="text-primary">Staple</span>
            </h1>
            <p className="text-muted-foreground w-full text-center text-base">
                Continue with your email
            </p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                }}
                className="w-full space-y-6"
            >
                <FieldGroup>
                    <form.Field
                        name="email"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched &&
                                !field.state.meta.isValid;

                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Email
                                    </FieldLabel>
                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) =>
                                            field.handleChange(e.target.value)
                                        }
                                        aria-invalid={isInvalid}
                                        placeholder="Enter your email"
                                    />
                                    {isInvalid && (
                                        <FieldError
                                            errors={field.state.meta.errors}
                                        />
                                    )}
                                </Field>
                            );
                        }}
                    />
                </FieldGroup>

                <form.Subscribe selector={(state) => state.isSubmitting}>
                    {(isSubmitting) => (
                        <Button
                            type="submit"
                            size="lg"
                            className="relative mx-auto block w-full aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                            aria-disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <RiLoader3Line className="absolute top-1/2 left-1/2 size-4.5 -translate-x-1/2 -translate-y-1/2 animate-spin" />
                            ) : (
                                "Get started"
                            )}
                        </Button>
                    )}
                </form.Subscribe>
            </form>
        </div>
    );
}

function GetStartedFormSuccess({ resetForm }: { resetForm: () => void }) {
    return (
        <div className="w-full max-w-xs space-y-6 pb-2 sm:pb-6">
            <h1 className="w-full text-center text-3xl font-bold">
                Almost <span className="text-primary">there</span>!
            </h1>
            <p className="text-muted-foreground w-full text-center text-base">
                We&apos;ve sent you a magic link to your email. <br />
                Check your inbox.
            </p>
            <Button
                type="button"
                variant="outline"
                className="mx-auto flex items-center gap-1"
                onClick={resetForm}
            >
                <RiArrowLeftSFill /> Try with a different email
            </Button>
        </div>
    );
}

export function GetStartedFormSkeleton() {
    return (
        <div className="bg-background grid flex-1 place-items-center p-6">
            <div className="w-full max-w-xs space-y-6 pb-2 sm:pb-6">
                <div className="mb-6 flex flex-col items-center justify-center gap-2">
                    <Skeleton className="h-8 w-4/5" />
                    <Skeleton className="h-8 w-2/5" />
                </div>
                <Skeleton className="mx-auto mb-6 h-6 w-2/3" />
                <div className="w-full space-y-6">
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-[16.5px] w-8" />
                        <Skeleton className="h-8 w-full" />
                    </div>
                    <Skeleton className="h-8 w-full" />
                </div>
            </div>
        </div>
    );
}
