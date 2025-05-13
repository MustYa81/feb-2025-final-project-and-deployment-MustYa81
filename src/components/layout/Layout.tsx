
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl">SOLE<span className="text-primary">MATE</span></Link>
          
          {isMobile ? (
            <div className="flex items-center gap-4">
              <Link to="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart size={20} />
                </Button>
              </Link>
              <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/" className="w-full">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="w-full">Products</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/about" className="w-full">About Us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/contact" className="w-full">Contact</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <nav className="flex items-center gap-6">
                <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
                <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
              </nav>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Search size={20} />
                </Button>
                <Link to="/cart">
                  <Button variant="ghost" size="icon">
                    <ShoppingCart size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-12">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">SOLEMATE</h3>
              <p className="text-sm text-primary-foreground/80">
                The perfect shoes for every occasion. Quality, comfort, and style all in one place.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="hover:underline">All Products</Link></li>
                <li><Link to="/products?category=men" className="hover:underline">Men's Collection</Link></li>
                <li><Link to="/products?category=women" className="hover:underline">Women's Collection</Link></li>
                <li><Link to="/products?category=sport" className="hover:underline">Sport</Link></li>
                <li><Link to="/products?category=casual" className="hover:underline">Casual</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                <li><Link to="/careers" className="hover:underline">Careers</Link></li>
                <li><Link to="/stores" className="hover:underline">Store Locations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
                <li><Link to="/returns" className="hover:underline">Returns & Exchanges</Link></li>
                <li><Link to="/shipping" className="hover:underline">Shipping Info</Link></li>
                <li><Link to="/size-guide" className="hover:underline">Size Guide</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2025 SOLEMATE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
