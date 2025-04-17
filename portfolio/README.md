# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🌟 My Portfolio (React + Vite + TailwindCSS)

This is my personal portfolio built using **React**, **Vite**, and **TailwindCSS**.  
It showcases my projects, skills, and contact information in a clean, responsive layout.

---

##  Project Setup

```bash
# 1. Clone the repository
git clone https://github.com/prabhakar2k23/Portfolio

# 2. Go to the project folder
cd portfolio

# 3. Install dependencies
npm install

# 4. Install TailwindCSS (if you're setting it up manually)
npm install tailwindcss @tailwindcss/vite

# Add in your vite.config.js file
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

# 6. Add Tailwind to your CSS file (src/index.css or main.css)
@import "tailwindcss";

# 7. Start development server
npm run dev

