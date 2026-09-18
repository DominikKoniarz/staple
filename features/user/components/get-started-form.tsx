"use client";

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
import { RiLoader3Line } from "@remixicon/react";

export default function GetStartedForm() {
    const { form } = useGetStartedForm();

    return (
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
    );
}

export function GetStartedFormSkeleton() {
    return (
        <div className="w-full space-y-6">
            <div className="flex flex-col gap-2">
                <Skeleton className="h-[16.5px] w-8" />
                <Skeleton className="h-8 w-full" />
            </div>
            <Skeleton className="h-8 w-full" />
        </div>
    );
}
