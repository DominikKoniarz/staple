import { magicLinkClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    plugins: [magicLinkClient()],
});

// type ErrorTypes = Partial<
//     Record<
//         keyof typeof authClient.$ERROR_CODES,
//         {
//             en: string;
//         }
//     >
// >;

// const errorCodes = {
//     USER_NOT_FOUND: {
//         en: "Slow down! Try again in a minute.",
//     },
// } satisfies ErrorTypes;

// export const getErrorMessage = (code: string, lang: "en" = "en") => {
//     if (code in errorCodes) {
//         return errorCodes[code as keyof typeof errorCodes][lang];
//     }

//     return "Something went wrong. Please try again later.";
// };
