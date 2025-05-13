
# SOLEMATE - Premium Footwear E-Commerce Website

![SOLEMATE Logo](https://media.istockphoto.com/id/1308453722/vector/shoes-store-vector-logo-template-footwear-shop-emblem-concept.jpg?s=612x612&w=0&k=20&c=NtX_PYHEmQ_PabLo0d0OKph-bCldHHNfGg0g_Qsir-A=)

## Project Overview

SOLEMATE is a modern e-commerce platform specializing in premium footwear. Built with React, TypeScript, and Tailwind CSS, it offers a seamless shopping experience with responsive design across all devices.

### Key Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Product Catalog**: Browse through a collection of premium footwear
- **Product Details**: Detailed product information with images and specifications
- **User-Friendly Navigation**: Intuitive interface with navigation menu
- **About Page**: Company history, values, and team information
- **Contact Page**: Easy communication with the company
- **Modern UI Components**: Built with shadcn/ui for consistent and stylish components

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router Dom
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui library
- **Icons**: Lucide React
- **State Management**: React hooks and context
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form
- **Toast Notifications**: Sonner for user feedback

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── layout/         # Layout components (header, footer, etc.)
│   └── ui/             # UI components from shadcn/ui
├── data/               # Static data files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── Index.tsx       # Home page
│   ├── NotFound.tsx
│   ├── ProductDetailPage.tsx
│   └── ProductsPage.tsx
└── App.tsx             # Main application component with routing
```

## Pages

### Home Page (Index.tsx)
The landing page showcasing featured products, promotions, and key brand information.

### Products Page (ProductsPage.tsx)
Displays the complete catalog of shoes with filtering and sorting options.

### Product Detail Page (ProductDetailPage.tsx)
Shows detailed information about a specific product, including images, description, pricing, and add-to-cart functionality.

### About Page (AboutPage.tsx)
Presents the company story, values, team members, and brand philosophy.

### Contact Page (ContactPage.tsx)
Provides contact information and a form for customer inquiries.

## Installation and Setup

### Prerequisites
- Node.js (v16 or later)
- npm or yarn package manager

### Local Development

1. Clone the repository:
```sh
git clone <repository-url>
cd solemate
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173/
```

## Deployment

The project is configured for easy deployment on Vercel:

### Building for Production

```sh
npm run build
```

This will create a production-ready build in the `dist` directory.

### Deploying to Vercel

1. Install Vercel CLI (optional):
```sh
npm install -g vercel
```

2. Deploy with Vercel:

#### Option 1: Connect to GitHub repository
1. Push your code to GitHub
2. Import your GitHub repository in Vercel dashboard
3. Vercel will automatically detect the project settings and build configuration

#### Option 2: Deploy using Vercel CLI
```sh
vercel
```

Follow the prompts to complete the deployment.

#### Option 3: Manual deployment
1. Sign up/login to Vercel
2. Create a new project
3. Import your code repository
4. Configure the following settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework Preset: Vite

Vercel will automatically deploy your application and provide a unique URL.

## Environment Variables

If your application requires environment variables, you can configure them in the Vercel dashboard under your project settings.

## Extending the Project

### Adding New Products

To add new products, modify the `src/data/products.ts` file following the existing product structure.

### Creating New Pages

1. Create a new component in the `src/pages` directory
2. Add a new route in `src/App.tsx`
3. Link to your new page from navigation or relevant sections

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the existing color scheme and design patterns
- Ensure responsiveness across different screen sizes

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please reach out through the contact form on the website or email us at contact@solemate-shoes.com.
