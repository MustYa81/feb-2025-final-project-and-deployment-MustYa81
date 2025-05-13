
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getNewArrivals, getBestSellers, Product } from '@/data/products';
import { ChevronRight, ArrowRight } from 'lucide-react';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className="overflow-hidden hover-scale">
      <CardContent className="p-0">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full aspect-square object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.brand}</p>
              </div>
              <div className="flex flex-col items-end">
                {product.discountPrice ? (
                  <>
                    <span className="text-muted-foreground line-through text-sm">${product.price}</span>
                    <span className="font-medium text-primary">${product.discountPrice}</span>
                  </>
                ) : (
                  <span className="font-medium">${product.price}</span>
                )}
              </div>
            </div>
            <div className="mt-2 flex gap-1">
              {product.isNew && (
                <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">New</Badge>
              )}
              {product.isBestSeller && (
                <Badge variant="default" className="bg-orange-500 hover:bg-orange-600">Best Seller</Badge>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

const CategoryCard: React.FC<{ title: string; image: string; link: string }> = ({ title, image, link }) => {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <Link to={link}>
        <div className="aspect-[4/5]">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
          <h3 className="font-medium text-xl text-white mb-2">{title}</h3>
          <Button variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/50 hover:bg-white/30 w-fit">
            Shop Now <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </Link>
    </div>
  );
};

const Index = () => {
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1758&auto=format&fit=crop" 
          alt="Hero Banner" 
          className="w-full h-[70vh] object-cover"
        />
        <div className="container mx-auto px-4 absolute inset-0 z-20 flex flex-col justify-center items-start">
          <div className="max-w-xl animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Step Into Style and Comfort</h1>
            <p className="text-lg text-white/90 mb-6">Discover our new collection of premium shoes designed for performance and everyday elegance.</p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20" asChild>
                <Link to="/collections">Explore Collections</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryCard
              title="Men's Collection"
              image="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=774&auto=format&fit=crop"
              link="/products?category=men"
            />
            <CategoryCard
              title="Women's Collection"
              image="https://images.unsplash.com/photo-1581017316471-1f6ef5a5232d?q=80&w=774&auto=format&fit=crop"
              link="/products?category=women"
            />
            <CategoryCard
              title="Sport & Performance"
              image="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=842&auto=format&fit=crop"
              link="/products?type=sport"
            />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/products?filter=new" className="text-primary hover:underline flex items-center">
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Summer Sale</h2>
              <p className="text-xl mb-6">Get up to 40% off on selected items</p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/products?sale=true">Shop the Sale</Link>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <img 
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1025&auto=format&fit=crop" 
                alt="Summer Sale" 
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Best Sellers</h2>
            <Link to="/products?filter=best-seller" className="text-primary hover:underline flex items-center">
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Subscribe to our newsletter to receive updates on new arrivals, special offers and other information.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
