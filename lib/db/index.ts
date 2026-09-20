import { relations } from "@/lib/db/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { authRelations } from "./auth-schema";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}

export const db = drizzle(process.env.DATABASE_URL, {
    relations: { ...authRelations, ...relations },
});
