# Calaraya - Digital Invitation & Website Platform

A modern digital invitation and website creation platform built with Next.js, featuring a bold Neo-Brutalist design aesthetic.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS 4
- **UI Components:** Radix UI
- **Database:** Supabase
- **Authentication:** NextAuth.js
- **Media Storage:** Cloudinary
- **Form Handling:** React Hook Form + Zod
- **Animations:** Motion (Framer Motion)

## Features Overview

- **Digital Invitation Themes** - Browse and preview customizable invitation templates
- **Website Services** - Portfolio of website and application development services
- **Admin Dashboard** - Manage invitations, themes, and content
- **Authentication** - Secure login and registration system
- **Image Management** - Upload and manage images via Cloudinary
- **Responsive Design** - Mobile-first approach with full responsive support
- **Dark Mode** - Complete dark mode support throughout the application
- **QR Code Generation** - Generate QR codes for invitations
- **Data Export** - Export data to Excel format
- **Form Validation** - Robust form validation with Zod schemas

## Folder Structure

```
├── app/                    # Next.js App Router pages and layouts
│   ├── (admin)/           # Admin dashboard routes (protected)
│   ├── [slug]/            # Dynamic invitation pages
│   ├── api/               # API routes
│   ├── login/             # Authentication pages
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── home/             # Homepage-specific components
│   └── ui/               # Shadcn UI components
├── configs/              # Configuration files
├── context/              # React Context providers
├── data/                 # Static data and constants
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── public/               # Static assets
├── themes/               # Invitation theme templates
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager
- Supabase account (for database)
- Cloudinary account (for image storage)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd einvitaion-cr
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` (or create `.env`)
   - Fill in the required environment variables (see Environment Variables section)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

## Styling & UI

### Neo-Brutalist Design

This project uses a **Neo-Brutalist** design approach characterized by:

- **Bold borders** (3-4px thick) on all interactive elements
- **Sharp edges** with no rounded corners
- **High contrast colors** (black, white, yellow-400 accent)
- **Flat surfaces** without gradients or soft shadows
- **Strong typography** using font-black and uppercase text
- **Intentional spacing** with structured, purposeful layouts

### TailwindCSS

All styling is done using **TailwindCSS utility classes**. The project uses:
- Tailwind v4 with PostCSS
- Custom color palette for Neo-Brutalist aesthetic
- Responsive breakpoints (sm, md, lg, xl)
- Dark mode support via `dark:` variants
- Custom plugins: `tailwind-scrollbar-hide`, `tw-animate-css`

**Key Design Principles:**
- No inline styles
- Utility-first approach
- Mobile-first responsive design
- Consistent spacing and sizing

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

# Next Auth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

# General
NEXT_PUBLIC_APP_URL_PROD=your_production_url
NEXT_PUBLIC_APP_URL_LOCAL=http://localhost:3000
NEXT_PUBLIC_CONTACT_PERSON=whatsapp_number_without_plus
```

**Important:** Never commit `.env` files to version control. Use `.env.example` for reference.

## Build & Production

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Running in Production

```bash
npm run start
```

This starts the Next.js production server on port 3000.

### Deployment

The application can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting platform**

Ensure all environment variables are configured in your deployment platform.

## Project Notes

### Design Decisions

1. **Neo-Brutalist UI** - Chosen for its bold, distinctive aesthetic that stands out from typical modern web designs. The intentionally raw and direct style creates a memorable user experience.

2. **App Router** - Uses Next.js 15 App Router for improved performance, better data fetching, and modern React features (Server Components, Streaming).

3. **Supabase** - Selected for its real-time capabilities, built-in authentication, and PostgreSQL database with a generous free tier.

4. **Radix UI** - Provides accessible, unstyled components that integrate seamlessly with TailwindCSS while maintaining accessibility standards.

### Known Limitations

- **Theme Customization** - Theme templates are pre-built and require code changes for deep customization
- **Image Optimization** - Large images should be optimized before upload to Cloudinary to reduce bandwidth
- **Browser Support** - Optimized for modern browsers (Chrome, Firefox, Safari, Edge). IE11 is not supported.

### Architecture Highlights

- **Server Components** - Leverages React Server Components for improved performance
- **API Routes** - RESTful API endpoints in `app/api/` for data operations
- **Type Safety** - Full TypeScript coverage with strict type checking
- **Form Validation** - Zod schemas ensure data integrity on both client and server
- **Authentication** - Protected routes using NextAuth.js middleware

## Contributing

When contributing to this project:

1. Follow the existing Neo-Brutalist design patterns
2. Use TailwindCSS utility classes (no inline styles)
3. Maintain TypeScript type safety
4. Test on mobile, tablet, and desktop viewports
5. Ensure dark mode compatibility
6. Run `npm run lint` before committing

## License

Private project - All rights reserved.

---

**Built with ❤️ by Calaraya**
