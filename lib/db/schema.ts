import { user } from "@/lib/db/auth-schema";
import { primaryKey, timestamps } from "@/lib/db/columns";
import { defineRelationsPart } from "drizzle-orm";
import { index, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const shoppingList = pgTable(
    "shopping_list",
    {
        id: primaryKey(),
        name: text("name").notNull(),
        userId: text("user_id")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
        ...timestamps,
    },
    (table) => [index("shopping_list_userId_idx").on(table.userId)],
);

export const shoppingListItem = pgTable(
    "shopping_list_item",
    {
        id: primaryKey(),
        shoppingListId: uuid("shopping_list_id")
            .notNull()
            .references(() => shoppingList.id, { onDelete: "cascade" }),
        name: text("name").notNull(),
        quantity: integer("quantity").notNull(),
        ...timestamps,
    },
    (table) => [
        index("shopping_list_item_shoppingListId_idx").on(table.shoppingListId),
    ],
);

export const relations = defineRelationsPart(
    { user, shoppingList, shoppingListItem },
    (r) => ({
        user: {
            shoppingLists: r.many.shoppingList({
                from: r.user.id,
                to: r.shoppingList.userId,
            }),
        },
        shoppingList: {
            user: r.one.user({
                from: r.shoppingList.userId,
                to: r.user.id,
                optional: false,
            }),
            items: r.many.shoppingListItem({
                from: r.shoppingList.id,
                to: r.shoppingListItem.shoppingListId,
            }),
        },
        shoppingListItem: {
            shoppingList: r.one.shoppingList({
                from: r.shoppingListItem.shoppingListId,
                to: r.shoppingList.id,
                optional: false,
            }),
        },
    }),
);
