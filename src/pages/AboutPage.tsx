
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Separator } from '@/components/ui/separator';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">About SOLEMATE</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Redefining comfort and style since 2010, one step at a time.
        </p>

        {/* Our Story Section */}
        <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="mb-4">
              SOLEMATE began with a simple idea: create shoes that combine exceptional comfort with timeless style. Founded in 2010 by footwear enthusiasts and industry veterans, our company started as a small workshop dedicated to handcrafting premium shoes.
            </p>
            <p className="mb-4">
              What started as a passion project quickly gained recognition for our unwavering commitment to quality and innovative designs. Today, SOLEMATE has grown into a beloved brand with customers worldwide, but our core values remain unchanged.
            </p>
            <p>
              We believe that great shoes should support your journey, wherever it takes you. That's why every pair of SOLEMATE shoes is crafted with meticulous attention to detail, using only the finest materials and construction techniques.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop" 
              alt="Craftsman working on shoes" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </section>

        <Separator className="my-16" />

        {/* Our Values Section */}
        <section className="my-16">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Quality Craftsmanship</h3>
              <p>We never compromise on materials or construction. Every pair of SOLEMATE shoes is built to last, combining traditional craftsmanship with modern technology.</p>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 12h-6.5" />
                  <path d="m12.5 8.5-3.5 3.5 3.5 3.5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Innovative Design</h3>
              <p>We combine timeless aesthetics with forward-thinking design. Our team constantly explores new technologies and materials to create shoes that exceed expectations.</p>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M8 15h8" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Sustainability</h3>
              <p>We're committed to reducing our environmental footprint. From sourcing eco-friendly materials to implementing efficient manufacturing processes, sustainability guides our decisions.</p>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Team Section */}
        <section className="my-16">
          <h2 className="text-3xl font-semibold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop" 
                alt="Team Member" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium">Michael Thompson</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop" 
                alt="Team Member" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium">Sarah Williams</h3>
              <p className="text-muted-foreground">Head of Design</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop" 
                alt="Team Member" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium">David Chen</h3>
              <p className="text-muted-foreground">Production Director</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop" 
                alt="Team Member" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium">Emily Rodriguez</h3>
              <p className="text-muted-foreground">Customer Experience</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-16 py-12 bg-primary text-primary-foreground rounded-lg">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold mb-4">Join the SOLEMATE Family</h2>
            <p className="text-lg mb-8">
              Experience the perfect blend of style, comfort, and quality with SOLEMATE shoes. Step into a world where every step is a statement.
            </p>
            <a href="/products" className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors">
              Shop Now
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
