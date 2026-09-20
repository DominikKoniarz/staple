import { timestamp, uuid } from "drizzle-orm/pg-core";

export const timestamps = {
    createdAt: timestamp("created_at", { withTimezone: true })
        .defaultNow()
        .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
        .$onUpdate(() => new Date())
        .notNull(),
};

export const primaryKey = () => {
    return uuid("id")
        .primaryKey()
        .$defaultFn(() => Bun.randomUUIDv7());
};
