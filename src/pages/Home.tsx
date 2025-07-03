
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
  LogIn,
  Apple,
  PlayCircle,
  Users,
  MessageCircle,
  Star,
  Clock
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
      <header className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/e1e93d24-9824-4a19-8628-f3d8a4cef808.png" 
              alt="ServiPal Logo" 
              className="h-10 w-10"
            />
            <div className="text-2xl font-bold gradient-text">
              ServiPal
            </div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-background to-brand-blue/5 -z-10"></div>
        <div className="absolute top-1/2 right-0 w-1/2 aspect-square rounded-full bg-gradient-to-br from-brand-orange/20 via-brand-blue/10 to-transparent blur-3xl -z-10"></div>
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight gradient-text">
                Your All-In-One Service Platform
              </h1>
              <p className="text-xl text-muted-foreground">
                Connecting you with essential services - from food delivery to laundry - all in one convenient app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={() => scrollToSection('services')} className="group">
                  <Button size="lg" className="w-full group bg-gradient-to-r from-brand-blue to-brand-blue hover:from-brand-blue/90 hover:to-brand-blue/90">
                    Explore Services <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </button>
                <button onClick={() => scrollToSection('how-it-works')}>
                  <Button size="lg" variant="outline" className="w-full border-brand-blue/20 bg-brand-orange/10 hover:bg-brand-orange/20">
                    Learn More
                  </Button>
                </button>
              </div>
              <button 
                onClick={() => scrollToSection('services')}
                className="flex items-center text-muted-foreground hover:text-primary transition-all gap-2 mt-8 mx-auto md:mx-0"
              >
                <span>Scroll to discover</span>
                <ArrowDown className="animate-bounce" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue to-brand-orange opacity-70 blur-2xl rounded-xl"></div>
              <div className="relative h-96 md:h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-background/80 to-background/50 backdrop-blur-sm shadow-2xl border border-border/20">
                {/* Browser bar */}
                <div className="absolute top-4 left-4 right-4 h-8 bg-background/80 rounded-md flex items-center px-4 gap-2 shadow-sm border border-border/30">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-muted-foreground">ServiPal</div>
                </div>
                
                {/* App content */}
                <div className="absolute top-16 left-4 right-4 bottom-4 bg-background/80 backdrop-blur-sm rounded-md shadow-sm border border-border/30 p-4">
                  <div className="flex flex-col gap-4 h-full">
                    {/* Header with connecting people */}
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 rounded-lg border border-border/20">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Connecting People</span>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-background"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-background"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-background"></div>
                      </div>
                    </div>
                    
                    {/* Service connections */}
                    <div className="grid grid-cols-2 gap-3 flex-1">
                      <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-3 rounded-lg border border-blue-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Package className="h-4 w-4 text-blue-600" />
                          <span className="text-xs font-medium">Delivery</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-blue-500" />
                          <span className="text-xs text-muted-foreground">15 min</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-3 rounded-lg border border-orange-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Utensils className="h-4 w-4 text-orange-600" />
                          <span className="text-xs font-medium">Food</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-orange-500 fill-current" />
                          <span className="text-xs text-muted-foreground">4.9</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-3 rounded-lg border border-green-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <WashingMachine className="h-4 w-4 text-green-600" />
                          <span className="text-xs font-medium">Laundry</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3 text-green-500" />
                          <span className="text-xs text-muted-foreground">Chat</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-3 rounded-lg border border-purple-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Handshake className="h-4 w-4 text-purple-600" />
                          <span className="text-xs font-medium">P2P</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3 text-purple-500" />
                          <span className="text-xs text-muted-foreground">Active</span>
                        </div>
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
      <section id="services" className="py-20 bg-gradient-to-br from-brand-orange/5 to-brand-blue/5">
        <div className="max-w-[75vw] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bring together essential services on one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative glass-card p-6 hover-card">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-blue/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-brand-orange/10 to-brand-blue/10 p-3 rounded-full w-fit mb-4 shadow-sm border border-border/20">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-[75vw] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, fast and efficient - here's how our platform brings services to your doorstep
            </p>
          </div>

          <div className="space-y-12 md:space-y-24">
            {/* Service 1 - Item Delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/30 to-brand-orange/30 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/30">
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
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1 shadow-sm border border-border/20">
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
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1 shadow-sm border border-border/20">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/30 to-brand-blue/30 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/30">
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/30 to-primary/30 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/30">
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
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1 shadow-sm border border-border/20">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Service 4 - P2P Marketplace */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">P2P Marketplace</h3>
                <p className="text-muted-foreground mb-6">
                  Connect directly with local service providers and sellers in a secure peer-to-peer marketplace.
                </p>
                <ul className="space-y-3">
                  {["Verified providers", "Secure transactions", "Rating system", "Direct communication"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1 shadow-sm border border-border/20">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/30 to-brand-blue/30 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/30">
                    <div className="absolute inset-0 bg-gradient-to-bl from-green-500/20 via-background/80 to-background flex items-center justify-center">
                      <Handshake className="w-24 h-24 text-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5">
        <div className="max-w-[75vw] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">What Our Customers Say</h2>
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
              <div key={idx} className="relative glass-card p-8 shadow-lg group">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-4xl font-serif text-primary">"</div>
                  <p className="my-4 italic">{testimonial.quote}</p>
                  <div className="mt-6">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Download Buttons */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-blue/5 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 aspect-square rounded-full bg-gradient-to-br from-brand-orange/10 to-transparent blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 aspect-square rounded-full bg-gradient-to-tr from-brand-blue/10 to-transparent blur-3xl -z-10"></div>
        
        <div className="max-w-[75vw] mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Simplify Your Life?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who are making their lives easier with our multi-service platform.
            </p>
            
            {/* Download buttons for mobile apps with icons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto flex items-center gap-2">
                <PlayCircle size={20} />
                Download for Android
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-border/30">
                <Apple size={20} />
                Download for iOS
              </Button>
            </div>
            
            <div className="mt-12 p-8 glass-card rounded-xl shadow-lg relative group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="flex-grow bg-background/50 border-border/30"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t border-border/30">
        <div className="max-w-[75vw] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">ServiPal</h3>
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
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2025 ServiPal. All rights reserved.</p>
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

