import React from "react";

export const Styles: React.FC = () => (
    <style jsx global>{`
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        html {
            font-size: 1.125rem;
        }

        html,
        body {
            height: 100%;
            margin: 0;
            width: 100%;
        }

        body {
            background-color: hsl(173deg 50% 80%);
            color: hsl(173deg 50% 20%);
            font-family: sans-serif;
        }
    `}</style>
)