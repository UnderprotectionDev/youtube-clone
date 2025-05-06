# YouTube Clone 📺

<!-- Start Generation Here -->
<p>A full-stack YouTube clone application built with Next.js. Features include video upload, playback, user authentication, and more, powered by a modern tech stack.</p>
<!-- End Generation Here -->

![Home](/public/readme-images/home.png)

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Mux](https://img.shields.io/badge/Mux-000000?style=for-the-badge&logo=mux&logoColor=white)](https://mux.com/)
[![Neon](https://img.shields.io/badge/Neon-39A372?style=for-the-badge&logo=neondatabase&logoColor=white)](https://neon.tech/)
[![tRPC](https://img.shields.io/badge/tRPC-2596BE?style=for-the-badge&logo=trpc&logoColor=white)](https://trpc.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Uploadthing](https://img.shields.io/badge/Uploadthing-F54C00?style=for-the-badge&logo=uploadthing&logoColor=white)](https://uploadthing.com/)
[![Upstash](https://img.shields.io/badge/Upstash-00E9A3?style=for-the-badge&logo=upstash&logoColor=black)](https://upstash.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

## ✨ Features

<div align="center">

| Feature                     | Description                                                               |
| --------------------------- | ------------------------------------------------------------------------- |
| 🔐 User Authentication      | Secure sign-up and sign-in powered by Clerk.                              |
| ⬆️ Video Uploads            | Seamless video uploading using Mux.                                       |
| ▶️ Video Playback           | High-quality video streaming and playback via Mux.                        |
| 📂 Video Management         | Manage uploaded videos.                                                   |
| ⚡️ Real-time Functionality | Potential for real-time updates (e.g., views, likes) using relevant tech. |
| 🚀 Scalable Backend         | Efficient data handling with Neon database and Drizzle ORM.               |
| 🛠️ Type-Safe API            | End-to-end type safety with tRPC and SuperJSON.                           |
| 🎨 Modern UI                | Built with Shadcn/ui components and styled with Tailwind CSS.             |
| 📱 Responsive Design        | Optimized for various screen sizes using Tailwind CSS and UI components.  |
| ⚙️ Rate Limiting            | Protect backend resources using Upstash Rate Limiting and Redis.          |
| 📊 Data Fetching/Caching    | Efficient data management with React Query.                               |
| 📝 Form Handling            | Streamlined form validation and management with React Hook Form and Zod.  |

</div>

## 🌟 Tech Highlights

- User authentication and management with Clerk.
- Video upload, processing, and playback powered by Mux.
- Serverless PostgreSQL database using Neon and Drizzle ORM.
- Type-safe API layer with tRPC and SuperJSON.
- Efficient data fetching and caching with React Query.
- Streamlined form handling and validation using React Hook Form and Zod.
- UI components from Shadcn/ui styled with Tailwind CSS.
- Rate limiting implemented with Upstash Ratelimit and Redis.
- Type safety throughout the application with TypeScript.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/youtube-clone.git

cd youtube-clone

# Install dependencies
bun install
# or
npm install

# Create your environment variables file
cp .env.example .env

# (Optional) Set up Neon database, Mux, Clerk, Uploadthing, Upstash, etc. and populate .env file

# Start the development server (runs dev and webhook concurrently)
bun run dev:all
# or
npm run dev:all
```

Visit [http://localhost:3000](http://localhost:3000) to use the application.

## 🛠️ Tech Stack

<details>
  <summary>Click to expand tech stack details</summary>

### Core Frameworks & Libraries

- **[Next.js](https://nextjs.org/)** - React framework for server-side rendering and static site generation.
- **[React](https://reactjs.org/)** - Library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript.
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation with static type inference.
- **[React Query (TanStack Query)](https://reactquery.tanstack.com/)** - Hooks for fetching, caching and updating asynchronous data in React.
- **[React Hook Form](https://react-hook-form.com/)** - Performant, flexible and extensible forms with easy-to-use validation.

### Backend & API

- **[Neon](https://neon.tech/)** - Serverless PostgreSQL database.
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM for Neon.
- **[tRPC](https://trpc.io/)** - End-to-end type-safe APIs.
- **[SuperJSON](https://github.com/blitz-js/superjson)** - Safe serialization of JavaScript to JSON, used by tRPC.
- **[Mux](https://mux.com/)** - APIs for video infrastructure (upload, processing, playback).
- **[Uploadthing](https://uploadthing.com/)** - Simple file uploads for Next.js.
- **[Upstash Redis](https://upstash.com/redis)** - Serverless Redis for caching, rate limiting, etc.
- **[Upstash Ratelimit](https://upstash.com/ratelimit)** - Serverless rate limiting.
- **[Svix](https://www.svix.com/)** - Webhooks as a service (if used for Mux/Uploadthing callbacks).
- **[@neondatabase/serverless](https://github.com/neondatabase/serverless)** - Serverless driver for Neon.
- **[Drizzle-Zod](https://www.npmjs.com/package/drizzle-zod)** - Zod integration for Drizzle.

### Authentication

- **[Clerk](https://clerk.com/)** - User authentication and management.
- **[@clerk/nextjs](https://clerk.com/docs/references/nextjs)** - Clerk integration for Next.js.

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework.
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built using Radix UI and Tailwind CSS.
- **[Lucide React](https://lucide.dev/)** - Icon library.
- **[Sonner](https://sonner.emilkowal.ski/)** - Toaster component for notifications.
- **[Embla Carousel React](https://www.embla-carousel.com/)** - Feature-rich carousel library.
- **[Input OTP](https://input-otp.codedthemes.com/)** - OTP input component.
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Dark mode and themeing for Next.js.
- **[React Day Picker](https://react-day-picker.js.org/)** - Date picker component.
- **[React Resizable Panels](https://github.com/bvaughn/react-resizable-panels)** - Resizable panel components.
- **[Recharts](https://recharts.org/)** - Composable charting library (if used for analytics/dashboards).
- **[Vaul](https://vaul.emilkowal.ski/)** - Drawer component for React. Used by Shadcn/ui.
- **[Class Variance Authority (cva)](https://cva.style/)** - Utility for managing component variants. Used by Shadcn/ui.
- **[clsx](https://github.com/lukeed/clsx)** - Tiny utility for constructing `className` strings. Used by Shadcn/ui.
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merges Tailwind CSS classes without style conflicts. Used by Shadcn/ui.
- **[TW-Animate-CSS](https://github.com/arshadkm1/tw-animate-css)** - Tailwind CSS animations.

### Development & Deployment

- **[Bun](https://bun.sh/)** / **[npm](https://www.npmjs.com/)** - Package managers.
- **[Concurrenty](https://github.com/open-cli-tools/concurrently)** - Run multiple commands concurrently (e.g., dev server and webhook).
- **[ngrok](https://ngrok.com/)** - Secure introspectable tunnels to localhost (likely for testing webhooks locally).
- **[ESLint](https://eslint.org/)** - Pluggable linting utility.
- **[Prettier](https://prettier.io/)** - Opinionated code formatter (Assumed, standard practice).
- **[Vercel](https://vercel.com/)** - Deployment platform optimized for Next.js.
- **[Tsx](https://github.com/esbuild-kit/tsx)** - Node.js runtime for TypeScript.
- **[Drizzle-Kit](https://orm.drizzle.team/kit)** - Toolkit for Drizzle ORM.
- **[Dotenv](https://github.com/motdotla/dotenv)** - Loads environment variables from a `.env` file.

</details>

## 📸 Screenshots

<div align="center">

### 🔔 Subscribed

![Homepage](/public/readme-images/subscribed.png)

### 🔥 Trending

![Trending](/public/readme-images/trending.png)

### 📜 History

![History](/public/readme-images/history.png)

### ❤️ Liked Video

![Liked Video](/public/readme-images/liked-videos.png)

### 🎶 Playlists

![Playlists](/public/readme-images/playlists.png)

### 📺 Subscription

![Subscription](/public/readme-images/subscription.png)

### 👤 Profile

![Profile](/public/readme-images/profile.png)

### ▶️ Video

![Video](/public/readme-images/video.png)

### 🎬 Video Create

![Video Create](/public/readme-images/video-create.png)

## 🔐 Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables. Refer to the documentation of each service for detailed setup.

| Variable                              | Description                                           | Found In              |
| ------------------------------------- | ----------------------------------------------------- | --------------------- |
| `DATABASE_URL`                        | Connection URL for your Neon PostgreSQL database.     | Neon Dashboard        |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`   | Clerk publishable key for client-side authentication. | Clerk Dashboard       |
| `CLERK_SECRET_KEY`                    | Clerk secret key for server-side authentication.      | Clerk Dashboard       |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`       | Sign-in page URL for Clerk authentication.            | Clerk Dashboard       |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`       | Sign-up page URL for Clerk authentication.            | Clerk Dashboard       |
| `CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | Fallback redirect URL after sign-in.                  | Clerk Dashboard       |
| `CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | Fallback redirect URL after sign-up.                  | Clerk Dashboard       |
| `CLERK_SIGNING_SECRET`                | Clerk signing secret for webhook verification.        | Clerk Dashboard       |
| `UPSTASH_REDIS_REST_URL`              | REST URL for Upstash Redis instance.                  | Upstash Dashboard     |
| `UPSTASH_REDIS_REST_TOKEN`            | REST Token for Upstash Redis instance.                | Upstash Dashboard     |
| `QSTASH_TOKEN`                        | Token for QStash messaging service.                   | QStash Dashboard      |
| `UPSTASH_WORKFLOW_URL`                | URL for Upstash Workflow (if used with QStash).       | Upstash Dashboard     |
| `QSTASH_CURRENT_SIGNING_KEY`          | Current signing key for QStash message verification.  | QStash Dashboard      |
| `QSTASH_NEXT_SIGNING_KEY`             | Next signing key for QStash message verification.     | QStash Dashboard      |
| `MUX_TOKEN_ID`                        | Mux Access Token ID for API authentication.           | Mux Dashboard         |
| `MUX_TOKEN_SECRET`                    | Mux Access Token Secret for API authentication.       | Mux Dashboard         |
| `MUX_WEBHOOK_SECRET`                  | Mux webhook secret for verifying Mux webhooks.        | Mux Dashboard         |
| `UPLOADTHING_TOKEN`                   | API Key for Uploadthing authentication.               | Uploadthing Dashboard |
| `OPENAI_API_KEY`                      | API Key for OpenAI services.                          | OpenAI Dashboard      |
| `NEXT_PUBLIC_APP_URL`                 | Public URL of your application.                       | `.env.local` / Vercel |

```
# Database (Neon/Drizzle)
DATABASE_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
CLERK_SIGNING_SECRET=

# Upstash Redis/Ratelimit
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# QStash
QSTASH_TOKEN=
UPSTASH_WORKFLOW_URL=
QSTASH_CURRENT_SIGNING_KEY=s
QSTASH_NEXT_SIGNING_KEY=

# Mux
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
MUX_WEBHOOK_SECRET=

# Uploadthing
UPLOADTHING_TOKEN=

# OpenAI
OPENAI_API_KEY=

# Application Config
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
