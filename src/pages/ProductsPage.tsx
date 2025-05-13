
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Product, products } from '@/data/products';
import { ChevronDown } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  const categoryParam = searchParams.get('category');
  const typeParam = searchParams.get('type');
  const sortParam = searchParams.get('sort') || 'newest';

  // Filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    typeParam ? [typeParam] : []
  );

  // Effect to apply filters
  useEffect(() => {
    let filtered = [...products];

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    // Apply type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(product => 
        selectedTypes.includes(product.type)
      );
    }

    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortParam) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        // Assuming newest are marked with isNew
        filtered.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, selectedTypes, priceRange, sortParam]);

  // Handle category toggle
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Handle type toggle
  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  // Handle sorting change
  const handleSortChange = (value: string) => {
    searchParams.set('sort', value);
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Shop All Footwear</h1>
        <p className="text-muted-foreground mb-6">
          Discover our collection of high-quality shoes for every occasion.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filters toggle */}
          <div className="md:hidden w-full mb-4">
            <Button 
              variant="outline" 
              className="w-full flex justify-between"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              <span>Filters & Sort</span>
              <ChevronDown size={16} className={`transition-transform ${filtersVisible ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {/* Filters */}
          <div className={`${filtersVisible ? 'block' : 'hidden'} md:block md:w-1/4`}>
            <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-4">Sort By</h3>
              <Select value={sortParam} onValueChange={handleSortChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="men" 
                    checked={selectedCategories.includes('men')} 
                    onCheckedChange={() => handleCategoryToggle('men')}
                  />
                  <Label htmlFor="men" className="cursor-pointer">Men's</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="women" 
                    checked={selectedCategories.includes('women')} 
                    onCheckedChange={() => handleCategoryToggle('women')}
                  />
                  <Label htmlFor="women" className="cursor-pointer">Women's</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="unisex" 
                    checked={selectedCategories.includes('unisex')} 
                    onCheckedChange={() => handleCategoryToggle('unisex')}
                  />
                  <Label htmlFor="unisex" className="cursor-pointer">Unisex</Label>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-4">Types</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="casual" 
                    checked={selectedTypes.includes('casual')} 
                    onCheckedChange={() => handleTypeToggle('casual')}
                  />
                  <Label htmlFor="casual" className="cursor-pointer">Casual</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="sport" 
                    checked={selectedTypes.includes('sport')} 
                    onCheckedChange={() => handleTypeToggle('sport')}
                  />
                  <Label htmlFor="sport" className="cursor-pointer">Sport</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="formal" 
                    checked={selectedTypes.includes('formal')} 
                    onCheckedChange={() => handleTypeToggle('formal')}
                  />
                  <Label htmlFor="formal" className="cursor-pointer">Formal</Label>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Price Range</h3>
                <span>${priceRange[0]} - ${priceRange[1]}</span>
              </div>
              <Slider
                defaultValue={[0, 200]}
                max={200}
                step={10}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="mb-4"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover-scale">
                    <Link to={`/products/${product.id}`}>
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{product.name}</h3>
                              <p className="text-muted-foreground text-sm">{product.brand}</p>
                              <div className="mt-1 space-x-1">
                                <Badge variant="secondary">{product.category}</Badge>
                                <Badge variant="secondary">{product.type}</Badge>
                              </div>
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
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your filters to find what you're looking for.</p>
                  <Button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedTypes([]);
                      setPriceRange([0, 200]);
                      searchParams.delete('sort');
                      setSearchParams(searchParams);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
