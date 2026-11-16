# Souvik Jana — Personal Portfolio

A production-quality developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Forms:** React Hook Form + Zod
- **Email:** Resend (optional)

## 📁 Project Structure

```
src/
├── app/           # Next.js App Router pages
│   ├── page.tsx           # Home
│   ├── services/page.tsx  # Services
│   ├── resume/page.tsx    # Resume
│   ├── work/page.tsx      # Projects
│   ├── contact/page.tsx   # Contact
│   └── api/contact/route.ts  # Contact API
├── components/
│   ├── layout/    # Header, navigation
│   └── home/      # Hero section
├── data/          # Centralized content
│   ├── personal.ts  # ← Edit your info here
│   ├── projects.ts
│   ├── services.ts
│   ├── skills.ts
│   └── resume.ts
└── types/
```

## 🛠️ Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✏️ Personalizing

All personal information lives in `src/data/personal.ts`. Edit that file to update:

- Name, role, bio
- GitHub, LinkedIn, email links
- Resume PDF path

Add your resume PDF to `public/resume/Souvik-Jana-Resume.pdf`.

Add your profile photo to `public/images/profile/profile-placeholder.png`.

## 📧 Contact Form

The contact form works without backend configuration (submissions are logged to the console).

To enable email delivery:

1. Create an account at [resend.com](https://resend.com)
2. Copy `.env.example` to `.env.local`
3. Set `RESEND_API_KEY` and `CONTACT_EMAIL`

## 🏗️ Build

```bash
npm run build
npm start
```
