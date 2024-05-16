import LocalFont from "next/font/local";

export const InterLocal = LocalFont({
  src: [
    { path: "../public/fonts/Inter-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Inter-Medium.ttf", weight: "500" },
  ],
  preload: true,
  display: "swap",
});
