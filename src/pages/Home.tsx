
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ChevronRight, 
  Check, 
  ArrowRight, 
  Package, 
  Utensils, 
  WashingMachine, 
  Handshake, 
  ArrowDown, 
  LogIn
} from 'lucide-react';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';

const Home = () => {
  const [email, setEmail] = useState('');
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const services = [
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Item Delivery",
      description: "Fast and reliable package delivery services with real-time tracking and secure handling."
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: "Food Ordering",
      description: "Order delicious meals from local restaurants with quick delivery and special offers."
    },
    {
      icon: <WashingMachine className="h-8 w-8 text-primary" />,
      title: "Laundry Service",
      description: "Convenient laundry pickup and delivery with professional cleaning and care for all fabrics."
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "P2P Marketplace",
      description: "Connect directly with local service providers and buyers in a secure peer-to-peer environment."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col dark">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Nexus Platform
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <Link to="/login">
              <Button>
                <LogIn className="mr-2 h-4 w-4" />
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10"></div>
        <div className="absolute top-1/2 right-0 w-1/2 aspect-square rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl -z-10"></div>
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Your All-In-One Service Platform
              </h1>
              <p className="text-xl text-muted-foreground">
                Connecting you with essential services - from food delivery to laundry - all in one convenient app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={() => scrollToSection('services')} className="group">
                  <Button size="lg" className="w-full group">
                    Explore Services <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </button>
                <button onClick={() => scrollToSection('how-it-works')}>
                  <Button size="lg" variant="outline" className="w-full">
                    Learn More
                  </Button>
                </button>
              </div>
              <button 
                onClick={() => scrollToSection('services')}
                className="flex items-center text-muted-foreground hover:text-foreground transition-all gap-2 mt-8 mx-auto md:mx-0"
              >
                <span>Scroll to discover</span>
                <ArrowDown className="animate-bounce" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-purple-500 opacity-70 blur-lg"></div>
              <div className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-background/80 to-muted border border-muted">
                <div className="absolute top-4 left-4 right-4 h-8 rounded-md bg-muted flex items-center px-4 space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-muted-foreground">Nexus Platform</div>
                </div>
                <div className="absolute top-16 left-4 right-4 bottom-4 bg-card rounded-md shadow-lg p-4">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                      <div className="h-24 bg-primary/5 rounded-md border border-primary/10 animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded-md w-3/4"></div>
                        <div className="h-4 bg-muted rounded-md"></div>
                        <div className="h-4 bg-muted rounded-md w-1/2"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-32 bg-primary/10 rounded-md border border-primary/20 animate-pulse delay-300"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-muted rounded-md"></div>
                        <div className="h-16 bg-muted rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bring together essential services on one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-background/60 backdrop-blur-sm rounded-lg p-6 shadow-md hover-card border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, fast and efficient - here's how our platform brings services to your doorstep
            </p>
          </div>

          <div className="space-y-12 md:space-y-24">
            {/* Service 1 - Item Delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-background flex items-center justify-center">
                      <Package className="w-24 h-24 text-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Fast Package Delivery</h3>
                <p className="text-muted-foreground mb-6">
                  Get your packages delivered quickly and securely. From documents to large parcels, we handle it all with care.
                </p>
                <ul className="space-y-3">
                  {["Real-time tracking", "Secure handling", "Flexible delivery options", "Proof of delivery"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 2 - Food Ordering */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Delicious Food Delivery</h3>
                <p className="text-muted-foreground mb-6">
                  Order from your favorite local restaurants and enjoy hot, fresh meals delivered to your doorstep.
                </p>
                <ul className="space-y-3">
                  {["Wide restaurant selection", "Special offers and discounts", "Contactless delivery", "Easy reordering"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-primary/50 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border">
                    <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 via-background/80 to-background flex items-center justify-center">
                      <Utensils className="w-24 h-24 text-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service 3 - Laundry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-500/50 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-background/80 to-background flex items-center justify-center">
                      <WashingMachine className="w-24 h-24 text-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Convenient Laundry Service</h3>
                <p className="text-muted-foreground mb-6">
                  Let us handle your laundry with professional care. Schedule pickups and deliveries that fit your busy schedule.
                </p>
                <ul className="space-y-3">
                  {["Professional cleaning", "Fabric-specific care", "Scheduled pickups", "Fast turnaround"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from people who use our services every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The food delivery is always on time and the food arrives hot. I use this app almost daily!",
                author: "Sarah Johnson",
                role: "Regular Customer"
              },
              {
                quote: "Their laundry service saved me so much time. The clothes come back perfectly clean and neatly folded.",
                author: "Michael Chen",
                role: "Premium Subscriber"
              },
              {
                quote: "I've found amazing local service providers through the marketplace. It's like having a trusted network at your fingertips.",
                author: "Jessica Miller",
                role: "Business Owner"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background/60 backdrop-blur-sm rounded-lg p-8 border shadow-sm">
                <div className="text-4xl font-serif text-primary">"</div>
                <p className="my-4 italic">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 aspect-square rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 aspect-square rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Life?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who are making their lives easier with our multi-service platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto">Admin Login</Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Contact Support</Button>
            </div>
            
            <div className="mt-12 p-8 bg-background/60 backdrop-blur-sm rounded-xl border shadow-md">
              <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="flex-grow bg-background/50"
                />
                <Button className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our Privacy Policy and receive updates from our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Nexus Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Item Delivery</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Food Ordering</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Laundry Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">P2P Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Safety</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2025 Nexus Platform. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
