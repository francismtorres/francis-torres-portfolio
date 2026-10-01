# Francis Torres - React Portfolio

Personal portfolio website built with **React 19**, **React Router** and **Vite** for COMP229 - Web Application Development (Assignment 1).

## Pages
| Route | Page | Highlights |
|-------|------|-----------|
| `/` | Home | Welcome message, call-to-action buttons, mission statement, project preview |
| `/about` | About Me | Legal name, headshot, short bio, PDF resume link, skills |
| `/projects` | Projects | 4 projects with images, role and outcome |
| `/education` | Education | Credentials with dates and status |
| `/services` | Services | 5 illustrated service cards |
| `/contact` | Contact Me | Contact panel + validated form that redirects to Home |

A custom SVG hexagon "FT" logo sits in the navigation bar (`src/components/Logo.jsx`).

## Getting started
```bash
npm install
npm run dev      # local development server
npm run lint     # ESLint
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Project structure
```
public/            static files: images, resume PDF, favicon
src/
  components/      Navbar, Logo, Footer, PageHeader, ScrollToTop
  pages/           Home, About, Projects, Education, Services, Contact, NotFound
  data/            portfolioData.js - all editable site content
  styles/          main.css - design tokens and layout
```
All text content lives in `src/data/portfolioData.js`, so updating the site never requires editing layout code.

## Deployment
Single-page-app rewrites are pre-configured for both hosts (`vercel.json`, `netlify.toml`).

- **Vercel:** Import the GitHub repo -> framework preset *Vite* -> Deploy.
- **Netlify:** "Add new site" -> Import from Git -> build command `npm run build`, publish directory `dist`.
