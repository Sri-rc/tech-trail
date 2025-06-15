# MTC Handmade Kitchens - Next.js Application

A modern, high-performance website for MK Handmade Kitchens built with Next.js 15, React 19, and Tailwind CSS v4. Features a responsive design system, performance optimizations, and accessibility-first approach.

## 🏗️ Architecture Overview

This application follows modern React patterns with a focus on performance, maintainability, and developer experience:

- **Framework**: Next.js 15.3.3 with App Router
- **Runtime**: React 19 with Server Components
- **Styling**: Tailwind CSS v4 with custom design tokens
- **TypeScript**: Strict typing throughout
- **Content Management**: Structured JSON-based content system with CMS-ready architecture
- **Performance**: Optimized images, lazy loading, and scroll virtualization

## 🚀 Tech Stack

### Core Technologies

- **Next.js 15.3.3** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type safety and developer experience
- **Tailwind CSS 4.1.10** - Utility-first CSS framework

### Development Tools

- **ESLint 9** - Code linting with Next.js config
- **PostCSS 8** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Utilities

- **clsx** - Conditional className utility
- **tailwind-merge** - Tailwind class merging utility

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page component
├── components/            # React components
│   ├── layouts/          # Layout components (Header, Footer)
│   └── sections/         # Page section components
├── content/              # Content management
│   ├── types.ts         # TypeScript interfaces
│   └── site-content.json # Static content data
├── hooks/               # Custom React hooks
│   └── useScrollDirection.ts # Scroll behavior hook
├── lib/                # Utility libraries
│   └── content-manager.ts # Content fetching logic
└── styles/             # Design system
    ├── tokens/         # Design tokens
    └── utilities/      # CSS utilities
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ (recommended: use `nvm` or `fnm`)
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd tech-trail

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development Server

```bash
# Start development server with Turbopack
npm run dev

# Alternative package managers
yarn dev
pnpm dev
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build & Deployment

```bash
# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🎨 Design System

### Design Tokens

The application uses a comprehensive design token system located in `src/styles/tokens/index.css`:

- **Colors**: Primary gold palette with neutral variants
- **Typography**: Responsive font scales with line heights
- **Spacing**: Consistent spacing scale
- **Components**: Button system with hover states
- **Effects**: Shadows, transitions, and backdrop filters

### CSS Architecture

```css
/* Token-based approach */
--color-primary-gold: #D4B254;
--font-size-base: 1rem;
--button-height: 60px;

/* Responsive typography */
--font-size-xs: 0.75rem;    /* 12px */
--font-size-6xl: 5.5rem;    /* 88px */
```

### Component Styling

- **Utility-first**: Tailwind CSS with custom design tokens
- **Responsive**: Mobile-first responsive design
- **Accessible**: WCAG compliant color contrasts and focus states
- **Performance**: Optimized CSS delivery with PostCSS

## 🏃‍♂️ Performance Optimizations

### Image Optimization

- **Next.js Image**: Automatic optimization and lazy loading
- **Responsive Images**: Multiple breakpoint sizes
- **Format Selection**: WebP/AVIF with fallbacks
- **Priority Loading**: Critical images loaded immediately

### JavaScript Optimization

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Bundle Analysis**: Use `@next/bundle-analyzer`
- **React 19 Features**: Concurrent rendering and Suspense

### Runtime Performance

- **Custom Hooks**: Debounced scroll events (`useScrollDirection`)
- **Memoization**: `useCallback` and `useMemo` for expensive operations
- **Event Listeners**: Passive scroll listeners for better performance
- **Memory Management**: Proper cleanup of timers and listeners

## 🔧 Custom Hooks

### `useScrollDirection`

Advanced scroll detection with performance optimizations:

```typescript
const { scrollDirection, isAtTop } = useScrollDirection({
  threshold: 15,    // Minimum scroll distance
  debounceMs: 10   // Debounce interval (100fps)
});
```

**Features:**

- Debounced scroll events
- Direction change detection
- Threshold-based triggering
- Memory leak prevention

## 📊 Content Management

### CMS-Ready Architecture

