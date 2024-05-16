import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter-regular": "inter-regular",
        "inter-medium": "inter-medium",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
