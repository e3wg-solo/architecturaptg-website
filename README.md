# Topiconic

Professional website template built with Next.js, TypeScript, Tailwind CSS, and modern web technologies.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** with strict mode for type safety
- **Tailwind CSS v4** with custom design system
- **shadcn/ui** component library
- **Framer Motion** for smooth animations
- **Dark/Light theme** with system preference support
- **Responsive design** for all devices
- **Professional structure** ready for development

## 📁 Project Structure

```
topiconic/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── components/         # Component showcase page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/             # Reusable components
│   │   ├── animations/         # Animation components
│   │   ├── layout/             # Header, Footer
│   │   ├── theme/              # Theme system
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/                    # Utility functions
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
└── components.json             # shadcn/ui configuration
```

## 🛠 Available Components

### UI Components (shadcn/ui)
- **Buttons** - Various styles and sizes
- **Cards** - Flexible content containers
- **Forms** - Input, Label, Switch components
- **Navigation** - Dropdown menus
- **Feedback** - Alerts, Badges
- **Layout** - Avatar, Separator

### Custom Components
- **Header** - Responsive navigation with theme toggle
- **Footer** - Brand info and links
- **Animations** - Framer Motion powered animations
- **Theme System** - Dark/light mode with custom colors

### Animation Library
- `FadeInUp` - Fade in from bottom
- `FadeInDown` - Fade in from top
- `ScaleIn` - Scale animation
- `StaggerContainer` / `StaggerItem` - Staggered animations
- `AnimatedButton` - Interactive button with hover effects

## 🎨 Design System

### Color Palette
- **Brand Primary:** `#d7b64c` (Gold)
- **Brand Secondary:** `#d7b64c` (Gold)
- **Brand Accent:** `#d7b64c` (Gold)
- **Success:** `#22c55e` (Green)
- **Warning:** `#f59e0b` (Amber)
- **Destructive:** `#ef4444` (Red)

### Typography
- **Font:** Geist Sans (Primary) / Geist Mono (Code)
- **Scale:** xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Development

### Adding New Components

1. Use shadcn/ui CLI to add components:
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. Custom components go in `src/components/`

3. Follow the existing naming conventions and structure

### Adding New Pages

1. Create page in `src/app/` directory
2. Update navigation in `src/components/layout/header.tsx`
3. Add to footer links if needed

### Styling

- Use Tailwind CSS classes
- Custom colors available via CSS variables
- Theme-aware design with dark/light mode support

## 🔧 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist (Variable)

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Ready for Production

This template is production-ready with:
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Accessibility compliant
- ✅ Type-safe
- ✅ Mobile responsive
- ✅ Clean code structure

## 📦 What's Included

All components and utilities are preserved and ready to use:
- Complete UI component library
- Animation system
- Theme management
- Layout components
- Type definitions
- Build configuration

Start building your next project with this solid foundation!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
