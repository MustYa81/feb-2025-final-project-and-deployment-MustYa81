import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getProductById } from '@/data/products';
import { ShoppingCart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || '');

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button onClick={() => navigate('/products')}>Return to Shop</Button>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart",
        variant: "destructive"
      });
      return;
    }

    if (!selectedColor) {
      toast({
        title: "Please select a color",
        description: "You need to select a color before adding to cart",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square overflow-hidden rounded-md border-2 ${activeImageIndex === index ? 'border-primary' : 'border-transparent'}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-2 mb-2">
              {product.isNew && <Badge className="bg-blue-500 hover:bg-blue-600">New Arrival</Badge>}
              {product.isBestSeller && <Badge className="bg-orange-500 hover:bg-orange-600">Best Seller</Badge>}
            </div>
            
            <h1 className="text-3xl font-bold mb-1">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{product.brand}</p>
            
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-semibold">${product.discountPrice}</span>
                  <span className="text-lg text-muted-foreground line-through">${product.price}</span>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Save ${(product.price - product.discountPrice).toFixed(2)}
                  </Badge>
                </div>
              ) : (
                <span className="text-2xl font-semibold">${product.price}</span>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <Separator className="my-6" />

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? 'border-primary' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-14"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button size="lg" className="w-full mb-4" onClick={handleAddToCart}>
              <ShoppingCart size={16} className="mr-2" /> Add to Cart
            </Button>

            {/* Product Tabs */}
            <Tabs defaultValue="features" className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="details" className="p-4">
                <p className="mb-4">
                  <span className="font-semibold">Brand:</span> {product.brand}
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Category:</span> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Type:</span> {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                </p>
                <p>
                  <span className="font-semibold">Material:</span> Premium materials designed for comfort and longevity
                </p>
              </TabsContent>
              <TabsContent value="shipping" className="p-4">
                <p className="mb-4">
                  <span className="font-semibold">Free Shipping:</span> On all orders over $50
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Delivery Time:</span> 3-5 business days
                </p>
                <p>
                  <span className="font-semibold">Returns:</span> Free returns within 30 days of purchase
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
