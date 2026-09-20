CREATE TABLE "shopping_list" (
	"id" uuid PRIMARY KEY,
	"name" text NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "shopping_list_item" (
	"id" uuid PRIMARY KEY,
	"shopping_list_id" uuid NOT NULL,
	"name" text NOT NULL,
	"quantity" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE INDEX "shopping_list_userId_idx" ON "shopping_list" ("user_id");--> statement-breakpoint
CREATE INDEX "shopping_list_item_shoppingListId_idx" ON "shopping_list_item" ("shopping_list_id");--> statement-breakpoint
ALTER TABLE "shopping_list" ADD CONSTRAINT "shopping_list_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "shopping_list_item" ADD CONSTRAINT "shopping_list_item_shopping_list_id_shopping_list_id_fkey" FOREIGN KEY ("shopping_list_id") REFERENCES "shopping_list"("id") ON DELETE CASCADE;