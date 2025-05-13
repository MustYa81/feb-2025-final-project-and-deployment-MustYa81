
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Form submission success (simulated)
    setFormSubmitted(true);
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Our team is here to help.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Support</CardTitle>
                <CardDescription>Get help with your order or products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Email:</strong> support@solemate.com</p>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                  <p><strong>Hours:</strong> Mon-Fri, 9am-6pm EST</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Inquiries</CardTitle>
                <CardDescription>For partnerships and wholesale</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Email:</strong> business@solemate.com</p>
                  <p><strong>Phone:</strong> (555) 987-6543</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visit Us</CardTitle>
                <CardDescription>Our headquarters location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>123 Footwear Avenue</p>
                  <p>Suite 456</p>
                  <p>New York, NY 10001</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
                    <h3 className="text-lg font-medium text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">What are your shipping rates?</h3>
              <p>We offer free standard shipping on all orders over $50 within the United States. For orders under $50, a flat shipping rate of $5.99 applies. International shipping rates vary based on location.</p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">How do I return a product?</h3>
              <p>We accept returns within 30 days of purchase. Items must be unworn with original tags attached. To start a return, log into your account and follow the return instructions, or contact our customer support team.</p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">How do I track my order?</h3>
              <p>Once your order ships, you'll receive a confirmation email with tracking information. You can also log into your account to view order status and tracking details.</p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Do you offer size exchanges?</h3>
              <p>Yes, if you need a different size, you can request an exchange within 30 days of purchase. Please note the new size must be in stock to process an exchange. Otherwise, we'll process a return and you can place a new order.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
