import { createEnv } from "@t3-oss/env-core";
import { z } from "zod/mini";

export const env = createEnv({
    clientPrefix: "NEXT_PUBLIC_",

    server: {
        BETTER_AUTH_SECRET: z.string(),
        BETTER_AUTH_URL: z.url(),

        DATABASE_URL: z.url(),
    },

    client: {},

    runtimeEnv: process.env,

    emptyStringAsUndefined: true,
});
