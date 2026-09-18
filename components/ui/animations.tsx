import { ViewTransition } from "react";

export function NavForward({ children }: { children: React.ReactNode }) {
    return (
        <ViewTransition
            enter={{
                default: "none",
                "nav-forward": "nav-forward",
            }}
            exit={{
                default: "none",
                "nav-back": "nav-back",
            }}
            default="none"
        >
            {children}
        </ViewTransition>
    );
}

export function NavBack({ children }: { children: React.ReactNode }) {
    return (
        <ViewTransition
            enter={{
                default: "none",
                "nav-back": "nav-back",
            }}
            exit={{
                default: "none",
                "nav-forward": "nav-forward",
            }}
            update={{ default: "none" }}
            default="none"
        >
            {children}
        </ViewTransition>
    );
}
