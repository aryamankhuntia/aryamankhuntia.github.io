# Portfolio Application

## Overview

This is a full-stack portfolio application built with React frontend and Express.js backend. The application showcases a professional portfolio with sections for home, about, projects, and contact information. It's designed as a single-page application with smooth scrolling navigation and modern UI components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: Radix UI components with shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ESM (ES Modules)
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based session store using connect-pg-simple

### Development Environment
- **TypeScript**: Strict type checking enabled
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Error Handling**: Runtime error overlay for development
- **Code Quality**: Path aliases for clean imports

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation to sections
2. **Hero Section**: Landing area with call-to-action buttons
3. **About Section**: Personal information and skills showcase
4. **Projects Section**: Portfolio projects with modal details
5. **Contact Section**: Contact information and social links
6. **UI Components**: Complete set of shadcn/ui components for consistent design

### Backend Components
1. **Storage Interface**: Abstracted storage layer with in-memory implementation
2. **Route Handler**: Express route registration system
3. **Development Server**: Vite integration for SSR-like development experience
4. **Database Schema**: User schema with Drizzle ORM and Zod validation

### Data Models
- **User Schema**: Basic user model with id, username, and password fields
- **Validation**: Zod schemas for type-safe data validation
- **Type Safety**: Full TypeScript integration from database to frontend

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Route Processing**: Express server handles API routes with `/api` prefix
3. **Data Storage**: Storage interface abstracts database operations
4. **Response Handling**: JSON responses with proper error handling
5. **State Management**: Client-side state managed by TanStack Query with caching

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **express**: Node.js web framework

### UI Dependencies
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant utilities

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds optimized React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle handles schema migrations

### Environment Configuration
- **DATABASE_URL**: Required PostgreSQL connection string
- **NODE_ENV**: Environment detection (development/production)
- **Port Configuration**: Server listens on environment-specified port

### Production Deployment
- Static assets served from `dist/public`
- Express server serves API routes and fallback to SPA
- Database migrations applied via `drizzle-kit push`

## Recent Changes
- June 30, 2025: Created modern portfolio website with dark mode toggle
- Added responsive navigation with smooth scrolling
- Implemented project showcase with interactive modals
- Added dark/light theme switching capability
- Created customizable sections for about, projects, and contact
- Added comprehensive README with deployment instructions

## Changelog
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.