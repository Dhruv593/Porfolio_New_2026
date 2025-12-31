/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00f0ff",
          violet: "#a78bfa",
          blue: "#3b82f6",
          pink: "#ec4899",
        },
        lightbg: {
          100: "#f9fafb",
          200: "#f3f4f6",
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(0, 240, 255, 0.5)" },
          to: { boxShadow: "0 0 30px rgba(167, 139, 250, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
