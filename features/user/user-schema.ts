import { z } from "zod/mini";

export const getStartedSchema = z.object({
    email: z.email({ error: "Provide a valid email address" }),
});

export type GetStartedSchema = z.infer<typeof getStartedSchema>;
