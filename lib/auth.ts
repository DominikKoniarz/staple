import { db } from "@/lib/db";
import * as schema from "@/lib/db/auth-schema";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { betterAuth } from "better-auth/minimal";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema,
    }),
    advanced: {
        database: {
            joins: true,
        },
    },
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 30, // 30 seconds
        },
    },
});
