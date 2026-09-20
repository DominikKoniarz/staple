import { db } from "@/lib/db";
import * as schema from "@/lib/db/auth-schema";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { betterAuth } from "better-auth/minimal";
import { magicLink } from "better-auth/plugins";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema,
    }),
    advanced: {
        database: {
            generateId: () => Bun.randomUUIDv7(),
            joins: true,
        },
    },
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 30, // 30 seconds
        },
    },
    rateLimit: {
        enabled: true,
    },
    plugins: [
        magicLink({
            sendMagicLink: async ({ email, token, url }) => {
                await new Promise((resolve) => setTimeout(resolve, 750));
                console.log(email, token, url);
            },
        }),
    ],
});