The application features a **separated content layer** designed for seamless CMS integration. Content is completely decoupled from components, making it easy to migrate to any headless CMS without changing the codebase structure.

**Key Files:**
- `src/content/site-content.json` - Static content data structure
- `src/lib/content-manager.ts` - Content fetching abstraction layer  
- `next.config.ts` - Configuration for asset optimization

### Structure

Content is managed through a type-safe JSON structure with clear separation of concerns:

```typescript
interface SiteContent {
  header: HeaderContent;
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceContent;
  gallery: GalleryContent;
  footer: FooterContent;
  notFound: notFound;
}
```

### Content Manager

Centralized content fetching with CMS integration points:

```typescript
// Current: Static JSON
const content = await ContentManager.getHeroContent();

// Future: Easy CMS migration
// Just replace the implementation in ContentManager
// Components remain unchanged
```

**CMS Integration Benefits:**

- **Zero Component Changes**: Content layer abstraction means components never need modification
- **Type Safety**: Full TypeScript support for any CMS data structure
- **Easy Migration**: Replace `ContentManager` methods to integrate with Strapi, Contentful, Sanity, etc.
- **Development Ready**: JSON-based development with production CMS flexibility
- **Error Handling**: Built-in fallbacks and error boundaries

### Migration Path to CMS

```typescript
// src/lib/content-manager.ts
static async getSiteContent(): Promise<SiteContent> {
  // Current: Static JSON
  return siteContent as SiteContent
  
  // Future CMS integration:
  // return await cmsClient.getContent('site-content')
  // return await strapiClient.find('site-content')
  // return await contentfulClient.getEntry('siteContent')
}
```

## 🧪 Code Quality

### TypeScript Configuration

- **Strict Mode**: Full type checking enabled
- **Path Mapping**: Clean imports with `@/` alias
- **Interface Documentation**: Comprehensive type definitions

### ESLint Configuration

- **Next.js Rules**: Framework-specific linting
- **React 19 Support**: Latest React patterns
- **Accessibility**: a11y linting rules

### Development Standards

- **Component Composition**: Reusable, composable components
- **Custom Hooks**: Logic extraction and reusability
- **Error Boundaries**: Graceful error handling
- **Performance**: Memoization and optimization patterns

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
npx vercel

# Production deployment
npx vercel --prod
```

### Build Optimization

- **Static Generation**: ISR for dynamic content
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Bundle Splitting**: Optimal chunk sizes
- **Edge Runtime**: Fast global delivery

### Environment Variables

Create `.env.local` for development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📱 Browser Support

- **Modern Browsers**: Chrome 91+, Firefox 90+, Safari 15+
- **Mobile**: iOS Safari 15+, Chrome Mobile 91+
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Accessibility**: WCAG 2.1 AA compliance

## 📈 Performance Monitoring

### Core Web Vitals

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### Monitoring Tools

- **Lighthouse**: Performance auditing
- **Web Vitals**: Real user metrics
- **Bundle Analyzer**: Bundle size analysis

## 🔒 Security

### Best Practices

- **Content Security Policy**: Implemented via Next.js headers
- **Image Optimization**: Prevent malicious image uploads
- **Environment Variables**: Sensitive data protection
- **Dependency Updates**: Regular security updates

## 📚 Learning Resources

### Next.js 15

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Performance Best Practices](https://nextjs.org/docs/pages/building-your-application/optimizing/performance)

### React 19

- [React 19 Features](https://react.dev/blog/2024/04/25/react-19)
- [Concurrent Features](https://react.dev/learn/keeping-components-pure)

### Tailwind CSS v4

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Design Tokens](https://tailwindcss.com/docs/customizing-colors)

---

## 🆘 Troubleshooting

### Common Issues

**Build Errors:**

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript Errors:**

```bash
# Check TypeScript compilation
npx tsc --noEmit
```

**Style Issues:**

```bash
# Rebuild Tailwind CSS
npm run dev
```

### Support

For development questions or issues, please:

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review existing issues in the repository
3. Create a detailed issue with reproduction steps

---

**Built with ❤️ using modern web technologies for optimal performance and developer experience.**
